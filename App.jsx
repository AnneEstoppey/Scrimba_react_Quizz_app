import React from 'react'
import { nanoid } from 'nanoid'
import he from 'he'
import Intro from './components/Intro'
import Questions from './components/Questions'

export default function App() {
  const [quizStarted, setQuizStarted] = React.useState(false)
  const startQuiz = () => {
      setQuizStarted(true)
  }
  const [questions, setQuestions] = React.useState([])

  const fetchQuestions = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=5&category=22')
    const data = await response.json()
      
    const processedQuestions = data.results.map(question => ({
      id: nanoid(),
      text: he.decode(question.question),
      options: [
          ...question.incorrect_answers.map(ans => he.decode(ans)), 
          he.decode(question.correct_answer)
          ].sort(() => 0.5 - Math.random()),   // Shuffle the options...
      answer: he.decode(question.correct_answer)
    }))
    setQuestions(processedQuestions)
  }

  React.useEffect(() => {
    fetchQuestions()
  }, [])

  // console.log(questions)

  return (
    <div className="App">
        {quizStarted ? <Questions questions={questions} fetchQuestions={fetchQuestions} /> : <Intro onStartQuiz={startQuiz} />}
    </div>
  )
}
