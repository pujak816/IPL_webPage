let url = location.href;
let newUrl = new URL(url);
// console.log(newUrl);
let teamFullName = newUrl.searchParams.get("name");

// console.log(teamFullName);

//geting data from local storage

teamDetails = JSON.parse(localStorage.getItem("teams"));
playerDetails = JSON.parse(localStorage.getItem("players"));

// console.log(playerDetails);

var teamContainer = document.querySelector(".teams-wrapper");
var teamInnerDetails = document.querySelector(".teams_info_content");
var teamPlayersCard = document.querySelector(".teams_cards_div");

// creating players card
var playersCnt = 0;

function createPlayerCard() {
  for (var i = 0; i < playerDetails.length; i++) {
    if (teamFullName == playerDetails[i].playerTeamName) {
      // console.log(teamFullName);
      // console.log(playerDetails[i].playerTeamName);
      var playingStatus = "";
      if (playerDetails[i].isPlaying == true) {
        playingStatus = "Playing";
      } else {
        playingStatus = "On Bench";
      }
      playersCnt++;
      var clickedPlayer =
        playerDetails[i].playerName + " " + playerDetails[i].from;
      teamPlayersCard.innerHTML += `
      <div class="teams_players_wrapper" >
        <div class="teams_playerCard">
          <a href="./players.html?name=${clickedPlayer}">
          <div class="teams_player-img">
            <img src="${playerDetails[i].playerImg}" alt="" />
          </div>
          <div class="teams_player-details">
            <h3>${playerDetails[i].playerName}</h3>
            <div class="teams_playerInfo">
              <p>${playerDetails[i].playerTeamName}</p>
              <p><span>price:</span> ${playerDetails[i].price} </p>
            </div>
            <p> <span> Playing Status: </span> ${playingStatus}</p>
            <p><span>Role:</span> ${playerDetails[i].role}</p>
          </div>
          </a>
        </div>
     </div>
      `;
    }
  }
}
createPlayerCard();
// creating team Info

for (var j = 0; j < teamDetails.length; j++) {
  if (teamFullName == teamDetails[j].teamName) {
    // console.log(teamFullName);
    teamInnerDetails.innerHTML += `   
    <div class="teams_left">
      <div class="teams_logo">
        <img src="${teamDetails[j].teamIcon}" alt="teamIcon" />
      </div>
    </div>

    <div class="teams_right">
      <h2 class="teams_Name"> ${teamDetails[j].teamName} </h2>
      <p><span>Player Count:</span> ${playersCnt} </p>
      <p><span>Top Batsman:</span> ${teamDetails[j].topBatsman}</p>
      <p><span>Top Bowler:</span> ${teamDetails[j].topBowler} </p>
      <p><span>Championship Won Count:</span> ${teamDetails[j].championshipWon}</p>
   </div> 
   
    `;
  }
}

//--------- add player functions------------------->

var playerForm = document.querySelector(".playerForm");
var submitPlayerForm = document.getElementById("submitPlayerButton");

function addPlayer() {
  playerForm.style.visibility = "visible";
  console.log(playerDetails);
}

//add player data
submitPlayerForm.addEventListener("click", (e) => {
  e.preventDefault();
  playerForm.style.visibility = "hidden";
  var playerName = document.getElementById("player_name").value;
  var playerImg = document.getElementById("player_imgUrl").value;
  var playerTeam = document.getElementById("player_teamName").value;
  var playerRole = document.getElementById("player_role").value;
  var playerPrice = document.getElementById("player_price").value;
  var playerStatus = document.getElementById("player_isPlaying").value;
  var playerTeamCode = document.getElementById("player_teamCode").value;

  playerDetails.push({
    id: playerDetails.length,
    playerName: playerName,
    playerImg: playerImg,
    playerTeamName: playerTeam,
    from: playerTeamCode,
    price: playerPrice + " Cr",
    role: playerRole,
    isPlaying: playerStatus,
  });
  localStorage.setItem("players", JSON.stringify(playerDetails));
  location.href = "./teams.html?name=" + playerTeam;
  // location.reload();
  createPlayerCard();
  document.getElementById("player_name").value = "";
  document.getElementById("player_imgUrl").value = "";
  document.getElementById("player_teamName").value = "";
  document.getElementById("player_role").value = "";
  document.getElementById("player_price").value = "";
  document.getElementById("player_isPlaying").value = "";
  document.getElementById("player_teamCode").value = "";
});
