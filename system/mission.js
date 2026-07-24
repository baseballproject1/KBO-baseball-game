// mission.js
// 미션 / 업적 시스템


const MISSIONS = {


    weekly: {


        playGame: {

            id:"playGame",

            name:"리그 경기 10회 플레이",

            goal:10,

            reward:{

                money:10,

                ticket:5

            }

        },


        winGame: {

            id:"winGame",

            name:"리그 경기 5승",

            goal:5,

            reward:{

                money:20,

                ticket:10

            }

        },


        gacha: {

            id:"gacha",

            name:"선수 뽑기 5회",

            goal:5,

            reward:{

                ticket:5

            }

        }


    }


};





// 업적

const ACHIEVEMENTS = {


    firstWin:{

        id:"firstWin",

        name:"첫 승리",

        reward:{

            money:10

        }

    },


    legendMake:{

        id:"legendMake",

        name:"첫 레전드 제작",

        reward:{

            money:100

        }

    }


};






// 현재 진행도

let missionProgress = {


    playGame:0,

    winGame:0,

    gacha:0


};





// 미션 진행 추가

function addMissionProgress(type, amount=1){


    if(

        missionProgress[type]

        === undefined

    ){

        return false;

    }



    missionProgress[type] += amount;



    return checkMission(type);


}






// 미션 완료 확인

function checkMission(type){


    let mission =

    MISSIONS.weekly[type];



    if(!mission){

        return null;

    }



    if(

        missionProgress[type]

        >= mission.goal

    ){


        return {


            success:true,


            reward:

            mission.reward,


            message:

            `${mission.name} 완료`


        };


    }



    return {


        success:false,


        progress:

        missionProgress[type],


        goal:

        mission.goal


    };


}





// 미션 초기화

function resetMission(){


    missionProgress = {


        playGame:0,

        winGame:0,

        gacha:0


    };


}





// 진행도 확인

function getMissionProgress(){


    return missionProgress;


}
