import Timer from '@/hook/useTimer';
import { useEffect, useState } from 'react';

interface AuthTimerProps {
  setSeconds: any;
  setMinutes: any;
  seconds: number;
  minutes: number;
}

const AuthTimer = ({ setSeconds, setMinutes, seconds, minutes }: AuthTimerProps) => {
  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return <Timer minutes={minutes} seconds={seconds} />;
};

export default AuthTimer;
