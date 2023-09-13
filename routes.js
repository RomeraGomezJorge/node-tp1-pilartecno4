import { allStarts, createStar, getStarById } from './controller/controller.js';
import {Router} from "express";

const router = Router();

router.get('/', allStarts);
router.post('/', createStar);
router.get('/:id', getStarById);

export { router };