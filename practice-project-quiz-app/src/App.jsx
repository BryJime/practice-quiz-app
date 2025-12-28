import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Selection from './components/Selection.jsx';

function App() {

  return (
    <> 
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/header' element={<Header />} />
          <Route path='/selection' element={<Selection />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
