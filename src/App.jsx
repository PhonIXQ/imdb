import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
   const [episode, setEpisode] = useState(0);

   return (
      <div className="App">
         <header className="App-header">
            <h3>imdboy</h3>
            <img src={logo} className="App-logo" alt="logo" />

            <div></div>
            <ul>
               <li className="disflex">
                  <div className="imglogo">
                     <img src="https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_QL75_UY148_CR1,0,100,148_.jpg" alt="logo" />
                  </div>
                  <ul className="title">
                     <li className="heading">Harry Potter and the Sorcerer's Stone</li>
                     <li>2001</li>
                     <li>Daniel Radcliffe, Rupert Grint</li>
                  </ul>
               </li>
               <li className="disflex">
                  <div className="imglogo">
                     <img src="https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_QL75_UY148_CR0,0,100,148_.jpg" alt="logo" />
                  </div>
                  <ul className="title">
                     <li className="heading">Harry Potter and the Goblet of Fire</li>
                     <li>2005</li>
                     <li>Daniel Radcliffe, Emma Watson</li>
                  </ul>
               </li>
               <li className="disflex">
                  <div className="imglogo">
                     <img src="https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_QL75_UY148_CR0,0,100,148_.jpg" alt="logo" />
                  </div>
                  <ul className="title">
                     <li className="heading">Harry Potter and the Prisoner of Azkaban</li>
                     <li>2004</li>
                     <li>Daniel Radcliffe, Emma Watson</li>
                  </ul>
               </li>
            </ul>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
               Learn React with Me
            </a>
            <button onClick={() => setEpisode((episode) => episode + 1)}>Episode {episode}</button>
         </header>
      </div>
   );
}

export default App;
