import React from "react";

export default function NumberDetails({number, setCardNumber, setMessage}) {
    
    return (
        <div>
            <div><b>CARD NUMBER</b></div>
            <input placeholder="Valid Card Number" value={number} onChange={(e) => {setCardNumber(e.target.value); setMessage("")}} />
        </div>
    );
}