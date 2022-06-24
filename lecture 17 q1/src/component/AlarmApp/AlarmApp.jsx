import React, { useState } from "react";
import AlarmItem from "../AlarmItem/AlarmItem";
import AddAlarm from "../AddAlarm/AddAlarm";

const initialAlarms = [
  {
    id: 1,
    time: "5:00AM",
    active: false,
  },
  {
    id: 2,
    time: "5:26AM",
    active: true,
  },
  {
    id: 3,
    time: "5:35AM",
    active: false,
  },
  {
    id: 4,
    time: "8:00AM",
    active: true,
  },
];

const AlarmApp = () => {
  const [alarms, setAlarms] = useState(initialAlarms);
  const changeData = (alarm) => {
    console.log(alarms);
    setAlarms((prevAlarms) => {
      return prevAlarms.map((element) => {
        if (element.id === alarm.id) {
          if (!element.active) {
            element.active = true;
          }
        }
        return element;
      });
    });
  };
  const addAlarmData = (time) => {
    setAlarms((prevAlarms) => {
      return [
        ...prevAlarms,
        {
          id: prevAlarms.length,
          time: time,
          active: true,
        },
      ];
    });
  };
  return (
    //TODO...
    // <AddAlarm></AddAlarm>
    <div>
      <h1>My Alarm App</h1>
      <ul
        className="list-group list-group-flush"
        style={{ alignItems: "center" }}
      >
        {alarms.map((item, index) => (
          <AlarmItem key={index} {...item} changeData={changeData}></AlarmItem>
        ))}
      </ul>
      <AddAlarm addAlarmData={addAlarmData}></AddAlarm>
    </div>
  );
};

export default AlarmApp;
