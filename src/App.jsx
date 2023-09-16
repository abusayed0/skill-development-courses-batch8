
import './App.css'
import Cart from './components/Cart'
import Courses from './components/Courses'
import Header from './components/Header'

function App() {

  return (
    <div className="max-w-[1440px] mx-auto px-1 md:px-6 lg:px-14">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Courses />
        <Cart/>
      </div>
    </div>
  )
}

export default App
