import './App.css';
import Start from './component/Start/Start';
import Main from './component/Main/Main';
import{useState} from "react"


function App() {
  const [page, setPage] = useState(false);

  function changePage(){
    setPage(prevPage => !prevPage)
  }

    
  return (
    <div className="App">
        {!page ? <Start togglePage={changePage}/> : <Main />}
    </div>
  );
}

export default App;
