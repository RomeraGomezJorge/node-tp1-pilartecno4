import fs from 'fs';
const rawData = fs.readFileSync('data.json');
const stars = JSON.parse(rawData).stars;
import joi from 'joi';


export function allStarts(req, res) {

    const result = req.query.name
        ? stars.filter((star) => star.name.toLowerCase().includes(req.query.name.toLowerCase()))
        : stars

    res.json({result})
}

export function createStar(req, res) {
    const Schema = joi.object({
        id: joi.number().integer().min(1).required(),
        name: joi.string().required(),
        type: joi.string().required(),
        distancia: joi.string().required(),
        mass: joi.string().required(),
        radius: joi.string().required(),
        temperature: joi.string().required(),
        luminosity: joi.string().required(),
        age: joi.string().required(),
        composition: joi.object({
            hydrogen: joi.string().required(),
            helium: joi.string().required(),
            otros_elementos: joi.string().required()
        }).required(),
        stellar_history: joi.string().required()
    })

    const {error} = Schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            messege : error.details
        });
    }

    const newStar = req.body;
    stars.push(newStar);
    res.status(201).json({newStar})



}


// function for filter stars
export function getStarById(req, res) {
    const id = parseInt(req.params.id);
    const star = stars.find((item) => item.id === id);

    if (!star) {
        return res.status(404).json({error: 'Star not found'});
    }

    res.json(star);
}
