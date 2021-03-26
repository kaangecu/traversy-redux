import './App.css';
import Posts from './components/Posts/Posts'
import Postform from './components/Postform/Postform'

function App() {
  return (
    <div className="App">
      <Postform></Postform>
      <hr></hr>
      <Posts></Posts>
      
    </div>
  );
}

export default App;
