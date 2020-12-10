import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "../home/DogCards.css";

function DogCards(props) {
    const [dog, setDog] = useState(props.data);
    const onSwipe = (direction) => {
        if (direction==="right"){
            console.log('like')
        } else if (direction ==="left") {
            console.log('dislike')
        }
    }
    //Piece of code which runs based on a condition
    
    //BAD
    //const dog = [];
    //dog.push('sonny', 'qazi')
    //GOOD (Push to an array in REACT)
    //setDog([...people, 'sonny', 'qazi']) 
   
    return (
        <div>
            <div className="dogCards_cardContainer">
            {dog.map((dog, index) => (
                <TinderCard
                    id="card"
                    className="swipe"
                    ref={props.childRefs[index]}
                    key={dog.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => props.swiped(dir, dog.name)}
                    onCardLeftScreen={() => props.outOfFrame(dog.name)}
                >
                    <div
                        style={{ backgroundImage: `url(${dog.url})`,transform:`rotate(${((Math.random()>0.5)?1:-1)*Math.round(Math.random()*15)}deg)` }}
                        className="card"
                        >
                        <h3>{dog.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}
export default DogCards;