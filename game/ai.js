// ai.js
// AI 팀 시스템



let aiTeam = null;



// AI 생성

function createAI(stage = 1){


    const difficulty = stage * 10;



    aiTeam = {


        id:"AI_" + stage,


        name:

        `AI 구단 ${stage}단계`,



        players:[],


        power:difficulty


    };



    return aiTeam;


}





// AI 전력 계산

function getAIPower(ai){


    if(!ai){

        return 0;

    }



    let power = ai.power || 0;



    ai.players.forEach(player=>{


        if(player.stats){


            power +=

            player.stats.power +

            player.stats.contact +

            player.stats.defense;


        }


    });



    return power;


}






// AI 경기 능력

function aiAttack(stage){



    let chance =

    Math.random()*100;



    let score = 0;



    if(chance < stage * 2){


        score =

        Math.floor(

            Math.random()*3

        ) + 1;


    }



    return score;


}






// AI 강화

function upgradeAI(stage){



    if(!aiTeam){

        createAI(stage);

    }



    aiTeam.power += stage * 5;



    return aiTeam;


}





// 현재 AI 확인

function getAI(){


    return aiTeam;


}
