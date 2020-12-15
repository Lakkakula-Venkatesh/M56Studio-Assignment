import React from "react";

export default function SecurityDetails({cvv, setCvv, setMessage}) {
    
    return (
        <div>
            <div><b>CVV</b></div>
            <input style={{width: "40px"}} placeholder="CVV" value={cvv} onChange={(e) => {setCvv(e.target.value); setMessage("")}} />
        </div>
    );
}