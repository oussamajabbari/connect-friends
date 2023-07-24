import './App.scss'
import LoginDialog from './LoginDialog'
import groupSelfie from './assets/group_selfie.png'
import { useState } from 'react'

function App() {

  const [isLogingDialogOpen, setIsLogingDialogOpen] = useState(false);

  function openLoginDialog() {
    setIsLogingDialogOpen(true);
  }

  function closeLoginDialog() {
    setIsLogingDialogOpen(false);
  }

  return (
    <div className="App">
      <header>
        <span className='icon'>
          Connect<span className="goldy">Friends</span>
        </span>
        <span className='connection'>
          <span className='login'>Login</span>
          <span>Register</span>
        </span>
      </header>
      <main>
        <div className='slogan-and-join'>
          <div className='slogan'>Share <span className='goldy'>good</span> Vibes</div>
          <div className='slogan-text'>Friends are the sugar of your life, take care of them...</div>
          <button onClick={openLoginDialog}>Join and <span className='goldy'>Enjoy</span> !</button>
        </div>
        <img src={groupSelfie} className="selfie" alt="Group selfie" />
      </main>
      <LoginDialog isLogingDialogOpen={isLogingDialogOpen} onClose={closeLoginDialog}/>
    </div>
  )
}

export default App
