import { v4 as uuidv4 } from 'uuid';

let movies = [];

export const returnMovies =(req, res) =>{
     if(movies.length === 0 ){
         res.status(404).send(`No movies available`);
     } else{
        res.send(movies);
     };    
};

function checkDuplicates(req){
    const{ name, releaseDate, studio } = req.body;
       
    if(movies.find((movie) => movie.name === name && movie.studio === studio && movie.releaseDate === releaseDate)){
        return true;
    };
};

function saveMovie(movie){
    movies.push({ ...movie, id: uuidv4()});
};

export const createMovie = (req,res) => {

    if(checkDuplicates(req, res)){
        res.status(428).send(`The movie ${req.body.name} already exists, little dumb-dumb`);
    } else {
        saveMovie(req.body);
        res.status(200).send(`O filme ${req.body.name} foi adicionado`); 
    };
};

export const getMovie = (req, res) =>{
    const { id } = req.params;
    const foundMovie = movies.find((movie) => movie.id === id);
    if(foundMovie === undefined){
        res.status(404).send(`There's No Movie with the ID ${id} on the Database`);
    }else {
        res.status(200).send(foundMovie);
    };
};

export const deleteMovie = (req,res) => {
    const { id } = req.params;

    if(movies.find((movie) => movie.id === id)){
        movies = movies.filter((movie) => movie.id !== id);
        res.status(200).send(`Movie Deleted from the Database`);
    } else {
        res.status(404).send(`Movie not found on the Database`);
    };
};

export const updateMovie = (req, res) =>{
    const{ id } = req.params;
    const{ name, releaseDate, productor, leadActor, studio, genre } = req.body;
    const movie = movies.find((movie) => movie.id === id);

    if(movie === undefined){
      res.status(404).send("Movie not found");
    }else{
        if(name) movie.name = name;
        if(releaseDate) movie.releaseDate = releaseDate;
        if(productor) movie.productor = productor;
        if(leadActor) movie.leadActor = leadActor;
        if(studio) movie.studio = studio;
        if(genre) movie.genre = genre;

        res.status(200).send(`O filme ${name} foi atualizado`);
    };
};