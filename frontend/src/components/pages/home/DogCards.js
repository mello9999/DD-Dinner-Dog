import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "../home/DogCards.css";

function DogCards() {
    const [dog, setDog] = useState([
        {
            name: "Lucy",
            url:
                "https://www.rover.com/blog/wp-content/uploads/2019/11/shiba-dreamstime-960x540.jpg",
        },
        {
            name: "Bobby",
            url:
                "https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg",
        }
    ]);
    //Piece of code which runs based on a condition
    
    //BAD
    //const dog = [];
    //dog.push('sonny', 'qazi')
    //GOOD (Push to an array in REACT)
    //setDog([...people, 'sonny', 'qazi']) 

    return (
        <div>
            <div className="dogCards_cardContainer">
            {dog.map((dog) => (
                <TinderCard
                    className="swipe"
                    key={dog.name}
                    preventSwipe={["up", "down"]}
                >
                    <div
                        style={{ backgroundImage: `url(${dog.url})` }}
                        className="card">
                        <h3>{dog.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}
export default DogCards;