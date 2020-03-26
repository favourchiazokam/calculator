import "./style.css";
import React from "react";

function Button({ title, action, actionBtn, long }) {
  return (
    <button
      className={`${actionBtn ? "action" : ""}  ${long ? "long" : ""}`}
      onClick={action}
    >
      {title}
    </button>
  );
}

function MyApp() {
  let value = "";

  return (
    <div className="body">
      <div className="calculator">
        <div className="screen">{value}</div>
        <div className="buttons">
          <div className="group">
            <Button title="C" />
            <Button title="(" />
            <Button title=")" />
            <Button title="÷" actionBtn />
          </div>
          <div className="group">
            <Button title="7" />
            <Button title="8" />
            <Button title="9" />
            <Button title="X" actionBtn />
          </div>
          <div className="group">
            <Button title="4" />
            <Button title="5" />
            <Button title="6" />
            <Button title="-" actionBtn />
          </div>
          <div className="group">
            <Button title="1" />
            <Button title="2" />
            <Button title="3" />
            <Button title="+" actionBtn />
          </div>
          <div className="group">
            <Button title="0" long />
            <Button title="." />
            <Button title="=" actionBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyApp;
