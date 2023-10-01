import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import MainPage from './components/MainPage'
import SingleMovie from './components/SingleMovie'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Menu/>} />
            <Route path='/' element={<MainPage/>} />
            <Route path='/movies/:id' element={<SingleMovie/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

export default App;










