import React, {useEffect, useState}from 'react';
import "../App.css";

export const Cronometro = () => {
    const [time, setTime] = useState(null);
    const [initial, setInitial] = useState(null);

    const tick = () => {
        setTime(new Date(+new Date() - initial));
    }

    const start = () => {
        setInitial(Date.now());
    }
    

    useEffect(() => {
        if (initial) {
            requestAnimationFrame(tick);
        }
    }, [initial]);

    useEffect(() => {
        if (time) {
            requestAnimationFrame(tick);
        }
    }, [time]);
    
    
    
    const timeFormat = (date) => {
        if (!date) {
            return '00:00:00';
        }
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let milliseconds = Math.round(date.getMilliseconds() / 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;

        return `${minutes}:${seconds}:${milliseconds}`;
    }



  return (
    <div className='crono-container'>
        <button onClick={start}>Start</button>
        <h1>{timeFormat(time)}</h1>
    </div>
  )
}
