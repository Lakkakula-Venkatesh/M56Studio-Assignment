import React from "react";

export default function SecurityDetails({cvv, setCvv}) {
    const handleCvvChange = (e) => {
        if(cvv.length > 2) {
            return;
        }
        setCvv(e.target.value);
    }
    return (
        <div>
            <div><b>CVV</b></div>
            <input style={{width: "40px"}} placeholder="CVV" value={cvv} onChange={handleCvvChange} />
        </div>
    );
}