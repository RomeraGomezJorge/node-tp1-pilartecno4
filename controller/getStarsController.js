import fs from 'fs';

const rawData = fs.readFileSync('data.json');
const stars = JSON.parse(rawData).stars;


export function getStarsController(req, res) {

    const result = req.query.name
        ? stars.filter((star) => star.name.toLowerCase().includes(req.query.name.toLowerCase()))
        : stars

    res.json({result})
}
