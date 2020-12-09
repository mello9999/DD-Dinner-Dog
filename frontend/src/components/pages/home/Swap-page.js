import { Switch } from "@material-ui/core";
import React, {useMemo, useState} from "react";
import { Route, Router } from "react-router-dom";
import Header from "../../core/header/Header";
import DogCards from "../home/DogCards";
import SwipeButtons from "../home/SwipeButtons";


const Swap=(props)=>{
    const alreadyRemoved = [];
    let charactersState = props.data;
    const childRefs = useMemo(() => Array(props.data.length).fill(0).map(i => React.createRef()), [])
    const [characters, setCharacters] = useState(props.data)
    console.log(props.data)
    const [lastDirection, setLastDirection] = useState()
    
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
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = props.data.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }
    return (
        <div className="Swap-page">  
                <DogCards data={props.data} childRefs={childRefs} swiped={swiped} outOfFrame={outOfFrame}/>
                <SwipeButtons swipe={swipe} />
        </div>
    );
}
export default Swap;