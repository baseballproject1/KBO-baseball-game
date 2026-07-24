// save.js
// 저장 시스템


const SAVE_KEY = "KBO_CARD_GAME_SAVE";




// 기본 저장 데이터

function createSaveData(){


    return {


        myTeam:null,


        money:100,


        players:[],


        inventory:{


            normalTicket:0,

            premiumTicket:0,

            enhanceTicket:0,

            downProtect:0,

            highEnhanceTicket:0,

            statChange:0,

            traitChange:0


        },


        season:{


            stage:1,

            win:0,

            lose:0


        },


        lastSave:

        new Date().toISOString()


    };


}





// 저장

function saveGame(data){


    data.lastSave =

    new Date().toISOString();



    localStorage.setItem(

        SAVE_KEY,

        JSON.stringify(data)

    );



    return true;

}





// 불러오기

function loadGame(){


    const save =

    localStorage.getItem(SAVE_KEY);



    if(!save){


        return createSaveData();


    }



    return JSON.parse(save);


}





// 저장 삭제

function deleteSave(){


    localStorage.removeItem(

        SAVE_KEY

    );


}





// 팀 저장

function saveTeam(teamId){


    let data = loadGame();



    data.myTeam = teamId;



    saveGame(data);


}





// 돈 저장

function updateMoney(amount){


    let data = loadGame();



    data.money = amount;



    saveGame(data);


}





// 선수 저장

function savePlayers(players){


    let data = loadGame();



    data.players = players;



    saveGame(data);


}





// 현재 저장 확인

function getSaveData(){


    return loadGame();


}
