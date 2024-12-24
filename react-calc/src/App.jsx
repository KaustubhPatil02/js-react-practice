import React from 'react'
import Calculator from './components/Calculator'

const App = () => {
  return (
    <div>
       <h1 className="flex items-center justify-center pb-5 text-3xl underline fonmt-bold"> 
      Basic Calculator using React and Tailwind CSS
    </h1>
      <Calculator/>
    </div>
  )
}

export default App
