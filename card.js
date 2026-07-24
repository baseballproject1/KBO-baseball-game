// card.js

// 선수 카드 생성 함수

function createPlayerCard(player){


    let gradeClass = getGradeClass(player.grade);


    return `

    <div class="player-card ${gradeClass}">


        <div class="card-header">

            <h2>${player.name}</h2>

            <span>
            ${player.grade}
            </span>

        </div>



        <div class="card-info">

            <p>
            팀 : ${player.team}
            </p>


            <p>
            포지션 : ${player.position}
            </p>


            <p>
            특성 : ${player.trait || "없음"}
            </p>


        </div>




        <div class="stats">


            <h3>능력치</h3>


            <p>
            파워 : ${player.stats.power ?? 0}
            </p>


            <p>
            컨택 : ${player.stats.contact ?? 0}
            </p>


            <p>
            주루 : ${player.stats.speed ?? 0}
            </p>


            <p>
            수비 : ${player.stats.defense ?? 0}
            </p>


            <p>
            선구 : ${player.stats.eye ?? 0}
            </p>


        </div>




        ${
            player.legendAvailable

            ?

            `
            <div class="legend-mark">

            ⭐ 레전드 제작 가능

            </div>
            `

            :

            ""

        }


    </div>

    `;

}



// 등급별 클래스

function getGradeClass(grade){


    switch(grade){


        case "일반":
            return "normal";


        case "A":
            return "a";


        case "S":
            return "s";


        case "골든글러브":
            return "gold";


        case "시그니처":
            return "signature";


        case "레전드":
            return "legend";


        default:
            return "";

    }

}




// 여러 선수 카드 생성

function createPlayerCards(players){


    let html = "";


    players.forEach(player=>{


        html += createPlayerCard(player);


    });


    return html;


}
