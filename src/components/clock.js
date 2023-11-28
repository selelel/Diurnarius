import React, { useState } from "react";

function Time() {
  const [time, setTime] = useState("");
  const currentTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const date = new Intl.DateTimeFormat("en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  setInterval(() => {
    setTime(new Intl.DateTimeFormat("en", currentTime).format(new Date()));
  }, 1000);
  return (
    <div className="border-none p-0 flex">
      <h1 className="text-3xl">
        {date} <h1 className="text-sm justify-end">{time}</h1>
      </h1>
    </div>
  );
}

export default Time;
