import React from "react";
const AlarmItem = (props) => {
  const activeHandler = () => {
    props.changeData(props);
  };
  const { id, time, active } = props;
  return (
    <div>
      <li
        onClick={activeHandler}
        key={id}
        className={
          active
            ? "list-group-item list-group-item-success"
            : "list-group-item list-group-item-danger"
        }
      >
        {time}
      </li>
    </div>
  );
};
export default AlarmItem;
