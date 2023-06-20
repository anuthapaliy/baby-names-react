// import logo from './logo.svg';
import './App.css';
import React from "react";
import babyNamesData from "./babyNamesData.json";

const App = () => {
  const sortedNames = [...babyNamesData].sort((a,b)=>a.name.localeCompare(b.name));
  const boysNames = sortedNames.filter((name)=> name.sex === "m");
const girlsName = sortedNames.filter((name) => name.sex === "f");
  return (
    <div>
    <h1>Sorted Names:</h1>

    <h2>Boy's Names:</h2>
    <ul>
      {boysNames.map((name)=> (
        <li key={name.id} style={{color: "skyblue"}}>{name.name}</li>
      ))}
    </ul>

    <h2>Girl's Names:</h2>
    <ul>
      {girlsName.map((name) => (
        <li key={name.id} style={{ color: "pink"}}>{name.name}</li>

      ))}
    </ul>
    </div>
  );
};
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
