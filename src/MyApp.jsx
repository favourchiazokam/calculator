import "./style.css";
import React, { useState } from "react";

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
  const [value, setValue] = useState("");

  return (
    <div className="body">
      <div className="calculator">
        <div className="screen">{value}</div>
        <div className="buttons">
          <div className="group">
            <Button title="C" action={() => setValue("")} />
            <Button title="(" action={() => setValue(value + "(")} />
            <Button title=")" action={() => setValue(value + ")")} />
            <Button title="÷" actionBtn action={() => setValue(value + "/")} />
          </div>
          <div className="group">
            <Button title="7" action={() => setValue(value + "7")} />
            <Button title="8" action={() => setValue(value + "8")} />
            <Button title="9" action={() => setValue(value + "9")} />
            <Button title="X" actionBtn action={() => setValue(value + "*")} />
          </div>
          <div className="group">
            <Button title="4" action={() => setValue(value + "4")} />
            <Button title="5" action={() => setValue(value + "5")} />
            <Button title="6" action={() => setValue(value + "6")} />
            <Button title="-" actionBtn action={() => setValue(value + "-")} />
          </div>
          <div className="group">
            <Button title="1" action={() => setValue(value + "1")} />
            <Button title="2" action={() => setValue(value + "2")} />
            <Button title="3" action={() => setValue(value + "3")} />
            <Button title="+" actionBtn action={() => setValue(value + "+")} />
          </div>
          <div className="group">
            <Button title="0" long action={() => setValue(value + "0")} />
            <Button title="." action={() => setValue(value + ".")} />
            <Button
              title="="
              actionBtn
              action={() => {
                try {
                  setValue(eval(value));
                } catch (error) {
                  alert(error);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyApp;
