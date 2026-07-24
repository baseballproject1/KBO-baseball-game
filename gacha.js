// gacha.js


// 뽑기 결과 저장

let lastGachaPlayer = null;



// 등급 확률

const GACHA_RATE = {


    normal: {

        "일반":75,
        "A":20,
        "S":5

    },


    premium: {

        "A":60,
        "S":20,
        "골든글러브":15,
        "시그니처":5

    }


};





// 확률 계산

function randomGrade(rate){


    let random = Math.random()*100;


    let total = 0;


    for(let grade in rate){


        total += rate[grade];


        if(random <= total){

            return grade;

        }

    }


}





// 팀 선수 중 등급 선택


function getRandomPlayer(teamId,type="normal"){



    const team = TEAMS[teamId];


    if(!team){

        return null;

    }



    // 레전드 제외

    let players = team.players.filter(

        player => player.grade !== "레전드"

    );



    let grade = randomGrade(

        GACHA_RATE[type]

    );



    let sameGrade = players.filter(

        player => player.grade === grade

    );



    // 해당 등급 없으면 재검색

    if(sameGrade.length === 0){


        sameGrade = players;


    }



    const result =

    sameGrade[

        Math.floor(

            Math.random()*sameGrade.length

        )

    ];



    lastGachaPlayer = result;


    return result;


}





// 일반 뽑기

function normalGacha(teamId){


    return getRandomPlayer(

        teamId,

        "normal"

    );

}





// 고급 뽑기

function premiumGacha(teamId){


    return getRandomPlayer(

        teamId,

        "premium"

    );

}





// 결과 확인

function getLastGacha(){


    return lastGachaPlayer;


}
