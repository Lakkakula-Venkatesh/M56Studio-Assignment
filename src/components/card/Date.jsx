import React from "react";

export default function DateDetails({date, setDate}) {
    const textboxSize = {
        width: "50px"
    }
    const handleDateChange = (e) => {
        if(date.length === 1) {
            setDate(e.target.value + "/");
            return;
        }
        setDate(e.target.value);
    }
    return (
        <div>
            <div><b>EXPIRY DATE</b></div>
            <input style={textboxSize} placeholder="MM/YY" value={date} onChange={handleDateChange} />
        </div>
    );
}