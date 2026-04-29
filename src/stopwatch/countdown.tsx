import { useEffect, useRef, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(90000); // in seconds (1 min 30 sec as default)
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / (60 * 1000));
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    const centiSecs = (timeLeft % 1000) / 10;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(centiSecs).padStart(2, "0")}`;
  };

  const startCountdown = () => {
    if (isRunning || timeLeft <= 0) return;
    setIsRunning(true);

    intervalRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 10) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          return 0;
        }
        return prev - 10;
      });
    }, 10);
  };

  const pauseCountdown = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resetCountdown = () => {
    pauseCountdown();
    setTimeLeft(90000); // reset to initial time
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Countdown Timer</h1>
      <h2>{formatTime()}</h2>
      <div>
        <button onClick={startCountdown} disabled={isRunning || timeLeft <= 0}>
          Start
        </button>
        <button onClick={pauseCountdown} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resetCountdown}>Reset</button>
      </div>
    </div>
  );
}
