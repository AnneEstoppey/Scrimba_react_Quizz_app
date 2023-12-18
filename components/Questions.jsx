import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Confetti from 'react-confetti'
import yellowBlob from '../src/intro_yellow_blob.svg'
import blueBlob from '../src/intro_blue_blob.svg'

export default function Questions({ questions, fetchQuestions }) {
  const [answers, setAnswers] = useState({})  // to store user answers
  const [submitted, setSubmitted] = useState(false)   // to handle submit state
  const [score, setScore] = useState(0) // to store the score
  const [quizStarted, setQuizStarted] = useState(true) // to handle quiz state

  Questions.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      answer: PropTypes.string.isRequired,
    })).isRequired,
    fetchQuestions: PropTypes.func.isRequired,
  }

  const handleSelect = (questionId, answer) => {  // to handle user answer selection
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
    calculateScore()
  }

  const calculateScore = () => { // to calculate the score
    let correctAnswers = 0
    for (let question of questions) {
      if (question.answer === answers[question.id]) {
        correctAnswers++
      }
    }
    setScore(correctAnswers)
  }

  const getButtonClass = (questionId, option) => {  // to handle button classes
    let classes = 'answer-button';
    if (answers[questionId] === option) classes += ' selected';
    if (submitted) {
      const question = questions.find(q => q.id === questionId)
      if (question && question.answer === option) {
        classes += ' correct';
      } else if (answers[questionId] === option) {
        classes += ' incorrect';
      }
    }
    return classes;
  }

  const restartQuiz = () => { // to handle quiz restart
    setQuizStarted(false)
    setSubmitted(false)
    setScore(0)
    setAnswers({})
    fetchQuestions()
  }

  useEffect(() => {
    if (!quizStarted) {
      setQuizStarted(true)
    }
  }, [quizStarted])

  return (
    <div className="questions-container">
      <img className="intro-yellow-blob" src={yellowBlob} style={{ width: '18%' }} />
      <img className="intro-blue-blob" src={blueBlob} style={{ width: '14%' }} />
      {questions?.map(question => (
        <div key={question.id} className="question">
          <p className="question-text">{question.text}</p>
          <div className="answer-container">
            {question.options.map(option => (
              <button
                key={option}
                className={getButtonClass(question.id, option)}
                onClick={() => handleSelect(question.id, option)}
                disabled={submitted}
              >
                {option}
              </button>
            ))}
          </div>
          <hr className='question-separator' />
        </div>
      ))}
      {submitted && (
        <div className="results" style={{ textAlign: 'center' }}>
          <p className="score-text">Your score is {score}/{questions.length}</p>
          {score === questions.length && <Confetti width={550} />} {/* comment/uncomment this line to add/remove confetti effect */}
          <button className="check-answers-btn" onClick={restartQuiz}>
            Play again
          </button>
        </div>
      )}
      {!submitted && (
        <button className="check-answers-btn" onClick={handleSubmit}>
          Check answers
        </button>
      )}
    </div>
  )
}