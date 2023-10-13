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