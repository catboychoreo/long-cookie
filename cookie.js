let bigCookie = document.getElementById("bigCookie") 

let heldDown = false

bigCookie.onmousedown = function(){
    heldDown = true
}

bigCookie.onmouseup = function(){
    heldDown = false
}

setInterval(function() {
    if(heldDown == true){
        Game.ClickCookie(null, null)
    }
}, 20);