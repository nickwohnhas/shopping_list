import React from 'react'

const HomePage = () => {

  const handleOnClick = () => {
    window.location.href = "/users/sign_out"
  }

  return (
    <div>
      <div className="container">
        <div className="sign-out">
            <button onClick={handleOnClick}>sign out</button>
        </div>
        <header className="header">
          <h1>Shopping List</h1>
        </header> 
      </div>
    </div>
  )
}

export default HomePage