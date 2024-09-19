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
    
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.style.margin="0px 10px 0px 10px";
    nlist.prepend(x);
}


function cls(){
    ollist.innerHTML=null;
}

add.addEventListener("click",createli);
list.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      createli()
    }
  });
newbtn.addEventListener("click",cls);
