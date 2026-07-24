// ==========================================
// KBO Baseball Game
// teams.js
// 구단 데이터
// ==========================================


const TEAMS = [

    {
        id:"LG",
        name:"LG 트윈스",
        city:"서울",
        color:"black",
        stadium:"잠실야구장"
    },


    {
        id:"SSG",
        name:"SSG 랜더스",
        city:"인천",
        color:"red",
        stadium:"인천SSG랜더스필드"
    },


    {
        id:"KIA",
        name:"KIA 타이거즈",
        city:"광주",
        color:"red",
        stadium:"광주-기아 챔피언스 필드"
    },


    {
        id:"SAMSUNG",
        name:"삼성 라이온즈",
        city:"대구",
        color:"blue",
        stadium:"대구삼성라이온즈파크"
    },


    {
        id:"KT",
        name:"KT 위즈",
        city:"수원",
        color:"black",
        stadium:"수원KT위즈파크"
    },


    {
        id:"DOOSAN",
        name:"두산 베어스",
        city:"서울",
        color:"navy",
        stadium:"잠실야구장"
    },


    {
        id:"LOTTE",
        name:"롯데 자이언츠",
        city:"부산",
        color:"blue",
        stadium:"사직야구장"
    },


    {
        id:"HANWHA",
        name:"한화 이글스",
        city:"대전",
        color:"orange",
        stadium:"한화생명이글스파크"
    },


    {
        id:"KIWOOM",
        name:"키움 히어로즈",
        city:"서울",
        color:"burgundy",
        stadium:"고척스카이돔"
    },


    {
        id:"NC",
        name:"NC 다이노스",
        city:"창원",
        color:"blue",
        stadium:"창원NC파크"
    }

];



// 팀 찾기

function getTeam(teamId){

    return TEAMS.find(
        team => team.id === teamId
    );

}
