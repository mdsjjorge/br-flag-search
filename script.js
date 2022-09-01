import {statesBr}  from "./states.js";

let list = document.querySelector("#list");
let notFound = document.querySelector("#not-found");
let search = document.querySelector("#search");
let flag = document.querySelector("#flags");
let brMap = document.querySelector("#br-map");

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
    let count = 0;
    
    if(upList.length === 0) {
        upFlag = "";
        list.style.display="none";
        flag.style.display="none";
        brMap.style.display="block";
        upList = "";
        notFound.innerHTML = "";
    } else {
        let r = "";
        r = new RegExp(upList,"gi");
        for (let j in statesBr){
            if (statesBr[j].state.match(r)) {
                list.style.display="block";
                flag.style.display="flex";
                brMap.style.display="none";
                list.children[j].style.display="block";
                flag.children[j].style.display="block";
                flag.style.overflow="scroll";
                notFound.innerHTML = "";
                count ++;
            } else {
                list.children[j].style.display="none";
                flag.children[j].style.display="none";
                notFound.innerHTML = "";
            }
        }
        if((count === 0 && notFound.innerHTML === "") && (upList.length != 0)) {
            let li = document.createElement('li');
            li.innerHTML = "No flag found!";
            notFound.appendChild(li);
        }
    }
})
