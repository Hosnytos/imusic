import React from "react";
import "./Greetings.css";

const user = "Ronaldo";

function Greetings() {
  return (
    <div className="container">
      <div className="profile">
        <img
          src="https://img.uefa.com/imgml/TP/players/3/2020/324x324/63706.jpg"
          alt="profile"
        />
        <span>
          Welcome back, <strong>{user}</strong>
        </span>
      </div>
    </div>
  );
}

export default Greetings;
