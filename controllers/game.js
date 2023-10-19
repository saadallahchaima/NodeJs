import { validationResult } from 'express-validator';
import Game from '../models/game.js';
export function getAll(req, res) {
Game.find({}).then(docs =>{
    res.status(200).json(docs);
})
.catch(err =>{res.status(500).json({error: err});
});
}
export function addOnce(req, res) {
    if(!validationResult(req).isEmpty()){
        res.status(400).json({error: err})
    }
    else{
    Game.create({        
        name: req.body.name,
        year: req.body.year,
        onSale: req.body.onSale,
        image: `${req.protocol}://${req.get('host')}/img/${req.file.filename}`

    }
    )
        .then(newGame => {
            res.status(200).json(newGame);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}
}
export function getOnce(req, res) {
Game.findOne({"name": req.params.name})
.then(doc =>{res.status(200).json(doc); })
.catch(err => {
    res.status(500).json({ error: err.message });
});
}

export function putOnce(req, res) {
    res.status(200).json({ message: "Updated !", name: req.params.name});
}

export function patchOnce(req, res) {
    Game
    .findByIdAndUpdate({"name": req.params.name},{"onSale":false})
    .then(doc =>{res.status(200).json(doc); })
    .catch(err => {
        res.status(500).json({ error: err.message });
    });}

export function deleteOnce(req, res) {
    Game
    .findOneAndDelete({"name": req.params.name})
    .then(doc =>{res.status(200).json(doc); })
    .catch(err => {
        res.status(500).json({ error: err.message });
    });}
export function signup(req, res) {
    
}

export function signin(req, res) {
   
}