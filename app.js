let text=document.querySelector("#ipt input");
let sub=document.querySelector("#ipt button");

let list=document.querySelector("#list");

//input
sub.addEventListener("click",Add)
text.addEventListener("keydown",function(event){
    if (event.key === "Enter") {
        console.log("enter was pressed");
        Add();
    }
})


function Add(){
    // creating li
    let newli=document.createElement('li');
    newli.classList.add("list_elements");

    //creating new checkbox
    let newcheckbox=document.createElement("input");
    newcheckbox.type="checkbox";
    newcheckbox.name="ch";
    newcheckbox.id="ch";

    //creating new inside div
    let newinsideDiv=document.createElement("div");
    newinsideDiv.innerText=text.value;
    newinsideDiv.id="item";

    //creating new delete button
    let newdeletebutton=document.createElement("button");
    newdeletebutton.innerText = "Delete";
    newdeletebutton.classList.add("Del");

    //adding element to new div
    newli.appendChild(newcheckbox);
    newli.appendChild(newinsideDiv);
    newli.appendChild(newdeletebutton);

    list.appendChild(newli);

    console.log(text.value);
    text.value="";
    console.log("button was clicked");
}

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("Del")) {
    console.log("New or old delete button clicked:", event.target);
    event.target.parentElement.remove();
  }
});
