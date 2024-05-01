import "./Timer.css";
import {useEffect, useRef, useState } from 'react';

function Timer() {
    const [timer, setTimer] = useState(3);
    const [isRunning, setIsRunning] = useState(false);
    const timerId = useRef();

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const startTimer = () => {
        setIsRunning(true);
    };

    const restartTimer = () => {
        setIsRunning(false);
        setTimer(60);
        window.location.reload(); // Refresh the page
    };

    useEffect(() => {
        if (isRunning) {
            timerId.current = setInterval(() => {
                setTimer(prev => prev -1)
            }, 1000)
            return () => clearInterval(timerId.current)      
        }

    }, [isRunning])

    useEffect(() => {
        if (timer <= 0) {
            clearInterval(timerId.current)
        }
    }, [timer])
    return(
        <div className="timer">
            <h2 className="time-header"> <span className="time">{formatTime(timer)}</span></h2>
            {!isRunning ? (
                <button onClick={startTimer}>Start</button>
            ) : (
                <button onClick={restartTimer}>Restart</button>
            )}
        </div>
    );
}

export default Timer;