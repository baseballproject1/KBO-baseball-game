// legend.js
// 레전드 제작 시스템


const LEGEND_COST = 150; // 억



// 레전드 제작 가능 확인

function canMakeLegend(players, signature, golds, sCards){


    // 시그니처 필수

    if(!signature){

        return {

            result:false,

            message:"시그니처 카드가 필요합니다."

        };

    }



    // 골든글러브 2장

    if(golds.length < 2){

        return {

            result:false,

            message:"골든글러브 카드 2장이 필요합니다."

        };

    }



    // S 카드 5장

    if(sCards.length < 5){

        return {

            result:false,

            message:"S 카드 5장이 필요합니다."

        };

    }



    return {

        result:true,

        message:"레전드 제작 가능"

    };


}





// 레전드 제작

function makeLegend(teamId, signature, golds, sCards){


    const check = canMakeLegend(

        null,

        signature,

        golds,

        sCards

    );



    if(!check.result){

        return check;

    }



    const legend = {


        id:

        "legend_" +

        signature.id,



        name:

        signature.name,



        team:

        teamId,



        position:

        signature.position,



        grade:

        "레전드",



        trait:

        signature.trait,



        legendAvailable:false,



        stats:{


            power:

            signature.stats.power + 10,


            contact:

            signature.stats.contact + 10,


            speed:

            signature.stats.speed + 5,


            defense:

            signature.stats.defense + 5,


            eye:

            signature.stats.eye + 10


        },


        enhance:0

    };




    return {


        result:true,


        message:

        `${legend.name} 레전드 제작 완료!`,


        card:legend


    };


}
