// shop.js
// 상점 시스템


const SHOP_ITEMS = {

    normalTicket: {

        id:"normalTicket",
        name:"일반 뽑기권",
        price:1

    },


    premiumTicket: {

        id:"premiumTicket",
        name:"고급 뽑기권",
        price:5

    },


    enhanceTicket: {

        id:"enhanceTicket",
        name:"강화권",
        price:10

    },


    downProtect: {

        id:"downProtect",
        name:"하락방지권",
        price:15

    },


    highEnhanceTicket: {

        id:"highEnhanceTicket",
        name:"고급강화권",
        price:30

    },


    statChange: {

        id:"statChange",
        name:"스탯 변경권",
        price:10

    },


    traitChange: {

        id:"traitChange",
        name:"특성 변경권",
        price:10

    }

};




// 기본 보유 아이템

let inventory = {

    normalTicket:0,

    premiumTicket:0,

    enhanceTicket:0,

    downProtect:0,

    highEnhanceTicket:0,

    statChange:0,

    traitChange:0

};





// 아이템 구매

function buyItem(itemId, money){


    const item = SHOP_ITEMS[itemId];


    if(!item){

        return {

            success:false,

            message:"없는 아이템입니다."

        };

    }



    if(money < item.price){


        return {

            success:false,

            message:"돈이 부족합니다."

        };

    }



    inventory[itemId]++;



    return {


        success:true,


        money:

        money - item.price,


        item:

        item.name,


        message:

        `${item.name} 구매 완료`

    };


}





// 아이템 사용

function useItem(itemId){


    if(inventory[itemId] <= 0){


        return false;

    }



    inventory[itemId]--;


    return true;

}





// 보유 아이템 확인

function getInventory(){


    return inventory;


}
