import React, { useState } from 'react'

const App = () => {
  const [title, setTitile] =useState('')
  const submitHandler=(e)=>{
    console.log('Form submitted')
  }
  return (
    <div>
      <form onSubmit={(e) =>{
        e.preventDefault()
        submitHandler(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter your name'
        onChange={(e) =>{
          setTitle(e.Target.value)
        }}
        />
        <button> Submit </button>
      </form>
    </div>
  )
}

export default App
