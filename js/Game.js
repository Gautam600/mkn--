class Game
{
    constructor() { }

    //read the game state from the database
getState(){
var gameStateRef=database.ref('gameState');
gameStateRef.on("value",function(data){
    gameState=data.val();
})
}
    //update the game state in the database
update(state){
    database.ref('/').update({
        gameState:state
    })
}
    //to start the game
start()
{
    if(gameState === 0)
{
player=new Player();
player.getCount();
form=new Form();
form.display();
}
}
}