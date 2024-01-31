import {Route,Routes} from "react-router-dom"
import ShowDescription from "./components/ShowDescription";
import Movies from "./components/Movies";

const App = () => {
 

  return (
    <div>
    <Routes>
      <Route path="/" element={<Movies/>}/>
      <Route path="/show/:id" element={<ShowDescription/>}/>
    </Routes>
     
    </div>
  );
};

export default App;
