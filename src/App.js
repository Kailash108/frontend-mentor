import MainScreen from './Main'
import SuccessScreen from './SuccessScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" Component={MainScreen} />
          <Route path="/success" Component={SuccessScreen} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
