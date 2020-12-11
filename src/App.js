import React from "react";
import './App.css';
import DateDetails from "./components/card/Date";
import NumberDetails from "./components/card/Number";
import NameDetails from "./components/card/Owner";
import SecurityDetails from "./components/card/Security";

function App() {
  const [cardData, setCardData] = React.useState([]);
  const center = {display: "flex", justifyContent: "center"}
  
  const button = {
    display: "flex",
    justifyContent: "center"
  }
  const [cardNumber, setCardNumber] = React.useState("");
  const [date, setDate] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [name, setName] = React.useState("");
  const handleSubmit = () => {
    if(cardNumber.length < 16 || isNaN(cardNumber)) {
      setCardNumber("");
      alert("Enter Valid Card Number");
      return;
    }
    if(isNaN(cvv)) {
      setCvv("");
      alert("CVV is Invalid");
      return;
    }
    let expiryDate = date.split("/");
    if(expiryDate[1] < "20") {
      alert("Enter Valid Expiry Date");
      return;
    }
    const newCardData = {
      number: cardNumber,
      expiryDate: date,
      cvv: cvv,
      name: name
    }
    let cardDataCopy = [...cardData];
    cardDataCopy.push(newCardData);
    setCardData(cardDataCopy);
    setCardNumber("");
    setCvv("");
    setDate("");
    setName("");
  }
  return (
    <>
      <h1 className="header">Credit Card Payment Gateway</h1>
      <div id="details-container">
        <div style={center}><b>Payment Details</b></div>
        <NumberDetails number={cardNumber} setCardNumber={setCardNumber} />
        <DateDetails date={date} setDate={setDate} />
        <SecurityDetails cvv={cvv} setCvv={setCvv} />
        <NameDetails name={name} setName={setName} />
        <div style={button}><button style={{margin: "10px", backgroundColor: "lightgreen", width: "90%"}} onClick={handleSubmit}>Confirm Payment</button></div>
      </div>
    </>
  );
}
export default App;
