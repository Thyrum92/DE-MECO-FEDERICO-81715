import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/itemListContainer'
import './styles/Navbar.css'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer text="Bienvenidos a TiendApp" />
    </>
  )
}

export default App
