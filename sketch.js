var database;
var playerCount;
var gameState = 0;
var game, player, form;
var allPlayers;
var car1, car2, car3, car4;
var cars = [];
var car1Image, car2Image, car3Image, car4Image, groundImage, trackImage;
var carsFinished;

function preload(){

    car1Image = loadImage("images/car1.png");
    car2Image = loadImage("images/car2.png");
    car3Image = loadImage("images/car3.png");
    car4Image = loadImage("images/car4.png");
    groundImage = loadImage("images/ground.png");
    trackImage = loadImage("images/track.jpg");

}

function setup(){

    database = firebase.database();
    createCanvas(displayWidth - 5, displayHeight - 250);

    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){

    if(playerCount === 4){

        game.update(1);

    }
    if(gameState === 1){

        clear();
        game.play();

    }
    if(gameState === 2){

        game.end();

    }

}