import React from "react";

export default function NumberDetails({number, setCardNumber}) {
    const handleNumberChange = (e) => {
        if(number.length > 15) {
            return;
        }
        
        setCardNumber(e.target.value);
    }
    return (
        <div>
            <div><b>CARD NUMBER</b></div>
            <input placeholder="Valid Card Number" value={number} onChange={handleNumberChange} />
        </div>
    );
}