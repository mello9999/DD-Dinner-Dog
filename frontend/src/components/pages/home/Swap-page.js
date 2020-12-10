import { Switch } from "@material-ui/core";
import React, { useMemo, useState } from "react";
import { Route, Router } from "react-router-dom";
import Header from "../../core/header/Header";
import DogCards from "../home/DogCards";
import SwipeButtons from "../home/SwipeButtons";
import "../home/SwipeButtons.css";
import "../home/DogCards.css";
import TinderCard from "react-tinder-card";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
const alreadyRemoved = []

const Swap = (props) => {
  const db = props.data;
  let charactersState = db;
  const [dog, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

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
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }
  
  return (
    <div className="Swap-page">
      <div>
        <div className="dogCards_cardContainer">
          {dog.map((dog, index) => (
            <TinderCard
            ref={childRefs[index]} className='swipe'  
              
              
              key={dog.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, dog.name)}
              onCardLeftScreen={() => outOfFrame(dog.name)}
            >
              <div
                style={{ backgroundImage: `url(${dog.url})`, transform: `rotate(${((Math.random() > 0.5) ? 1 : -1) * Math.round(Math.random() * 15)}deg)` }}
                className="card"
              >
                <h3>{dog.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
      <div className="swipeButtons">
        <IconButton className="swipeButtons_repeat" style={{ width: "50px", height: "50px" }}>
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_left" onClick={() => swipe('left')} style={{ width: "50px", height: "50px" }}>
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_star" style={{ width: "50px", height: "50px" }}>
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_right" onClick={() => swipe('right')} style={{ width: "50px", height: "50px" }}>
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_lightning" style={{ width: "50px", height: "50px" }}>
          <FlashOnIcon fontSize="large" />
        </IconButton>

      </div>
    </div>
  );
}
export default Swap;