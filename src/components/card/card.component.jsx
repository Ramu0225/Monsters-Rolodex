import React from 'react';
import './card.styles.css';


export const Card = (props) =>(

<div className = "card-container">
<img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
    
<h2> {props.monster.name} </h2>
<h3>{props.monster.email}</h3>
console.log(props.monster.id);


</div>
);