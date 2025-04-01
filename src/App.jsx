import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[height,setheight]=useState(0);
  const[weight,setweight]=useState(0);
  const[bmi,setbmi]=useState('');
  const[message,setmessage]=useState('');

   const handlesubmit=(e)=>{

    e.preventDefault();
    if(height==0){
      alert('Enter valid height')
      return;
    }
    else if(weight==0){
      alert('enter valid weight')
      return;
    }
    const heightInMeters = height / 100;

    // BMI Formula: weight (kg) / height² (m²)
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setbmi(bmiValue);
    
     // BMI Categories
     if (bmiValue < 18.5) {
      setmessage("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setmessage("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
    setmessage("Overweight");
    } else {
    setmessage("Obese");
    }

    



  }
 return(
  <div className="conatainer">
    <form  onSubmit={handlesubmit}>
      <h1 id='header'>BMI CALCULATOR</h1>
      <label className='labels'>HEIGHT (in cm)</label>
      <input id='inputs' type="number" placeholder='Enter Your Height' value={height} onChange={(e)=>{setheight(e.target.value)}} />
      <br />
      <label className='labels'>WEIGHT (in Kg)</label>
      <input id='inputs' type="number" placeholder='Enter Your Weight' value={weight} onChange={(e)=>{setweight(e.target.value)}} />
      <br />

      <button type='submit'>SUBMIT</button>
    
        <p>YOUR BMI IS : {bmi}</p>
        <p>YOU ARE {message}</p>
      

      
    </form>
  </div>
 )
}

export default App
