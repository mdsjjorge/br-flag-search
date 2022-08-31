import {statesBr}  from "./states.js";

let list = document.querySelector("#list");
let search = document.querySelector("#search");

let t="";

for(let i in statesBr) {
    t += "<li>" + statesBr[i].state + "</li>";
}

list.innerHTML = t;

search.addEventListener('input', function(e){
    t = this.value;
    let r = new RegExp(t,"gi")
    for (let j in statesBr){
        if (statesBr[j].state.match(r)) {
            list.children[j].removeAttribute("style")
        } else {
            list.children[j].style.display="none";
        }
    }
})
