// enhance.js


// 강화 성공 확률 (1강~10강)
const ENHANCE_RATE = [
    90,
    85,
    70,
    50,
    45,
    30,
    25,
    20,
    15,
    10
];



// 강화 비용 (억)
function getEnhanceCost(level){

    return level + 1;

}



// 강화 실행

function enhancePlayer(player, item = {}){


    if(!player.enhance){

        player.enhance = 0;

    }



    // 10강 완료

    if(player.enhance >= 10){

        return {

            success:false,

            message:"이미 10강입니다."

        };

    }



    let rate = ENHANCE_RATE[player.enhance];



    // 강화권 +10%

    if(item.enhanceTicket){

        rate += 10;

    }



    // 고급강화권

    if(

        item.highEnhanceTicket &&

        (

            player.grade === "레전드" ||

            player.grade === "시그니처"

        )

    ){

        rate = 100;

    }





    let success =

    Math.random()*100 < rate;




    if(success){


        player.enhance++;



        return {

            success:true,

            level:player.enhance,

            message:

            `${player.name} 강화 성공! ${player.enhance}강`

        };


    }



    // 실패


    if(!item.downProtect){


        if(player.enhance > 0){


            player.enhance--;


            // 랜덤 능력치 감소

            decreaseRandomStat(player);


        }


    }




    return {

        success:false,

        level:player.enhance,

        message:

        `${player.name} 강화 실패`

    };


}





// 랜덤 능력치 감소

function decreaseRandomStat(player){


    const stats = [

        "power",

        "contact",

        "speed",

        "defense",

        "eye"

    ];



    let stat =

    stats[

        Math.floor(

            Math.random()*stats.length

        )

    ];



    if(player.stats[stat] > 0){


        player.stats[stat]--;

    }


}




// 강화 초기화

function resetEnhance(player){


    player.enhance = 0;


}
