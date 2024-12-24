import './App.css'
import Cover from './Components/Cover/Cover'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'

function App() {
  

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[1320px]'>
            <Navbar></Navbar>
            <Cover></Cover>
            <Recipes></Recipes>
        </div>
      </div>
    </>
  )
}

export default App
