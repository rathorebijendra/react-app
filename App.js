import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutPut from './UserOutput/UserOutPut';
  const app=props =>{
    const setOutPutstate ={
      userName:"supermax"
    }
     const [personState, setPersonstate]=useState({
    person :[
      {name :'bijendra', age :22 },
      {name :'pandey', age :23 },
      {name :'mukul', age :24 }

    ],
    otherState :'some other value'

   } );
   
    const switchNameHandler = (newName) =>{
    setPersonstate( { 
      person :[
      {name : newName, age :24 },
      {name :'pandey', age :28 },
      {name :'mukul', age :27 }
  
     ]
     }
     )
  }
     const nameChangedHandler=(event)=>{
    setPersonstate( { 
      person :[
      {name :event.target.value, age :24 },
      {name :event.target.value, age :28 },
      {name :event.target.value, age :27 }
  
     ]
     }  
     )
  }
  const style={
    backgroundColor :'White',
    font :'inherit',
    border :'1x solid blue',
    padding:'8px',
    cursor:'ponter'
  };

    return (
      <div className="App">
          <h1> hi i am react doveloper  </h1>
          <p>this is really working</p>
          <button 
          style={style}
          onClick={ () => switchNameHandler('pandey !')}>
             switchName </button>
          <Person 
            name={personState.person[0].name}
            age={personState.person[0].age}
            click={()=> switchNameHandler('Rathore')} 
            changed={nameChangedHandler}
          />
          <Person 
            name={personState.person[1].name} 
            age={personState.person[1].age}
            click={()=> switchNameHandler('Rathore')} 
            changed={nameChangedHandler} > 
            my hobbies : Racing</Person>
          <Person
           name={personState.person[2].name }
           age={personState.person[2].age}
           click={()=> switchNameHandler('Rathore')} 
           changed={nameChangedHandler}
           />
          <UserInput/>
            <UserOutPut userName={setOutPutstate.userName}/>
            <UserOutPut userName={setOutPutstate.userName}/>
          </div>
    );
};
export default app;
