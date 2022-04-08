import React, { useState } from "react";
import Popup from "./component/Popup/Popup";

function Test(){
    const [trigger, setTrigger] = useState(false)
    return (
        <div>
            <button onClick={() => setTrigger(true)}>Popup</button>
            <Popup trigger={trigger} setTrigger={setTrigger}></Popup>
        </div>
    )
}
export default Test;