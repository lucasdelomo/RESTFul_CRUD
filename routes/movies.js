import express from 'express';
import fs from 'fs'
import { userInfo } from 'os';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let movies = []

router.get('/', (req, res) =>{
    
    console.log(movies)
    
    res.send(movies);
});


//Incluindo um filme
router.post('/', (req, res) => {
    const movie = req.body;
    
    
    movies.push({ ...movie, id: uuidv4()});
    
    

    res.status(200).send(`O filme ${movie.name} foi adicionado`);
})



//retornando filme by ID
router.get('/:id', (req, res) =>{
    const { id } = req.params;

    const foundMovie = movies.find((movie) => movie.id === id);
    

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