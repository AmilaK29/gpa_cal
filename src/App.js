
import Marks_Screen from "./screens/marks_screen";
import Subject_Screen from "./screens/subjects_screen";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path = "/" Component={Marks_Screen} />
        <Route path = "/subjects" Component={Subject_Screen}/>
      </Routes>


    </div>
  );
}

export default App;
