import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
   let ep = 31;
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
                     <img src="https://m.media-amazon.com/images/M/MV5BNzdlMGY1NDMtNzNjNi00YjE5LTlhZmUtNGNiNWQ1NTMxMTdmXkEyXkFqcGdeQXVyMjI2ODE1NTA@._V1_QL75_UY562_CR21,0,380,562_.jpg" alt="logo" />
                  </div>
                  <ul className="title">
                     <li className="heading">Till the End of the Moon</li>
                     <li>TV Series - 2023</li>
                     <li>
                        {40} of {ep} episodes
                     </li>
                  </ul>
               </li>
               <li className="disflex">
                  <div className="imglogo">
                     <img src="https://m.media-amazon.com/images/M/MV5BZjE5ZDJmZGItMDRkNi00YjAxLTliYjQtYjBjZjk4Yjk4NjdhXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_QL75_UX380_CR0,4,380,562_.jpg" alt="logo" />
                  </div>
                  <ul className="title">
                     <li className="heading">King the Land</li>
                     <li>TV Series - 2023</li>
                     <li>
                        {4} of {16} episodes
                     </li>
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
            {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
               Learn React with Me
            </a> */}
            {/* <button onClick={() => setEpisode((episode) => episode + 1)}>Episode {episode}</button> */}
         </header>
         <footer>
            <a href="/">PhonIXQ</a> <span>&copy; 2023</span>
         </footer>
      </div>
   );
}

export default App;
