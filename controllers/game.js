import Game from '../models/game.js'
  const games = [ new Game("dmc5", "game1",200,2), new Game("re8","game2",3000,5), new Game("nfs","game3",600,9)];
  export function getAll(req,res){

    res.status(200).json(games);
}
export function addOnce(req,res){
    const games =  new Game(req.body.title,req.body.description,req.body.price,req.body.quantity);
    games.push(game);
    res.status(201).json({message: "created!",entity: game});
}
export function ajoutergame(req,res){
    
}
export function getOnce(req,res){

    res.status(200).json(games.find(val =>val.title ===req.params.title));

}
export function putOnce(req,res){
    res.status(200).json({message: "update!",title: req.params.title});
}
export function patchOnce(req,res){
    res.status(200).json({message: "update!",title: req.params.title});
}
export function deleteOnce(req,res){
    res.status(200).json({message: "Deleted!",title: req.params.title});
}



