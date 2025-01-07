import React from 'react';
import FrontBody from './components/FrontBody';
import Muscle from './pages/Muscle';

function App() {
  const [page, setPage] = React.useState("home");
  const [muscle, setMuscle] = React.useState("");

  function doMuscleClick(bodyPart:string) {
    setPage("muscle");
    setMuscle(bodyPart);
  }

  return (
    <div>
      {page === "home" && (
        <div>
          <FrontBody onBodyPartClick = {doMuscleClick}/>
        </div>
      )}
      {page === "muscle" && (
        <div>
          <Muscle muscle = {muscle} />
        </div>
      )}
    </div>
  );
}


export default App;
