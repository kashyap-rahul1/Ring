import Navbar from './Navbar';
import Login from './Login';
import Entries from './Entries';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path="/" element={ <Login/>}>
    
      </Route>
      <Route path="/entries" element={ <Entries  />}>
       
      </Route>
      <Route path="/login" element={ <Login  />}>
       
      </Route>
    </Routes>

     
     
    </div>
  );
}

export default App;
