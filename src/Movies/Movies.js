import React from 'react';
import Movie from '../Movie/Movie.js';
import './styles.css';

class Movies extends React.Component {
    render() {
        return (
        <div className='movies-section'>
          <Movie
          name='Maharshi'
          likes='123.0k' 
          banner='https://th.bing.com/th/id/OIP.dEyezZftuInXU_j0TDXPIAHaKX?pid=Api&rs=1'
          hero='mahesh' />
          

         
          <Movie
          name='Avengersendgame'
          likes='1m' 
          banner='https://th.bing.com/th/id/OIP.QS9ONR943YPNFP0TcFpUNgHaK0?pid=Api&rs=1'
         />

         <Movie
          name='jersey'
          likes='180k' 
          banner='https://1.bp.blogspot.com/-oaxG0yYDGyw/XMGCscI9S6I/AAAAAAAAAKo/-1R9WjONUYQPqi6-7EkH1auhx16HmCDogCLcBGAs/s1600/D4hTGPjU4AMmVCS.jpg'
         />
</div>





        );   
    }
}


export default Movies;