import React from "react";

export default function NameDetails({name, setName}) {
    return (
        <div>
            <div><b>Card Owner</b></div>
            <input placeholder="Card Owner Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
}