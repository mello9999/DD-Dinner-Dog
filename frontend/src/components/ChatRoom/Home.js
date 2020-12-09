import React, { useEffect, useState } from 'react';
import './style.css';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getRealtimeUsers, updateMessage, getRealtimeConversations } from '../../actions';
import LocalStorageService from '../../services/localStorageService';
import axios from '../../config/axios';

import jwtDecode from 'jwt-decode';

const User = (props) => {


  const {user, onClick} = props;
  
  return (
    <div onClick={() => onClick(user)} className="displayName">
                  <div className="displayPic">
                      <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="" />
                  </div>
                  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', margin: '0 10px'}}>
                      <span style={{fontWeight: 500}}>{user.likeName}</span>
                      
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
  let unsubscribe;
  useEffect(() => {
    const token = LocalStorageService.getToken();
    if (token) {
        const localUser = jwtDecode(token);
        console.log('idddddddddddddddddddddddddddddddddd')
        console.log(localUser, 'idddddddddddddddddddddddddddddddddd')
        axios
            .post("/users/like", { uid: localUser.id })
            .then((res) => {
              console.log(res.data,'asdsdsdsdsd')
              setUss(res.data.users);
              alert("LIKE SUCCESS")
            }).catch((err) => alert("LIKE ERROR"));

    }
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

    setChatStarted(true)
    setChatUser(`${uss.ownerName}`)
    setUserUid(user.uid);

    dispatch(getRealtimeConversations({ uid_1: auth.uid, uid_2: user.uid }));

  }

  const submitMessage = (e) => {

    const msgObj = {
      user_uid_1: auth.uid,
      user_uid_2: userUid,
      message
    }


    if(message !== ""){
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


          {
            
            uss.length > 0 ?
            uss.map(user => {
              console.log(user, 'userss')
              return (
                <User 
                  onClick={initChat}
                  key={user.uid} 
                  user={user} 
                  />
              );
            }) : null
          }

            
                    
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
                    <div style={{ textAlign: con.user_uid_1 == auth.uid ? 'right' : 'left' }}>
                    <p className="messageStyle" >{con.message}</p>
                  </div> )
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