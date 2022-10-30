import React from 'react'
import SignUpForm from '../components/SignUpForm'
import LogInForm from '../components/LogInForm'

function AuthPage({ setUser }) {
  return (
    <div>
      <h1>Authentication Page</h1>
      <SignUpForm setUser={setUser} />
      <LogInForm setUser={setUser} />
    </div>
  )
}

export default AuthPage