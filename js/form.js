class Form{

    constructor(){

        this.input = createInput("main");
        this.button = createButton("play");
        this.resetButton = createButton("reset");
        this.greeting = createElement("h3")

    }

    hide(){

        this.input.hide();
        this.button.hide();
        this.greeting.hide();

    }

    display(){

        var title = createElement("h2", "Car Racing Game");

        title.position(displayWidth/2 - 150, 0);
        this.input.position(displayWidth/2 - 100, 160);
        this.button.position(displayWidth/2 - 100, 200);
        this.resetButton.position(displayWidth - displayWidth/8, 100)

        this.button.mousePressed(() => {

            this.input.hide();
            this.button.hide();
            player.name = this.input.value();

            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2 - 100, 160)

        });

        this.resetButton.mousePressed(() => {

            player.updateCount(0);
            Player.updateFinishedCount(0);
            game.update(0);
            database.ref("players").remove();

        })

    }

}