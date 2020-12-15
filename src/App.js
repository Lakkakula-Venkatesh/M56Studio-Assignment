import React from "react";
import './App.css';
import DateDetails from "./components/card/Date";
import NumberDetails from "./components/card/Number";
import NameDetails from "./components/card/Owner";
import SecurityDetails from "./components/card/Security";
import axios from 'axios';

function App() {
  const [cardNumber, setCardNumber] = React.useState("");
  const [date, setDate] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  
  const handleSubmit = () => {
    if(cardNumber.length !== 16 || isNaN(cardNumber)) {
      setCardNumber("");
      alert("Enter Valid Card Number");
      return;
    }
    if(cvv.length !== 3 || isNaN(cvv)) {
      setCvv("");
      alert("CVV is Invalid");
      return;
    }
    let expiryDate = date.split("/");
    if(!validateExpiryDate(expiryDate)) {
      setDate("");
      alert("Enter Valid Expiry Date");
      return;
    }
    const newCardData = {
      number: cardNumber,
      date: date,
      cvv: cvv,
      name: name
    }
    axios.post("http://localhost:8000/", newCardData).then(() => setMessage("Succesfully Added")).catch((err) => console.log(err));
    setCardNumber("");
    setCvv("");
    setDate("");
    setName("");
  }
  const validateExpiryDate = (date) => {
    if(parseInt(date[0]) < 0 || parseInt(date[0]) > 12 || parseInt(date[1]) < 20) {
      return false;
    }
    return true;
  }
  return (
    <>
      <h1 className="header">Credit Card Payment Gateway</h1>
      <div id="details-container">
        <div className="center"><b>Payment Details</b></div>
        <NumberDetails number={cardNumber} setCardNumber={setCardNumber} setMessage={setMessage} />
        <DateDetails date={date} setDate={setDate} setMessage={setMessage} />
        <SecurityDetails cvv={cvv} setCvv={setCvv} setMessage={setMessage} />
        <NameDetails name={name} setName={setName} setMessage={setMessage} />
        <div className="button"><button style={{margin: "10px", backgroundColor: "lightgreen", width: "90%"}} onClick={handleSubmit}>Confirm Payment</button></div>
      </div>
      {message.trim().length !== 0 && <div id="success">Added Succesfully</div>}
    </>
  );
}
export default App;
