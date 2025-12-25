import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';

function App() {

  return (
    <> 
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/header' element={<Header />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
