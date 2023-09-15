import fs from 'fs';

const rawData = fs.readFileSync('data.json');
const stars = JSON.parse(rawData).stars;

export function postStartController(req, res) {
    const newStar = req.body;
    stars.push(newStar);
    res.status(201).json({newStar})

}

