function removeRequest(name) {
    var div = document.querySelector("#"+name);
    div.remove();
}

function changeName() {
    var userName = document.querySelector("#user-name");
    userName.innerText = "";
    userName.innerHTML = `<input type="text"></input>`
}