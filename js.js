const newbtn = document.querySelector(".newbtn");
const list = document.querySelector(".list");
const add = document.querySelector(".addbtn");
const ollist = document.querySelector("ol");


/*  list color */
function createli(){
    const nlist = document.createElement("li");
    nlist.innerText = list.value;
    list.value="";
    nlist.classList.add("li");  
    ollist.appendChild(nlist);
    
    const x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.style.margin="0px 10px 0px 10px";
    nlist.prepend(x);
    if (x.checked == true) {
        /* nlist.classList.remove("licut");
        nlist.classList.add("li"); */
        nlist.classList.remove("li");
        nlist.classList.add("licut");
    }else{
        /* nlist.classList.remove("li");
        nlist.classList.add("licut"); */
        
    }
}

function cls(){
    ollist.innerHTML=null;
}

add.addEventListener("click",createli);
newbtn.addEventListener("click",cls);