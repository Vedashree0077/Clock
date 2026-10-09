import { useEffect, useState } from "react";
import "./WallClock.css";

function WallClock() {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0
  });

  useEffect(() => {
  fetch("https://analog-wall-clock-backend.onrender.com/api/time")
    .then((response) => response.json())
    .then((data) => {
      setTime(data);
    })
    .catch((error) => {
      console.error("Error fetching time:", error);
    });
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setTime((previousTime) => {
      let newSecond = previousTime.second + 1;
      let newMinute = previousTime.minute;
      let newHour = previousTime.hour;

      if (newSecond === 60) {
        newSecond = 0;
        newMinute += 1;
      }

      if (newMinute === 60) {
        newMinute = 0;
        newHour += 1;
      }

      if (newHour === 24) {
        newHour = 0;
      }

      return {
        hour: newHour,
        minute: newMinute,
        second: newSecond
      };
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);

  const hourAngle =
  (time.hour % 12) * 30 +
  time.minute * 0.5 +
  time.second * (0.5 / 60);

  const minuteAngle =
    time.minute * 6 + time.second * 0.1;

  const secondAngle =
    time.second * 6;

  const numbers = Array.from(
    { length: 12 },
    (_, index) => index + 1
  );

  const minuteMarks = Array.from(
    { length: 60 },
    (_, index) => index
  );

  return (
    <div className="wall-clock">
      <div className="clock-face">

        {/* Minute marks */}

        {minuteMarks.map((mark) => (
          <div
            key={mark}
            className={`minute-mark ${
              mark % 5 === 0 ? "hour-mark" : ""
            }`}
            style={{
              transform: `rotate(${mark * 6}deg)`
            }}
          />
        ))}

        {/* Numbers */}

        {numbers.map((number) => (
          <div
            key={number}
            className={`clock-number number-${number}`}
          >
            {number}
          </div>
        ))}

        {/* Hour hand */}

        <div
          className="hour-hand"
          style={{
            transform: `rotate(${hourAngle}deg)`
          }}
        />

        {/* Minute hand */}

        <div
          className="minute-hand"
          style={{
            transform: `rotate(${minuteAngle}deg)`
          }}
        />

        {/* Second hand */}

        <div
          className="second-hand"
          style={{
            transform: `rotate(${secondAngle}deg)`
          }}
        />

        {/* Center */}

        <div className="center-pin" />

      </div>
    </div>
  );
}

export default WallClock;
