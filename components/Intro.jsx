import React from 'react'
import yellowBlob from '../src/intro_yellow_blob.svg'
import blueBlob from '../src/intro_blue_blob.svg'

export default function Intro({ onStartQuiz }) {
return (
    <div className="intro-container">
        <img className="intro-yellow-blob" src={yellowBlob}/>
        <img className="intro-blue-blob" src={blueBlob}/>
        <h1 className="intro-title">Quizzical</h1>
            <p className="intro-text">Hello, and welcome to our exciting quizz!</p>
                <button className="start-quiz-btn" onClick={onStartQuiz}>
                Start quiz
                </button>
    </div>
    )
}
