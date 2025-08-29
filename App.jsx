import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MyContext} from './Context';
import GetAll from './GetAll';


      let apiParameters ={
    apiMethod: '',
    name: '',
    amount:0,
    email:''
    };



function App() {
const[showGrid,setShowGrid] = useState(false);
const [isNameDisabled, setNameIsDisabled] = useState(true);
const [isAmountDisabled, setAmountIsDisabled] = useState(true);
const [isEmailDisabled, setEmailIsDisabled] = useState(true);
const [isApiCall, setApiCall] =  useState({
    apiMethod: "GetAll",
    name: "",
    amount:0,
  });

 const sayHello=()=> {
  apiParameters ={
    apiMethod: methodSelections.value,
    name: nameInput.value,
    amount:amountInput.value,
    email:emailInput.value,
    };

    setShowGrid(prev =>!prev)
  };

 

const handleChange = (e) => {
  

  if(e.target.value=="GetAll")
  {

/*  apiParameters ={
    apiMethod: 'GetAll',
    name: '',
    amount:0,
    }; */

   setNameIsDisabled(true);
  setAmountIsDisabled(true);
   setEmailIsDisabled(true);
  }
  if(e.target.value=="GetUser")
  {
/*      apiParameters ={
    apiMethod: 'GetUser',
    name: nameInput.value,
    amount:0,
    }; */

     setNameIsDisabled(false);
    setAmountIsDisabled(true);
    setEmailIsDisabled(true);

  apiParameters ={
    apiMethod: 'GetUser',
    name: nameInput.value,
    amount:0,
    };

  }
   if(e.target.value=="PostUser")
  {
   /*   apiParameters ={
    apiMethod: 'PostUser',
    name: '',
    amount:0,
    }; */
 

    setNameIsDisabled(false);
    setAmountIsDisabled(false);
     setEmailIsDisabled(false);
  }
  if(e.target.value=="DeleteUser")
  {
   /*   apiParameters ={
    apiMethod: 'DeleteUser',
    name: '',
    amount:0,
    }; */
  

  
    setNameIsDisabled(false);
    setAmountIsDisabled(true);
       setEmailIsDisabled(true);
  }
  if(e.target.value=="PutUser")
  {
    //  apiParameters ={
    // apiMethod: 'PutUser',
    // name: '',
    // amount:0,
    // };
  

  
    setNameIsDisabled(false);
    setAmountIsDisabled(true);
    setEmailIsDisabled(true);
  }



};

  return (
    <>
      <div>

         
      </div>
      <h1>Az React API</h1>
      <div className="card">
        <div>
          <div>
             <label  style={{marginRight:'20px', marginBottom:'20px'}} >Select An API Method</label>
              <select style={{marginRight:'20px', marginBottom:'20px'}} onChange={handleChange} id='methodSelections'>
              <option value="GetAll">GetAll</option>
              <option value="GetUser">GetUser</option>
              <option value="PostUser">PostUser</option>
             {/*  <option value="DeleteUser">DeleteUser</option>
              <option value="PutUser">PutUser</option> */}
            </select>
          </div>
           <div>
         <input  hidden={isNameDisabled} style={{marginBottom:'20px'}} className="search-input" id='nameInput' placeholder='Enter name..'></input>
         </div>
         <div>
          <input hidden={isAmountDisabled}  style={{marginBottom:'20px'}}  className="search-input" id='amountInput'placeholder='Enter amount..'></input>
         </div>
         <div>
          <input hidden={isEmailDisabled}  style={{marginBottom:'20px'}}  className="search-input" id='emailInput'placeholder='Enter email..'></input>

         </div>
         <button className="search-button" onClick={sayHello}>
          Submit</button>
         <MyContext.Provider value={apiParameters}>
         <GetAll />
         </MyContext.Provider>
      </div>
   </div>
    </>
  )
}

export default App
