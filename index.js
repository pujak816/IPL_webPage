// navbar data

$.get("index.html", function (data) {
    $("#nav").replaceWith(data);
  });
  
  //------------------------------------------->
  
  const teamData = [
    {
      id: 0,
      teamName: "Rajasthan Royals",
      teamId: "RR",
      teamIdName: "RR (Rajasthan Royals)",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
      playerCount: 11,
      topBatsman: "Ajinkya Rahane",
      topBowler: "Jos Buttler",
      championshipWon: 1,
    },
    {
      id: 1,
      teamName: "Chennai Super King",
      teamId: "CSK",
      teamIdName: "CSK (Chennai Super King)",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
      playerCount: 11,
      topBatsman: "Suresh Raina",
      topBowler: "Ravindra Jadeja",
      championshipWon: 4,
    },
    {
      id: 2,
      teamName: "Delhi Capitals",
      teamId: "DC",
      teamIdName: "DC (Delhi Capitals)",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
      playerCount: 11,
      topBatsman: "David Warner",
      topBowler: "Kuldeep Yadav",
      championshipWon: 0,
    },
    {
      id: 3,
      teamName: "Gujarat Titans",
      teamId: "GT",
      teamIdName: "GT (Gujarat Titans)",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
      playerCount: 11,
      topBatsman: "Shubman Gill",
      topBowler: "Mohammad Shami",
      championshipWon: 1,
    },
    {
      id: 4,
      teamName: "Kolkata Knight Riders",
      teamId: "KNR",
      teamIdName: "KNR (Kolkata Knight Riders)",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
      playerCount: 11,
      topBatsman: "Shreyas Iyer",
      topBowler: "Andre Russell",
      championshipWon: 2,
    },
    {
      id: 5,
      teamName: "Lucknow Super Giants",
      teamId: "LSG",
      teamIdName: "LSG (Lucknow Super Giants)",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
      playerCount: 11,
      topBatsman: "K L Rahul",
      topBowler: "Avesh Khan",
      championshipWon: 0,
    },
    {
      id: 6,
      teamName: "Punjab Kings",
      teamId: "PK",
      teamIdName: "PK (Punjab Kings)",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
      playerCount: 11,
      topBatsman: "Shikhar Dhawan",
      topBowler: "Kagiso Rabada",
      championshipWon: 0,
    },
    {
      id: 7,
      teamName: "Mumbai Indians",
      teamId: "MI",
      teamIdName: "MI (Mumbai Indians)",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
      playerCount: 11,
      topBatsman: "Ishan Kishan",
      topBowler: "Jasprit Bumrah",
      championshipWon: 5,
    },
    {
      id: 8,
      teamName: "Royal Challengers Bangalore",
      teamId: "RCB",
      teamIdName: "RCB (Royal Challengers Bangalore)",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
      playerCount: 11,
      topBatsman: "Faf du Plessis",
      topBowler: "Wanindu Hasaranga",
      championshipWon: 0,
    },
    {
      id: 9,
      teamName: "Sunrisers Hyderabad",
      teamId: "SH",
      teamIdName: "SH (Sunrisers Hyderabad)",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
      playerCount: 11,
      topBatsman: "Abhishek Sharma",
      topBowler: "Umran Malik",
      championshipWon: 1,
    },
  ];
  const playerData = [
    {
      id: 0,
      playerName: "MS Dhoni",
      from: "CSK",
      playerTeamName: "Chennai Super King",
      price: "12.00 Cr",
      isPlaying: true,
      role: "All Rounder",
      playerImg: "	https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
    },
    {
      id: 1,
      playerName: "Devon Conway",
      from: "CSK",
      playerTeamName: "Chennai Super King",
      price: "1.00 Cr",
      isPlaying: true,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20572.png",
    },
    {
      id: 2,
      playerName: "Ruturaj Gaikwad",
      from: "CSK",
      playerTeamName: "Chennai Super King",
      price: "6.00 Cr",
      isPlaying: false,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5443.png",
    },
    {
      id: 3,
      playerName: "Ravindra Jadeja",
      from: "CSK",
      playerTeamName: "Chennai Super King",
      price: "16.00 Cr",
      isPlaying: false,
      role: "All rounder",
      playerImg: "	https://assets.iplt20.com/ipl/IPLHeadshot2022/9.png",
    },
    {
      id: 4,
      playerName: "Mitchell Santner",
      from: "CSK",
      playerTeamName: "Chennai Super King",
      price: "1.90 Cr",
      isPlaying: true,
      role: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1903.png",
    },
    {
      id: 5,
      playerName: "Simarjeet Singh",
      from: "CSK",
      playerTeamName: "Chennai Super King",
      price: "20.00 L",
      isPlaying: false,
      role: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/10789.png",
    },
    {
      id: 6,
      playerName: "Dwaine Pretorius",
      from: "CSK",
      playerTeamName: "Chennai Super King",
      price: "50.00 L",
      isPlaying: true,
      role: "All Rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20573.png",
    },
    {
      id: 7,
      playerName: "David Warner",
      from: "DC",
      playerTeamName: "Delhi Capitals",
      price: "6.25 Cr",
      isPlaying: true,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/170.png",
    },
    {
      id: 8,
      playerName: "Kuldeep Yadav",
      from: "DC",
      playerTeamName: "Delhi Capitals",
      price: "2.00 Cr",
      isPlaying: true,
      role: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/261.png",
    },
    {
      id: 9,
      playerName: "Shubman Gill",
      from: "GT",
      playerTeamName: "Gujarat Titans",
      price: "8.00 Cr",
      isPlaying: true,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3761.png",
    },
    {
      id: 10,
      playerName: "Mohammad Shami",
      from: "GT",
      playerTeamName: "Gujarat Titans",
      price: "6.25 Cr",
      isPlaying: true,
      role: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/94.png",
    },
    {
      id: 11,
      playerName: "Shreyas Iyer",
      from: "KNR",
      playerTeamName: "Kolkata Knight Riders",
      price: "12.25 Cr",
      isPlaying: true,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
    },
    {
      id: 12,
      playerName: "Andre Russell",
      from: "KNR",
      playerTeamName: "Kolkata Knight Riders",
      price: "12.00 Cr",
      isPlaying: true,
      role: "All Rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/177.png",
    },
    {
      id: 13,
      playerName: "KL Rahul",
      from: "LSG",
      playerTeamName: "Lucknow Super Giants",
      price: "17.00 Cr",
      isPlaying: true,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1125.png",
    },
    {
      id: 14,
      playerName: "Avesh Khan",
      from: "LSG",
      playerTeamName: "Lucknow Super Giants",
      price: "10.00 Cr",
      isPlaying: true,
      role: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1561.png",
    },
    {
      id: 15,
      playerName: "Ishan Kishan",
      from: "MI",
      playerTeamName: "Mumbai Indians",
      price: "15.25 Cr",
      isPlaying: true,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2975.png",
    },
    {
      id: 16,
      playerName: "Jasprit Bumrah",
      from: "MI",
      playerTeamName: "Mumbai Indians",
      price: "12.00 Cr",
      isPlaying: true,
      role: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png",
    },
    {
      id: 17,
      playerName: "Shikhar Dhawan",
      from: "PK",
      playerTeamName: "Punjab Kings",
      price: "5.2 Cr",
      isPlaying: true,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/41.png",
    },
    {
      id: 18,
      playerName: "Kagiso Rabada",
      from: "PK",
      playerTeamName: "Punjab Kings",
      price: "4.20 Cr",
      isPlaying: true,
      role: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1664.png",
    },
    {
      id: 19,
      playerName: "Jos Buttler",
      from: "RR",
      playerTeamName: "Rajasthan Royals",
      price: "10.00 Cr",
      isPlaying: true,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/509.png",
    },
    {
      id: 20,
      playerName: "Sanju Samson",
      from: "RR",
      playerTeamName: "Rajasthan Royals",
      price: "14.00 Cr",
      isPlaying: true,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/258.png",
    },
    {
      id: 21,
      playerName: "Faf du Plessis",
      from: "RCB",
      playerTeamName: "Royal Challengers Bangalore",
      price: "7.00 Cr",
      isPlaying: true,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/24.png",
    },
    {
      id: 22,
      playerName: "Wanindu Hasaranga",
      from: "RCB",
      playerTeamName: "Royal Challengers Bangalore",
      price: "10.75 Cr",
      isPlaying: true,
      role: "All Rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3082.png",
    },
    {
      id: 23,
      playerName: "Abhishek Sharma",
      from: "SH",
      playerTeamName: "Sunrisers Hyderabad",
      price: "6.50 Cr",
      isPlaying: true,
      role: "All Rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3760.png",
    },
    {
      id: 24,
      playerName: "Umran Malik",
      from: "SH",
      playerTeamName: "Sunrisers Hyderabad",
      price: "4.00 Cr",
      isPlaying: true,
      role: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/15154.png",
    },
    {
      id: 25,
      playerName: "Axar Patel",
      from: "DC",
      playerTeamName: "Delhi Capitals",
      price: "9.00 Cr",
      isPlaying: false,
      role: "All Rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1113.png",
    },
    {
      id: 26,
      playerName: "Abhinav Manohar",
      from: "GT",
      playerTeamName: "Gujarat Titans",
      price: "2.60 Cr",
      isPlaying: true,
      role: "All Rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20589.png",
    },
    {
      id: 27,
      playerName: "Sarfaraz Khan",
      from: "DC",
      playerTeamName: "Delhi Capitals",
      price: "7.00 Cr",
      isPlaying: false,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1564.png",
    },
    {
      id: 28,
      playerName: "Hardik Pandya",
      from: "GT",
      playerTeamName: "Gujarat Titans",
      price: "15.00 Cr",
      isPlaying: true,
      role: "All Rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png",
    },
    {
      id: 29,
      playerName: "Rinku Singh",
      from: "KNR",
      playerTeamName: "Kolkata Knight Riders",
      price: "55.00 L",
      isPlaying: false,
      role: "All Rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3830.png",
    },
    {
      id: 30,
      playerName: "Krunal Pandya",
      from: "LSG",
      playerTeamName: "Lucknow Super Giants",
      price: "8.25 Cr",
      isPlaying: false,
      role: "All Rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3183.png",
    },
    {
      id: 31,
      playerName: "Marcus Stoinis",
      from: "LSG",
      playerTeamName: "Lucknow Super Giants",
      price: "9.02 Cr",
      isPlaying: true,
      role: "All Rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/964.png",
    },
    {
      id: 32,
      playerName: "Tristan Stubbs",
      from: "MI",
      playerTeamName: "Mumbai Indians",
      price: "20.00 L",
      isPlaying: false,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20631.png",
    },
    {
      id: 33,
      playerName: "Tim Southee",
      from: "KNR",
      playerTeamName: "Kolkata Knight Riders",
      price: "1.50 Cr",
      isPlaying: true,
      role: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/307.png",
    },
    {
      id: 34,
      playerName: "Ramandeep Singh",
      from: "MI",
      playerTeamName: "Mumbai Indians",
      price: "21.00 L",
      isPlaying: false,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20595.png",
    },
    {
      id: 35,
      playerName: "Rahul Chahar",
      from: "PK",
      playerTeamName: "Punjab Kings",
      price: "5.25 Cr",
      isPlaying: true,
      role: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3763.png",
    },
    {
      id: 36,
      playerName: "Yashasvi Jaiswal",
      from: "RR",
      playerTeamName: "Rajasthan Royals",
      price: "4.00 Cr",
      isPlaying: false,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/13538.png",
    },
    {
      id: 37,
      playerName: "Virat Kohli",
      from: "RCB",
      playerTeamName: "Royal Challengers Bangalore",
      price: "16.00 Cr",
      isPlaying: true,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png",
    },
    {
      id: 38,
      playerName: "Jonny Bairstow",
      from: "PK",
      playerTeamName: "Punjab Kings",
      price: "6.75 Cr",
      isPlaying: false,
      role: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/506.png",
    },
    {
      id: 39,
      playerName: "Marco Jansen",
      from: "SH",
      playerTeamName: "Sunrisers Hyderabad",
      price: "4.20 Cr",
      isPlaying: false,
      role: "All Rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/17068.png",
    },
    {
      id: 40,
      playerName: "Prasidh Krishna",
      from: "RR",
      playerTeamName: "Rajasthan Royals",
      price: "10.00 Cr",
      isPlaying: true,
      role: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5105.png",
    },
    {
      id: 41,
      playerName: "David Willey",
      from: "RCB",
      playerTeamName: "Royal Challengers Bangalore",
      price: "2.00 Cr",
      isPlaying: false,
      role: "All Rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2758.png",
    },
    {
      id: 42,
      playerName: "Kartik Tyagi",
      from: "SH",
      playerTeamName: "Sunrisers Hyderabad",
      price: "4.00 Cr",
      isPlaying: false,
      role: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/10059.png",
    },
  ];
  
  let teamDetails = [];
  let playerDetails = [];
  
  // storing data in local storage
  
  if (localStorage.getItem("teams") === null)
    localStorage.setItem("teams", JSON.stringify(teamData));
  
  if (localStorage.getItem("players") === null)
    localStorage.setItem("players", JSON.stringify(playerData));
  
  teamDetails = JSON.parse(localStorage.getItem("teams"));
  playerDetails = JSON.parse(localStorage.getItem("players"));
  
  console.log(teamDetails);
  
  // rendering cards on home page--------------------->
  
  var teamWrapper = document.querySelector(".home-page-team-container");
  
  function createCard() {
    for (var i = 0; i < teamDetails.length; i++) {
      // creating card element
      var teamCard = document.createElement("div");
      teamCard.classList.add("home-page-team-card");
      teamCard.style.cssText =
        "background: linear-gradient(180deg, #0078BC 0%, #17479E 100%);border: 2px solid #17479E;";
      var a = document.createElement("a");
      a.href = "./teams.html?name=" + teamDetails[i].teamName;
      teamCard.appendChild(a);
      var innerDiv = document.createElement("div");
      var cardLogo = document.createElement("div");
      cardLogo.classList.add("team-card-logo");
      var logoImg = document.createElement("img");
      logoImg.src += teamDetails[i].teamIcon;
      a.appendChild(innerDiv);
      innerDiv.appendChild(cardLogo);
      cardLogo.appendChild(logoImg);
      var cardContent = document.createElement("div");
      cardContent.classList.add("team-card-content");
      var contentHeading = document.createElement("h3");
      cardContent.appendChild(contentHeading);
      contentHeading.textContent = teamDetails[i].teamName;
      innerDiv.appendChild(cardContent);
      teamWrapper.appendChild(teamCard);
   
    }
  }
  createCard();
  
  //-------- add team function-------------------->
  
  var teamForm = document.querySelector(".teamForm");
  var submitTeamForm = document.getElementById("submitTeam_button");
  
  function addTeamform() {
    teamForm.style.visibility = "visible";
  }
  
  // add team data
  
  submitTeamForm.addEventListener("click", function (e) {
    e.preventDefault();
    teamForm.style.visibility = "hidden";
    var formTeamName = document.getElementById("team_name").value;
    var formTeamIcon = document.getElementById("team_icon").value;
    var formTeamId = document.getElementById("team_id").value;
    var formTeamTopBatsman = document.getElementById("team_topBatsman").value;
    var formTeamTopBowler = document.getElementById("team_topBowler").value;
    var formTeamChampionshipWon = document.getElementById(
      "team_championshipWon"
    ).value;
  
    let addTeamCard = {
      id: teamDetails.length,
      teamName: formTeamName,
      teamIcon: formTeamIcon,
      teamId: formTeamId,
      teamIdName: "",
      playerCount: 0,
      topBatsman: formTeamTopBatsman,
      topBowler: formTeamTopBowler,
      championshipWon: formTeamChampionshipWon,
    };
    teamDetails.push(addTeamCard);
  
    localStorage.setItem("teams", JSON.stringify(teamDetails));
    // location.href = "./index.html";
    location.reload();
    createCard();
    document.getElementById("team_name").value = "";
    document.getElementById("team_icon").value = "";
    formTeamId = document.getElementById("team_id").value = "";
    formTeamTopBatsman = document.getElementById("team_topBatsman").value = "";
    formTeamTopBowler = document.getElementById("team_topBowler").value = "";
    formTeamChampionshipWon = document.getElementById(
      "team_championshipWon"
    ).value = "";
  });
  
  //-----------------------serach team and player ------------------>
  var searchBox = document.getElementById("search-players");
  var filteredData = [];
  let searchInput = document.querySelector(".search_input input");
  let outputBox = document.querySelector(".output-box");
  
  searchInput.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
      searchInput.click();
    }
    let userData = e.target.value;
  
    for (var p = 0; p < playerDetails.length; p++) {
      if (
        // playerDetails[p].from.toUpperCase().startsWith(userData.toUpperCase())
        playerDetails[p].from.toUpperCase() == userData.toUpperCase() ||
        playerDetails[p].playerName.toUpperCase() == userData.toUpperCase()
      ) {
        //   outputBox.style.visibility = "none";
        // } else {
        outputBox.innerHTML += `<li>${playerDetails[p].playerName} ${playerDetails[p].from} </li>`;
        outputBox.style.visibility = "visible";
      }
  
      let searchList = outputBox.querySelectorAll("li");
      for (let i = 0; i < searchList.length; i++) {
        searchList[i].setAttribute("onclick", "currentLi(this)");
      }
    }
  });
  // current list function
  function currentLi(element) {
    let selectData = element.textContent;
    // console.log(element);
    searchInput.value = selectData;
    searchInput.onclick = () => {
      window.open(`./players.html?name=${selectData}`, "_self");
    };
  }
  