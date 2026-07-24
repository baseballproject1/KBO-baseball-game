// season.js
// 리그 / 시즌 시스템


const MAX_STAGE = 50;



let seasonData = {

    stage:1,

    win:0,

    lose:0,

    clear:false

};





// 스테이지 정보

function getStageInfo(){


    return {


        stage:seasonData.stage,


        difficulty:

        seasonData.stage * 10,


        rewardWin:

        seasonData.stage * 10,


        rewardLose:

        seasonData.stage * 5


    };


}





// 경기 종료 처리

function finishStage(result){



    let reward = 0;



    if(result === "승"){



        seasonData.win++;



        reward =

        seasonData.stage * 10;



        // 다음 단계

        if(seasonData.stage < MAX_STAGE){


            seasonData.stage++;


        }



    }



    else if(result === "패"){



        seasonData.lose++;



        reward =

        seasonData.stage * 5;



    }




    return {


        result:result,


        reward:reward,


        stage:seasonData.stage,


        message:

        `${result} 보상 ${reward}억 획득`


    };


}







// 시즌 초기화

function resetSeason(){


    seasonData = {


        stage:1,


        win:0,


        lose:0,


        clear:false


    };


}





// 현재 시즌 확인

function getSeasonData(){


    return seasonData;


}





// 50단계 클리어 확인

function checkSeasonClear(){


    if(seasonData.stage > MAX_STAGE){


        seasonData.clear=true;


    }



    return seasonData.clear;


}
