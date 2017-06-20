import React from 'react' 
import './Signin.css'
import { auth, githubProvider, googleProvider } from './base' 

const SignIn = () => {
    const authenticate = () => {
        auth.signInWithPopup(githubProvider)
      }
    const authenticateGoogle = () => {
      auth.signInWithPopup(googleProvider)
    }
    

  return (
    <div>
      <button className="SignIn" onClick={authenticate} >
        Sign In With Github
      </button>
      <button className="SignInGoogle" onClick={authenticateGoogle}> 
        Sign in With Google
      </button>  
    </div>
    )
}

export default SignIn