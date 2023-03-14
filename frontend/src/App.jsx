import './App.scss'
import groupSelfie from './assets/group_selfie.png'

function App() {
  function openLogin() {
    console.log('test');
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
          <button onClick={openLogin}>Join and <span className='goldy'>Enjoy</span> !</button>
        </div>
        <img src={groupSelfie} className="selfie" alt="Group selfie" />
      </main>
    </div>
  )
}

export default App
