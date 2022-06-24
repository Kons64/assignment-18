import React, { useState } from "react";
const AddAlarm = (props) => {
  [enteredTime, setEnteredTime] = useState("");
  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.addAlarmData(enteredTime);
  };

  return (
    <form>
      <div>
        <label>Time</label>
        <input type="text" onChange={timeChangeHandler} />
      </div>
      <div>
        <button onClick={submitHandler}>Add Alarm</button>
      </div>
    </form>
  );
};
export default AddAlarm;
