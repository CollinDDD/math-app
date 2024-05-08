import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosUndo } from "react-icons/io";
import "./Math.css";

function Division() {
    const [currentProblem, setCurrentProblem] = useState(null);
    const [score, setScore] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(60); // Timer set to 60 seconds
    const [showModal, setShowModal] = useState(false); // State for showing modal

    const operator = '÷';
    const answerInputRef = useRef(null); // Ref for the answer input element

    // Generator function to create a random division problem
    function generateProblem() {
        let num1 = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
        let num2 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10

        // Ensure that the division result is an integer and not higher than 10
        while (num1 % num2 !== 0 || num1 / num2 > 10) {
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
        }

        let problem = `${num1} ${operator} ${num2}`;
        let answer = num1 / num2;
        setCurrentProblem({ problem, answer });
    }

    // Check the answer and update the score
    function checkAnswer(userAnswer) {
        if (parseInt(userAnswer) === currentProblem.answer) {
            setScore(score + 1);
        }
        generateProblem();
        // Reset the input field to blank
        answerInputRef.current.value = "";
    }

    // Timer component
    function Timer({ startTimer }) {
        const timerId = useRef();

        const stopTimer = () => {
            setIsRunning(false);
            setTimer(60); // Reset timer to 60 seconds
            setShowModal(true); // Show the modal with the score
        };

        useEffect(() => {
            if (isRunning) {
                timerId.current = setInterval(() => {
                    setTimer((prevTimer) => {
                        if (prevTimer === 0) {
                            clearInterval(timerId.current);
                            stopTimer(); // Move stopTimer here
                            return prevTimer;
                        }
                        return prevTimer - 1;
                    });
                }, 1000);
                return () => clearInterval(timerId.current);
            }
        }, [isRunning]);

        return (
            <div className="timer">
                <h2 className="time-header">seconds: {timer}</h2>
                {!isRunning ? (
                    <button onClick={startTimer}>Start</button>
                ) : (
                    <button onClick={stopTimer}>Reset</button>
                )}
            </div>
        );
    }

    // Start the game when the component mounts
    useEffect(() => {
        generateProblem();
    }, []);

    // Handle key press event on the answer input
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default behavior of the Enter key
            const nextButton = e.target.closest('.math-container').querySelector('button');
            if (nextButton) {
                nextButton.click(); // Click the next button
            }
        }
    };

    return (
        <>
            <div className='back-to-dash'>
                <Link className='link' to="/dashboard">BACK TO DASHBOARD <IoIosUndo className='arrow' /></Link>
            </div>
            <Timer startTimer={() => { setIsRunning(true); setScore(0); }} />
            <div className="math-container">
                <p className="math-header">Answer as many questions correctly as you can to increase your score!</p>
                
                <div className="score-input">
                    {currentProblem && (
                        <p className='problem'>
                            {currentProblem.problem} = <input
                                className='answer'
                                type="text"
                                ref={answerInputRef}
                                maxLength="3"
                                onKeyDown={handleKeyPress}
                            />
                        </p>
                    )}
                </div>
                <button onClick={() => checkAnswer(answerInputRef.current.value)}>Next<i className="fas fa-arrow-right"></i></button>
                <div className='score'>
                    <p>Score: {score}</p>
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Time's Up!</h2>
                        <p>Your score is: {score}</p>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Division;
