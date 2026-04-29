import { useEffect, useRef, useState } from "react";

function Stopwatch() {
  const [currentTime, setCurrentTime] = useState(0); // in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const onStart = () => {
    if (isRunning) return; // avoid multiple intervals
    setIsRunning(true);
    intervalRef.current = window.setInterval(() => {
      setCurrentTime((prev) => prev + 10);
    }, 10); // update every 10ms
  };

  const onPause = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const onReset = () => {
    onPause();
    setCurrentTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor((currentTime % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(2, "0")}`;
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime()}</h2>
      <div>
        <button onClick={onStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={onPause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
