import {statesBr}  from "./states.js";

let list = document.querySelector("#list");
let search = document.querySelector("#search");
let flag = document.querySelector("#flags");

let upList="";
let upFlag="";

for(let i in statesBr) {
    upList += `<li> ${statesBr[i].state} </li>`;
    upFlag += `<img src="flags/${statesBr[i].initials}.jpg" alt="${statesBr[i].initials} state">`;
}

list.innerHTML = upList;
flag.innerHTML = upFlag;

search.addEventListener('input', function(e){
    upList = this.value;
    let r = new RegExp(upList,"gi")
    for (let j in statesBr){
        if (statesBr[j].state.match(r)) {
            list.children[j].removeAttribute("style");
            flag.children[j].removeAttribute("style");
        } else {
            list.children[j].style.display="none";
            flag.children[j].style.display="none";
        }
    }
})
