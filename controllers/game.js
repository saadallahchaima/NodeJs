import Game from '../models/game.js';
export function getAll(req, res) {
Game.find({}).then(docs =>{
    res.status(200).json(docs);
})
.catch(err =>{res.status(500).json({error: err});
});
}
export function addOnce(req, res) {
    Game.create(req.body)
        .then(newGame => {
            res.status(200).json(newGame);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
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