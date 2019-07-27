import React from 'react';
import logo from './logo.svg';
// import './App.css';

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

const App = ({lakes}) => (
  <ul>
      {lakes.map(lake => 
          <li key={lake.id}>{lake.name} | Trailhead: {lake.trailhead}</li>
      )}
  </ul>
)

export default App;

// to run, go to lake-app in terminal 
// npm i
// npm start
// runs project on localhost 3000

// structure: usually you'll have a file for each component or a set of components to keep things organized

// use npm run build to create a production build 
