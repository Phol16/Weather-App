import { useState, useEffect, useMemo } from 'react';
function Time() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const dateTimer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(dateTimer);
  }, []);
  const hour = () => {
    if (time.getHours() <= 9) {
      return `0${time.getHours()}`;
    }
    if (time.getHours() > 12) {
      return time.getHours() - 12;
    }
    return time.getHours();
  };
  const min = () => {
    if (time.getMinutes() <= 9) {
      return `0${time.getMinutes()}`;
    }
    return time.getMinutes();
  };
  const clock = () => {
    if (time.getHours() >= 12) {
      return 'pm';
    }
    return 'am';
  };
  const detailColor = useMemo(() => {
    if (time.getHours() >= 6 && time.getHours() <= 17) {
      return 'black';
    }
    return 'white';
  }, [hour]);
  return (
    <div>
      <p style={{ color: `${detailColor}` }}>
        {hour()}:{min()} {clock()}
      </p>
    </div>
  );
}

export default Time;
