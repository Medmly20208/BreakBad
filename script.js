let searchButton = document.getElementById("searchButton");
let f = document.querySelector(".up");
let container = document.querySelector(".container");
let box = document.getElementById("box");
let CharacterValuesResponse;
async function getCharacterData(CharacterName) {
  let ApiResponse = await fetch(
    "https://www.breakingbadapi.com/api/characters"
  );
  let JsonAPIResponse = await ApiResponse.json();
  let arr = [];
  let index, NoCharcterFoundBoxContent;
  for (let i = 0; i < JsonAPIResponse.length; i++) {
    arr.push(JsonAPIResponse[i].name);
  }
  if (arr.indexOf(CharacterName) === -1) {
    if (document.getElementById("box") != null) {
      document.getElementById("box").remove();
    }

    NoCharcterFoundBoxContent = document.createElement("div");
    NoCharcterFoundBoxContent.id = "box";
    NoCharcterFoundBoxContent.innerHTML =
      "<p><span>Oops</span> <br> No character with this Name</p>";
    NoCharcterFoundBoxContent.style.height = "100px";
    NoCharcterFoundBoxContent.style.paddingTop = "40px";

    container.appendChild(NoCharcterFoundBoxContent);
  } else {
    index = arr.indexOf(CharacterName);

    CharacterValuesResponse = `
           <img src="${
             JsonAPIResponse[index].img
           }"  alt="nothing" width=300 height=300><br>
           <br>
           <p id=para><span class=y>Name</span> : <span class=repon>${
             JsonAPIResponse[index].name
           }</span><br>
           <br>
           <span class=y>Birthday</span> : <span class=repon>${
             JsonAPIResponse[index].birthday
           }</span><br>
           <br>
           <span class=y>Occupation</span> : <span class=repon>${JsonAPIResponse[
             index
           ].occupation.join("/")}</span><br>
           <br>
           <span class=y>Status</span> : <span class=repon>${
             JsonAPIResponse[index].status
           }</span><br>
           <br>
           <span class=y>Appearance</span> : <span class=repon>${
             JsonAPIResponse[index].appearance
           }</span><br>
           <br>
           <span class=y>Nickname</span> : <span class=repon>${
             JsonAPIResponse[index].nickname
           }</span><br>
           <br>
           <span class=y>Portrayed</span> : <span class=repon>${
             JsonAPIResponse[index].portrayed
           }</span><br>
        
        
         </p>
        `;
    if (document.getElementById("box") != null) {
      document.getElementById("box").remove();
    }

    NoCharcterFoundBoxContent = document.createElement("div");
    NoCharcterFoundBoxContent.id = "box";
    NoCharcterFoundBoxContent.innerHTML = CharacterValuesResponse;
    container.appendChild(NoCharcterFoundBoxContent);
  }
}

searchButton.onclick = function () {
  getCharacterData(document.getElementById("inputField").value);
};

box.onclick = function () {
  box.style.color = "white";
};
