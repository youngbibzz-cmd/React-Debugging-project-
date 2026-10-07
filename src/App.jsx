import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import UserProfile from './components/UserProfile.jsx'
import Counter from './components/Counter.jsx'

function App() {
  const [user] = useState({
    name: 'Jordan Lee',
    email: 'jordan.lee@example.com',
    profession: 'Product Designer',
  })
  const [count, setCount] = useState(7)

  return (
    <div className="app-shell">
      <Navbar title="React Debugging Dashboard" />
      <main className="dashboard">
        <header className="page-heading">
          <div>
            <p className="eyebrow">OVERVIEW / TEAM DIRECTORY</p>
            <h1>Your workspace</h1>
            <p className="page-description">A quick look at your profile and activity.</p>
          </div>
          <div className="online-status"><span /> All systems normal</div>
        </header>

        <div className="dashboard-grid">
          <UserProfile user={user} />
          <Counter
            value={count}
            onIncrease={() => setCount((currentCount) => currentCount + 1)}
            onDecrease={() => setCount((currentCount) => currentCount - 1)}
          />
        </div>
        <p className="dashboard-footnote">PERSONAL DASHBOARD <span>•</span> UPDATED JUST NOW</p>
      </main>
    </div>
  )
}

export default App
