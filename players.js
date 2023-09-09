let url = location.href;
let newUrl = new URL(url);
console.log(newUrl);
let playerFullName = newUrl.searchParams.get("name");

console.log(playerFullName);

playerDetails = JSON.parse(localStorage.getItem("players"));
console.log(playerDetails);

var playersInfo = document.querySelector(".players_page_section");
var playersCnt = 0;

for (i = 0; i < playerDetails.length; i++) {
  if (
    playerFullName ==
    playerDetails[i].playerName + " " + playerDetails[i].from
  ) {
    // console.log(playerDetails[i].playerName);
    // console.log(playerFullName);
    var playingStatus = "";
    if (playerDetails[i].isPlaying == true) {
      playingStatus = "Playing";
    } else {
      playingStatus = "On Bench";
    }
    playersCnt++;
    playersInfo.innerHTML += `
    <div class="players_page_main">
       <div class="players_left_section">
         <img src="${playerDetails[i].playerImg}" alt="" />
       </div>
       <div class="players_right_section">
         <div class="player-details">
            <h3>${playerDetails[i].playerName}</h3>
           <div class="playerInfo">
             <p class="playerInfo_teamName">${playerDetails[i].playerTeamName}</p>
             <p><span>price:</span> ${playerDetails[i].price}</p>
           
             <p><span>Playing Status:</span> ${playingStatus}</p>
             <p><span>Role:</span> ${playerDetails[i].role}</p>
           </div>
        </div>
    </div>
  </div>
    `;
  }
}
