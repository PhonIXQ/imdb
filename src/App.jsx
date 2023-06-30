import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
   let ep = 31;
   const [episode, setEpisode] = useState(0);

   return (
      <div className="App">
         <header className="App-header">
            <h3>Imdboy</h3>
            <img src={logo} className="App-logo" alt="logo" />

            <div></div>
            <ul>
               <li className="disflex">
                  <div className="imglogo">
                     <img src="https://m.media-amazon.com/images/M/MV5BNzdlMGY1NDMtNzNjNi00YjE5LTlhZmUtNGNiNWQ1NTMxMTdmXkEyXkFqcGdeQXVyMjI2ODE1NTA@._V1_QL75_UY562_CR21,0,380,562_.jpg" alt="logo" />
                  </div>
                  <ul className="title">
                     <li className="heading">Till the End of the Moon</li>
                     <li className="year">TV Series - 2023</li>
                     <li className="season">Season 1</li>
                     <li className="episode">
                        Episode {40} of {40} eps
                     </li>
                  </ul>
               </li>
               <li className="disflex">
                  <div className="imglogo">
                     <img src="https://m.media-amazon.com/images/M/MV5BZjE5ZDJmZGItMDRkNi00YjAxLTliYjQtYjBjZjk4Yjk4NjdhXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_QL75_UX380_CR0,4,380,562_.jpg" alt="logo" />
                  </div>
                  <ul className="title">
                     <li className="heading">King the Land</li>
                     <li className="year">TV Series - 2023</li>
                     <li className="season">Season 1</li>
                     <li className="episode">
                        Episode {4} of {16} episodes
                     </li>
                  </ul>
               </li>
               <li className="disflex">
                  <div className="imglogo">
                     <img src="https://m.media-amazon.com/images/M/MV5BYjA3MWE5NjctNjdhZS00ZmJmLWE3YjMtYjI2NDkwNzBmZmZiXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_QL75_UY414_CR6,0,280,414_.jpg" alt="logo" />
                  </div>
                  <ul className="title">
                     <li className="heading">See You in My 19th Life</li>
                     <li className="year">TV Series - 2023</li>
                     <li className="season">Season 1</li>
                     <li className="episode">
                        Episode {0} of {12} episodes
                     </li>
                  </ul>
               </li>
               <li className="disflex">
                  <div className="imglogo">
                     <img src="https://m.media-amazon.com/images/M/MV5BMGI4NjY3Y2UtY2JiMi00ZTJiLWFlMTItY2ZlNzA2MzJmZDQ1XkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_QL75_UY414_CR7,0,280,414_.jpg" alt="logo" />
                  </div>
                  <ul className="title">
                     <li className="heading">The Real Deal Has Come!</li>
                     <li className="year">TV Series - 2023</li>
                     <li className="season">Season 1</li>
                     <li className="episode">
                        Episode {0} of {50} episodes
                     </li>
                  </ul>
               </li>
               <li className="disflex">
                  <div className="imglogo">
                     <img src="https://m.media-amazon.com/images/M/MV5BNzM4MWNmYjctMDE1MS00ZGIyLTkxMTktZWJlM2NlMmRmYTZkXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_QL75_UY414_CR5,0,280,414_.jpg" alt="logo" />
                  </div>
                  <ul className="title">
                     <li className="heading">The Good Bad Mother</li>
                     <li className="year">TV Series - 2023</li>
                     <li className="season">Season 1</li>
                     <li className="episode">
                        Episode {0} of {14} episodes
                     </li>
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
