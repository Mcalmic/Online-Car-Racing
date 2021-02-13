class Game{

    constructor(){

    

    }

    getState(){

        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){gameState = data.val()})

    }

    update(state){

        database.ref("/").update({gameState: state})

    }

    start(){

        if(gameState === 0){

            player = new Player();
            player.getCount();
            form = new Form();
            form.display();

        }
        car1 = createSprite(100, displayHeight/2, 100, 100);
        car2 = createSprite(300, displayHeight/2, 100, 100);
        car3 = createSprite(500, displayHeight/2, 100, 100);
        car4 = createSprite(700, displayHeight/2, 100, 100);

        car1.addImage("car1Image", car1Image);
        car2.addImage("car2Image", car2Image);
        car3.addImage("car3Image", car3Image);
        car4.addImage("car4Image", car4Image);       

        cars = [car1, car2, car3, car4];
    }

    play(){
        form.hide();        
        player.finishedCount();
        //textSize(24);
        //text("Game Started", 250, 20);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            background(groundImage);
            image(trackImage, 0, -displayHeight*4, displayWidth, displayHeight*5);
            var x = displayHeight/4.8;
            var y = 0;
            var index = 0;
            //var displayPosition = 130;
            //console.log(allPlayers);

            for(var plr in allPlayers){
                x = x + displayHeight/3.7;
                y = displayHeight - allPlayers[plr].distance;
                cars[index].x = x;
                cars[index].y = y;
                //console.log(plr);
                if(index + 1 === player.index){

                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index].y;
                    cars[index].shapeColor = "red";

                }
                index++;

               // displayPosition += 20;
               // textSize(15);
               // text(allPlayers[plr].name + " :" +  allPlayers[plr].distance, 120, displayPosition);
            }
        }
        if(player.distance > 5148){
            player.rank += 1;
            Player.updateFinishedCount(player.rank);
            console.log(player.rank);
            gameState = 2;
            
        }
        if(keyIsDown(UP_ARROW) && player.index !== null && player.distance < 5148 && gameState != 2){
            player.distance += 50;
            player.update();

        }
        drawSprites();
    }
    end(){

        console.log(player.rank);
        swal("Game Finished", "You finished in place " + player.rank, "success")


    }
}