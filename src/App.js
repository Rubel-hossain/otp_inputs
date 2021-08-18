import { useState } from "react";
import './App.css';
function App() {
  const [phoneNumber,setPhoneNumber] = useState("");
  const [showPhoneNumber,setShowPhoneNumber] = useState(false);
  const [getOptNumbers,setGetOtpNumbers] = useState({
    firstNumber: null,
    secondNumber: null,
    thirdNumber: null,
    fourthNumber: null,
    fiveNumber: null,
  });

  const handleSubmit = (e)=> {
    e.preventDefault();
    setShowPhoneNumber(true);
  }
  const handleChangePhone =(e)=> {
    setPhoneNumber(e.target.value);
    setShowPhoneNumber(false);
  }

  const handleOptInputChange = (e)=> {
    setGetOtpNumbers(prevState=>({...prevState,[e.target.name]: e.target.value}));
    if(e.target.nextSibling){
      e.target.nextSibling.focus();
    }
  }


  return (
    <div className="App">
      <div className="form_wrapper">
        {!showPhoneNumber &&
        <form onSubmit={handleSubmit}>
          <input type="text" 
            placeholder="phone number" 
            required
            value={phoneNumber}
            onChange={handleChangePhone}
            maxLength={5} size={5}
          />
          <br/>
          <button type="submit">Submit</button>
        </form>
        }
      </div>
      { showPhoneNumber  &&
      <div className="user_phonenumber">
        <h4> your Phone Number Is: {phoneNumber} </h4>
      </div>
      }
      {showPhoneNumber &&
      <div className="opt_options_wrapper">
        <p>Fill Up Your OPT Below</p>
        <form>
         <input type="text " name="firstNumber" maxLength={1} onChange={handleOptInputChange} autoFocus={true}  />
         <input type="text"  name="secondNumber" maxLength={1} onChange={handleOptInputChange} />
         <input type="text"  name="thirdNumber" maxLength={1} onChange={handleOptInputChange} />
         <input type="text"  name="fourthNumber" maxLength={1} onChange={handleOptInputChange} />
         <input type="text"  name="fiveNumber" maxLength={1} onChange={handleOptInputChange} />
        </form>
      </div>
       }
    </div>
  );







}

export default App;
