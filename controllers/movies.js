import { v4 as uuidv4 } from 'uuid';
import { movies, saveMovie, checkDuplicates, foundMovie, removeMovie, updateValues } from '../services/movies.js';


export const returnMovies =(req, res) =>{

     if(movies.length === 0 ){
         res.status(404).send(`No movies available`);
     } else{
        res.send(movies);
     };    
};

export const createMovie = (req,res) => {

    if(checkDuplicates(req, res) === true){
        res.status(428).send(`This movie: ${req.body.name} already exists at the Database`);
    } else {
        saveMovie(req.body);
        res.status(200).send(`The movie: ${req.body.name} was successfuly added`); 
    };
};

export const getMovie = (req, res) =>{

    const { id } = req.params;
    
    if(foundMovie(id) === undefined){
        res.status(404).send(`There's No Movie with the ID ${id} on the Database`);
    }else {
        res.status(200).send(foundMovie(id));
    };
};

export const deleteMovie = (req,res) => {
    const { id } = req.params;

    if(foundMovie(id)){
        removeMovie(id);
        res.status(200).send(`The Movie was Deleted from the Database`);
    } else {
        res.status(404).send(`Movie not found at the Database`);
    };
};

export const updateMovie = (req, res) =>{
    const{ id } = req.params;
    
    if( foundMovie(id) === undefined){
      res.status(404).send("Movie to be updated wasn't found at the Database");
    }else{
        updateValues(req, id);
        res.status(200).send(`The movie was updated`);
    };
};