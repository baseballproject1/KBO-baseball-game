// game.js
// 경기 시스템


let currentGame = {

    home:null,

    away:null,

    homeScore:0,

    awayScore:0,

    inning:1,

    result:null

};




// 경기 시작

function startGame(homeTeam, awayTeam){


    currentGame = {

        home:homeTeam,

        away:awayTeam,

        homeScore:0,

        awayScore:0,

        inning:1,

        result:null

    };


    return currentGame;


}





// 선수 능력 계산

function getTeamPower(team){


    let total = 0;


    team.players.forEach(player=>{


        if(player.stats){


            total +=

            player.stats.power +

            player.stats.contact +

            player.stats.defense;


        }


    });



    return total;


}






// 공격 결과

function playAttack(team){


    let power = getTeamPower(team);



    let score = 0;



    let chance =

    Math.random()*100;



    if(chance < power / 100){


        score =

        Math.floor(

            Math.random()*3

        ) + 1;


    }



    return score;


}





// 경기 진행

function playGame(homeTeam, awayTeam){



    startGame(

        homeTeam,

        awayTeam

    );



    for(let i=1;i<=9;i++){



        currentGame.inning=i;



        currentGame.homeScore +=

        playAttack(homeTeam);



        currentGame.awayScore +=

        playAttack(awayTeam);



    }





    if(

        currentGame.homeScore

        >

        currentGame.awayScore

    ){


        currentGame.result="승";


    }


    else if(

        currentGame.homeScore

        <

        currentGame.awayScore

    ){


        currentGame.result="패";


    }


    else{


        currentGame.result="무";


    }



    return currentGame;


}






// 경기 결과 확인

function getGameResult(){


    return currentGame;


}
