import fs from 'fs';

const rawData = fs.readFileSync('data.json');
const stars = JSON.parse(rawData).stars;


export function getStarController(req, res) {
    const id = parseInt(req.params.id);
    const star = stars.find((item) => item.id === id);

    if (!star) {
        return res.status(404).json({error: 'Star not found'});
    }

    res.json(star);
}
