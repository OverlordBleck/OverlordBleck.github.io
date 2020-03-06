function createCard(title, description, githublink, youtubeid) {
    var parent = document.getElementById("display")
    var temp = document.getElementById("card")
    var clone = temp.content.cloneNode(true)

    clone.querySelector("b").innerHTML = title
    clone.querySelector("p").innerHTML = description

    if (youtubeid != "") {
        clone.querySelector("iframe").src = "https://www.youtube.com/embed/" + youtubeid
        clone.querySelector("#ytlink").href = "https://youtu.be/" + youtubeid
    } else { 
        clone.querySelector("iframe").remove()
        clone.querySelector("#ytlink").remove()
    }

    if(githublink != ""){
        clone.querySelector("#ghlink").href = githublink
    } else {
        clone.querySelector("#ghlink").remove()
    }

    parent.appendChild(clone)
}


function onLoad(data, status, xhr) {
    var tab = data //JSON.parse(data)

    for (var i = 0; i < tab.length; i++) {
        var k = tab[i]

         createCard(k["projectName"], k["projectDescription"], k["githubLink"], k["youtubeID"])
    }
}

$.get("data.json", null, onLoad)