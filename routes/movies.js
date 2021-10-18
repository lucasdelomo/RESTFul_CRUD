import express from 'express';
import fs from 'fs'
import { userInfo } from 'os';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let movies = [{
    name:"vvv",
    relaseDate:"24/12/1991",
    productor:"asadas",
    leadActor:"Mddaulyn Kacuklyn",
    studio:"20th  Century Fox",
    genre:"Horror"
}]

router.get('/', (req, res) =>{
    
    console.log(movies)
    
    res.send(movies);
});

//Gravando 
function saveMovie(movie){
    movies.push({ ...movie, id: uuidv4()});
    
}

//Incluindo um filme
router.post('/', (req, res) => {
    const newMovieName = req.body.name;
    const newMovieStudio = req.body.studio;
    const newReleaseDate = req.body.relaseDate;
    
    if(movies.find((movie) => movie.name === newMovieName) && movies.find((movie) => movie.studio === newMovieStudio) && movies.find((movie) => movie.relaseDate === newReleaseDate)){
        console.log("Esse filme já existe");
        res.status(428).send(`The movie ${newMovieName} already exists, little dumb-dumb`);
    } else{
        saveMovie(req.body);
        res.status(200).send(`O filme ${req.body.name} foi adicionado`);
        console.log(movies.find((movie) => movie.name === newMovieName));
        
    }
    
    
    

    
})



//retornando filme by ID
router.get('/:name', (req, res) =>{
    const { name } = req.params;

    const foundMovie = movies.find((movie) => movie.name === name);
    

    res.send(foundMovie);
})

//deletando um filme pelo nome
router.delete('/:name', (req,res) => {
    const { name } = req.params;

    movies = movies.filter((movie) => movie.name !== req.params.name);
    res.send(`O filme ${name} foi removido`);
    
})


router.patch('/:name', (req, res) =>{
    const{ name } = req.params;
    const{releaseDate, productor, leadActor, studio, genre} = req.body;

    const movie = movies.find((movie) => movie.name === name);

    if(name) movie.name = name;
    if(releaseDate) movie.releaseDate = releaseDate;
    if(productor) movie.productor = productor;
    if(leadActor) movie.leadActor = leadActor;
    if(studio) movie.studio = studio;
    if(genre) movie.genre = genre;

    res.send(`O filme ${name} foi atualizado`);
})

//concede acesso as funções desse arquivo 
export default router;