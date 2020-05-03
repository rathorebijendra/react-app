import React from 'react';
import './Person.css';
const person =(props)=>{
    return (
        <div className="Person">
            <p>i am a person {props.name} and i am {props.age}</p>
            <p> {props.children}</p>
            <input 
                type="text" 
                onChange={props.changed}  
                value={props.name}
            /> 
            <p>i am </p>
        </div>
    )
};

export default person;