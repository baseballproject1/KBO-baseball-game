// script.js


// 현재 선택 팀
let selectedTeam = null;


// 게임 시작 시 실행
window.onload = function(){

    const savedTeam = localStorage.getItem("myTeam");


    if(savedTeam){

        selectTeam(savedTeam);

    }

};



// 팀 선택
function selectTeam(teamId){


    const team = TEAMS[teamId];


    if(!team){

        return;

    }



    selectedTeam = teamId;



    // 저장

    localStorage.setItem(
        "myTeam",
        teamId
    );



    // 팀 정보 표시

    document.getElementById("teamInfo").innerHTML =

    `

    <h2>${team.name}</h2>

    <p>
    보유 선수 : ${team.players.length}명
    </p>

    `;



    // 선수 목록 생성

    let html = "";



    team.players.forEach(player=>{


        html +=

        `

        <div class="player"
        data-grade="${player.grade}">


        <b>
        ${player.name}
        </b>


        <br>


        포지션 :
        ${player.position}


        <br>


        등급 :
        ${player.grade}


        <br>


        특성 :
        ${player.trait || "없음"}



        </div>


        `;


    });



    document.getElementById("playerList").innerHTML = html;


}



// 현재 팀 가져오기

function getMyTeam(){


    return selectedTeam;


}



// 현재 팀 선수 가져오기

function getMyPlayers(){


    if(!selectedTeam){

        return [];

    }


    return TEAMS[selectedTeam].players;


}
