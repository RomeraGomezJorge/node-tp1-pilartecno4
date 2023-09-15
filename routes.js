import {Router} from "express";
import {getStarsController} from "./controller/getStarsController.js";
import {getStarController} from "./controller/getStart.controller.js";
import {postStartController} from "./controller/postStart.controller.js";
import {starCreateRequest} from "./middleware/starCreateRequest.js";

const router = Router();

router.get('/', getStarsController);
router.post('/', starCreateRequest,postStartController);
router.get('/:id', getStarController);

export { router };