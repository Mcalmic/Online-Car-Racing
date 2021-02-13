class Player{

    constructor(){

        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = 0;
        
    }

    getCount(){

        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", function(data){playerCount = data.val()});

    }

    updateCount(count){

        database.ref("/").update({playerCount: count});

    }

    finishedCount(){

        var finishedCountRef = database.ref("carsFinished");
        finishedCountRef.on("value",(data) => {this.rank = data.val()});

    }

    static updateFinishedCount(count){

        database.ref("/").update({carsFinished: count});

    }

    update(){

        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({name: this.name, distance: this.distance});

    }

    static getPlayerInfo(){

        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", (data) => {

            allPlayers = data.val();

        })

    }
}