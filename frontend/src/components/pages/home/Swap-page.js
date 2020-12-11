import { Switch } from "@material-ui/core";
import React, { useMemo, useState, useEffect } from "react";
import { Route, Router , useHistory } from "react-router-dom";
import Header from "../../core/header/Header";
import DogCards from "../home/DogCards";
import SwipeButtons from "../home/SwipeButtons";
import { Link } from 'react-router-dom';
import "../home/SwipeButtons.css";
import "../home/DogCards.css";
import TinderCard from "react-tinder-card";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { getRealtimeUsers, updateMessage, getRealtimeConversations } from '../../../actions';
import axios from "../../../config/axios";
const alreadyRemoved = []



const Ppic = (props) => {
  let m = ((Math.random() > 0.5) ? 1 : -1) * Math.round(Math.random() * 15);
  
  const [prc, setPrc] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.post('/doginfo/getinfo', { id: props.data.id }).then(
      (res) => {
        setPrc((res !== undefined) ? res.data : '')
        setName(res.data.name)
      })
  }, [])

 
    return prc ? (<div style={{ backgroundImage: `url(${prc.profilePicture})`, backgroundRepeat:"no-repeat",  backgroundSize:"cover", transform: `rotate(${m}deg)` }}
      className="card"><h3>{name}</h3></div>)  : <div></div>
  
}

const Swap = (props) => {



  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  let charactersState = user.users;
  const [dog, setCharacters] = useState(user.users)
  
  let unsubscribe;
  const [lastDirection, setLastDirection] = useState()
  // const [name, setName] = useState("")
  // const [gender, setGender] = useState("")
  // const [age, setAge] = useState(null)
  // const [breeds, setBreeds] = useState("")
  // const [location, setLocation] = useState("")
  // const [about, setAbout] = useState("")
  // const [profileData, setProfileData] = useState(null)
  // useEffect(() => {
  //   const token = LocalStorageService.getToken();
  //   if (token) {
  //     const user = jwtDecode(token);



  //   }
  // }, [])
  useEffect(() => {
    
    unsubscribe = dispatch(getRealtimeUsers(auth.uid))
      .then(unsubscribe => {
        return unsubscribe;
      })
      .catch(error => {
        console.log(error);
      })

    
    return () => {

      //cleanup
      unsubscribe.then(f => f()).catch(error => console.log(error));

    }
  }, []);

  //console.log(user);

  const childRefs = useMemo(() => Array(charactersState.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = dog.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = charactersState.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }


  const refresh = () => {
    while (alreadyRemoved.length > 0) {
      alreadyRemoved.pop();
    }
  }
  const boost = () => {
    alert('Coming Soon')
  }
  return (
    <div className="Swap-page">
      <div>
        <div className="dogCards_cardContainer">
          {dog.map((dog, index) => (
            <TinderCard                     
              ref={childRefs[index]} className='swipe'


              key={dog.name}
              preventSwipe={["down"]}
              onSwipe={(dir) => swiped(dir, dog.name)}
              onCardLeftScreen={() => outOfFrame(dog.name)}
            >

              <Ppic data={dog} key={index} />



            </TinderCard>
          ))}
        </div>
      </div>
      <div className="swipeButtons">
        <IconButton className="swipeButtons_repeat" onClick={() => refresh()} style={{ width: "50px", height: "50px" }}>
          <Link id="rp" to="/"><ReplayIcon fontSize="large" /></Link>

        </IconButton>
        <IconButton className="swipeButtons_left" onClick={() => swipe('left')} style={{ width: "50px", height: "50px" }}>
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_star" onClick={() => swipe('up')} style={{ width: "50px", height: "50px" }}>
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_right" onClick={() => swipe('right')} style={{ width: "50px", height: "50px" }}>
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_lightning" onClick={() => boost()} style={{ width: "50px", height: "50px" }}>
          <FlashOnIcon fontSize="large" />
        </IconButton>

      </div>
    </div>
  );
}
export default Swap;