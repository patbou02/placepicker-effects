import { useEffect, useState } from 'react';

export default function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const countDown = setInterval(() => {
      console.log('INTERVAL in <ProgressBar />');
      setRemainingTime(prevTime => prevTime - 10)
    }, 10);

    return () => {
      console.log('CLEAR INTERVAL in <ProgressBar />');
      clearInterval(countDown);
    }
  }, []);

  return <progress value={remainingTime} max={timer} />;
}