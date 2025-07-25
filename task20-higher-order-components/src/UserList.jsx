import React from "react";

const UserList = (props) => {
  return (
    <div>
      <ul>
        {props.item.map((user, index) => {
          return (
            <li
              key={index}
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {user}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
