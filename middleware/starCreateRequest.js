import joi from "joi";

export function starCreateRequest(req,res,next){
    const {body} = req
    const Schema = joi.object({
        id: joi.number().integer().min(1).required(),
        name: joi.string().required(),
        type: joi.string().required,
        distancia: joi.string().required,
        mass: joi.string().required(),
        radius: joi.string().required(),
        temperature: joi.string().required(),
        luminosity: joi.string().required(),
        age: joi.string().required(),
        composition:joi.object({
            hydrogen: joi.string().required(),
            helium: joi.string().required(),
            otros_elementos: joi.string().required()
        }).required(),
        stellar_history: joi.string().required()
    })

    if (error) {
        return res.status(400).json({
            error: 'Failed to create a new star'
        });
    }

    next()
}