import express from 'express';
import { returnMovies, createMovie, getMovie, deleteMovie, updateMovie} from '../controllers/movies.js'

const router = express.Router();

router.get('/', returnMovies);

router.post('/', createMovie); 

router.get('/:id', getMovie);

router.delete('/:id', deleteMovie);

router.patch('/:id', updateMovie);

export default router;
