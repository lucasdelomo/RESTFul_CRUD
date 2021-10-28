import { v4 as uuidv4 } from 'uuid';

export let movies = [];

export function checkDuplicates(req){
    const{ name, releaseDate, studio } = req.body;
    return movies.some((movie) => movie.name === name && movie.studio === studio && movie.releaseDate === releaseDate);    
};

export function saveMovie(movie){
    movies.push({ ...movie, id: uuidv4()});
};

export function foundMovie(id){
    return movies.find((movie) => movie.id === id);
}

export function removeMovie(id){
    movies = movies.filter((movie) => movie.id !== id);
}

export function updateValues(req, id){
    const{ name, releaseDate, productor, leadActor, studio, genre } = req.body;
    const movie = foundMovie(id)

        if(name) movie.name = name;
        if(releaseDate) movie.releaseDate = releaseDate;
        if(productor) movie.productor = productor;
        if(leadActor) movie.leadActor = leadActor;
        if(studio) movie.studio = studio;
        if(genre) movie.genre = genre;
}