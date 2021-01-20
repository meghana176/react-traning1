import React from 'react';
import Movie from './Movie/Movie';
import Movies from './Movies/Movies';

function App() {
  return (
    <div className="App">
         <h1>Hai</h1>
         <Movies />
         <Movie name='Maharshi'
          likes='123.0k' 
          banner='https://th.bing.com/th/id/OIP.dEyezZftuInXU_j0TDXPIAHaKX?pid=Api&rs=1'
          hero='mahesh' />
         
    </div>
  );
}

export default App;
