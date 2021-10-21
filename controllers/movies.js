
//import { userInfo } from 'os';
import { v4 as uuidv4 } from 'uuid';

let movies = [];

export const getMovies =(req,res) =>{

    console.log(`Movies In the database: ${movies} `);

    res.send(movies);
}

function saveMovie(movie){
    movies.push({ ...movie, id: uuidv4()});
}

export const createMovie = (req,res) => {

    const movie = req.body;

    const newMovieName = req.body.name;
    const newMovieStudio = req.body.studio;
    const newReleaseDate = req.body.relaseDate;
    
    if(movies.find((movie) => movie.name === newMovieName) && movies.find((movie) => movie.studio === newMovieStudio) && movies.find((movie) => movie.relaseDate === newReleaseDate)){
        res.status(428).send(`The movie ${newMovieName} already exists, little dumb-dumb`);
    } else{
        saveMovie(req.body);
        res.status(200).send(`O filme ${req.body.name} foi adicionado`);              
    }

     

}