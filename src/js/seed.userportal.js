document.getElementById("btn-search").onclick = function() {
    document.getElementById("info").hidden = false;
    setTimeout(redirect, 3500);
    
}

function redirect() {
    let username = document.getElementById("user_field").value;
    let redirect_link = location.origin + "/seed.xi/bible-hero.com/login-auth/" + username;
    if (username != '') {
        let info_field = document.getElementById("info");
        info_field.innerText = "Redirecting to login page...";
        setTimeout(transfer(redirect_link), 2500);
    }
}

function transfer(link) {
    document.getElementById("user_field").innerHTML = "disabled";
    document.getElementById("info").innerText = "Got to : " + link; 
    location.href = link;
}