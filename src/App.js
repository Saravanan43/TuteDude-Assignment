import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import FriendRefer from './components/FriendRefer';
import Refer from './components/Refer.jsx';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/*' element={<Refer/>}></Route>
          <Route path='/refer/friendRefer' element={<FriendRefer/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
