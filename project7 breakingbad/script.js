let u = document.getElementById("but")
let f = document.querySelector(".up")
let bo = document.getElementById("box")
let d;
let ne;
async function get(z) {
    let u = await fetch("https://www.breakingbadapi.com/api/characters")
    let r = await u.json()
    let arr = []
    let index, ty;
    for (let i = 0; i < r.length; i++) {
        arr.push(r[i].name)
    }
    if (arr.indexOf(z) === -1) {
        if (document.getElementById('box') != null) {
            document.getElementById('box').remove()
        }

        ty = document.createElement("div")
        ty.id = "box"
        ty.innerHTML = "<p><span>Oops</span> <br> No character with this Name</p>"
        ty.style.height = "100px"
        ty.style.paddingTop = "40px"
        ty.style.fontFamily = "Arial, Helvetica, sans-serif";


        f.appendChild(ty)

    } else {
        index = arr.indexOf(z)

        ne = `
           <img src="${r[index].img}"  alt="nothing" width=300 height=300><br>
           <br>
           <p id=para><span class=y>Name</span> : <span class=repon>${r[index].name}</span><br>
           <br>
           <span class=y>Birthday</span> : <span class=repon>${r[index].birthday}</span><br>
           <br>
           <span class=y>Occupation</span> : <span class=repon>${r[index].occupation.join("/")}</span><br>
           <br>
           <span class=y>Status</span> : <span class=repon>${r[index].status}</span><br>
           <br>
           <span class=y>Appearance</span> : <span class=repon>${r[index].appearance}</span><br>
           <br>
           <span class=y>Nickname</span> : <span class=repon>${r[index].nickname}</span><br>
           <br>
           <span class=y>Portrayed</span> : <span class=repon>${r[index].portrayed}</span><br>
        
        
         </p>
        `
        if (document.getElementById('box') != null) {
            document.getElementById('box').remove()
        }

        ty = document.createElement("div")
        ty.id = "box"
        ty.innerHTML = ne
        f.appendChild(ty)


    }


}

u.onclick = function() {
    d = document.getElementById("loe").value
    get(d)
}



bo.onclick = function() {
    bo.style.color = "white"
}