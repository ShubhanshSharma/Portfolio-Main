import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=' big-shoulders-stencil-text-semibold opacity-70 relative flex flex-col items-end'>
        <p>2024</p>
        <div>{currentTime.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit', // Ensure minutes are always shown with two digits (01-59)
            hour12: true, // Display in 12-hour format
            })}
        </div>
    </div>
  );
}

export default CurrentTime;
