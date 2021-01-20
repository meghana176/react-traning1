import React from 'react';
import Movie from '../Movie/Movie.js';
import './styles.css';

class Movies extends React.Component {
    getMovie = (name,likes,banner) => {
        return <Movie name={name} likes={likes} banner={banner} />;
    };
    render() {
        return (
        <div className='movies-section'>
            {this.getMovie(
                'Maharshi' ,
                '123.0k' ,
                'https://th.bing.com/th/id/OIP.dEyezZftuInXU_j0TDXPIAHaKX?pid=Api&rs=1' )}
          
          {this.getMovie(
                'vengersendgame' ,
                '1m' ,
                'https://th.bing.com/th/id/OIP.QS9ONR943YPNFP0TcFpUNgHaK0?pid=Api&rs=1' )}
          
          {this.getMovie(
                'jersey' ,
                '180k' ,
                ' https://1.bp.blogspot.com/-oaxG0yYDGyw/XMGCscI9S6I/AAAAAAAAAKo/-1R9WjONUYQPqi6-7EkH1auhx16HmCDogCLcBGAs/s1600/D4hTGPjU4AMmVCS.jpg'
                )}
          
</div>





        );   
    }
}


export default Movies;