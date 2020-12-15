import React from "react";

export default function DateDetails({date, setDate, setMessage}) {
    const textboxSize = {
        width: "50px"
    }
    
    return (
        <div>
            <div><b>EXPIRY DATE</b></div>
            <input style={textboxSize} placeholder="MM/YY" value={date} onChange={(e) => {setDate(e.target.value); setMessage("")}} />
        </div>
    );
}