import './App.css';
import Home from "./home/Home";
import NotFound from "./not-found/NotFound";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'*'} element={<NotFound />}/>
    </Routes>
  )
}

export default App;
