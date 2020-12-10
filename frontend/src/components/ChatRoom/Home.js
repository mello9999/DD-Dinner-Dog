import React, { useEffect, useState } from 'react';
import './style.css';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getRealtimeUsers, updateMessage, getRealtimeConversations } from '../../actions';
import LocalStorageService from '../../services/localStorageService';
import axios from '../../config/axios';

import jwtDecode from 'jwt-decode';

const User = (props) => {


  const { user, onClick } = props;
  const [prc, setPrc] = useState('');
  axios
    .post('/doginfo/getinfo/', { id: user.id })
    .then((res) => {

      setPrc(res.data.profilePicture);

    })



  return (
    <div onClick={() => onClick(user)} className="displayName">
      <div className="displayPic">
        <img src={`${prc}`} alt="" />
      </div>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', margin: '0 10px' }}>
        <span style={{ fontWeight: 500 }}>{user.name}</span>

      </div>
    </div>
  );
}

const ChatRoom = (props) => {


  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const [uss, setUss] = useState(user.users)
  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState('');
  const [message, setMessage] = useState('');
  const [userUid, setUserUid] = useState(null)
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  const results = !searchTerm
    ? user.users
    : user.users.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

  let unsubscribe;

  useEffect(() => {

    // axios.post("/users/like", { id: auth.uid }).then(
    //   (res) => {
    //     setUss(res.data.users)
    //     console.log(res.data.users, "usssssss")
    //   }
    // )

    //   .catch((err) => { console.log(err) })
    // const token = LocalStorageService.getToken();
    // if (token) {
    //     const user = jwtDecode(token);
    //     axios
    //     .post('/doginfo/getinfo/', { id: user.id })
    //     .then((res) => {


    //         setProfileData(res.data.profilePicture);

    //     }).catch((err) => {
    //         console.log(err)
    //         alert("refresh error")
    //     });
    //   }


    unsubscribe = dispatch(getRealtimeUsers(auth.uid))
      .then(unsubscribe => {

        return unsubscribe;
      })
      .catch(error => {
        console.log(error);
      })



  }, []);

  //console.log(user);

  //componentWillUnmount
  useEffect(() => {


    return () => {

      //cleanup
      unsubscribe.then(f => f()).catch(error => console.log(error));

    }
  }, []);

  const initChat = (user) => {
    console.log('aaaaa')
    setChatStarted(true)

    setChatUser(`${user.name}`)
    setUserUid(user.uid);
    dispatch(getRealtimeConversations({ uid_1: auth.uid, uid_2: user.uid }));

  }

  const submitMessage = (e) => {

    const msgObj = {
      user_uid_1: auth.uid,
      user_uid_2: userUid,
      message
    }


    if (message !== "") {
      dispatch(updateMessage(msgObj))
        .then(() => {
          setMessage('')
        });
    }

    //console.log(msgObj);

  }


  return (
    <Layout>
      <section className="container">
      <div className="listOfUsers">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <ul>
            {results.map(item => (
              <User
                      onClick={initChat}
                      key={item.uid}
                      user={item}
                    />
            ))}
            </ul>
    
        </div>
          

          <div className="chatArea">

            <div className="chatHeader">
              {
                chatStarted ? chatUser : ''
              }
            </div>
            <div className="messageSections">
              {
                chatStarted ?
                  user.conversations.map(con =>
                    <div style={{ textAlign: con.user_uid_1 === auth.uid ? 'right' : 'left' }}>
                      <p className="messageStyle" >{con.message}</p>
                    </div>)
                  : null
              }


            </div>
            {
              chatStarted ?
                <div className="chatControls">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write Message"
                  />
                  <button onClick={submitMessage}>Send</button>
                </div> : null
            }

          </div>
      </section>
    </Layout>
  );
}

export default ChatRoom;