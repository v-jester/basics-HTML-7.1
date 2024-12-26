import React, { useState } from "react";

function Header() {
  const [birthdayStyle, setBirthdayStyle] = useState({});
  const [schoolStyle, setSchoolStyle] = useState({});
  const [activeStates, setActiveStates] = useState({ active1: 0, active2: 0 });

  const switchColorOfElement = (key, color, backgroundColor) => {
    setActiveStates((prevStates) => {
      const isActive = prevStates[key];
      if (!isActive) {
        if (key === "active1") {
          setBirthdayStyle({ color, backgroundColor });
        } else if (key === "active2") {
          setSchoolStyle({ color, backgroundColor });
        }
        return { ...prevStates, [key]: 1 };
      } else {
        const tempBirthdayStyle = birthdayStyle;
        setBirthdayStyle(schoolStyle);
        setSchoolStyle(tempBirthdayStyle);
        return { ...prevStates };
      }
    });
  };

  return (
    <header>
      <h2>Vysokovskiy Oleksandr Evgenovich</h2>
      <p
        id="birthday"
        style={birthdayStyle}
        onClick={() => switchColorOfElement("active1", "red", "black")}
      >
        03.07.2003 c. Donetsk
      </p>
      <p
        className="school"
        style={schoolStyle}
        onClick={() => switchColorOfElement("active2", "blue", "yellow")}
      >
        School of Kiev number 303
      </p>
    </header>
  );
}

export default Header;
