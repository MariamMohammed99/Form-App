import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form/Form';
import Overview from './Overview/Overview';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </Router>
  );
}

export default App;
