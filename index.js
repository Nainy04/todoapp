function addtask(){
    var task = document.getElementById("sub-txt");
    var txt = task.value;

    var list =document.getElementsByClassName("lists")
 
    var newlist = document.createElement("li");
    newlist.innerHTML= txt;
    
    var check = document.createElement("input");
    check.type = "checkbox"
    check.onclick = function(){
        if(check.checked){
            newlist.style.textDecoration = "line-through";
            }else{  
                newlist.style.textDecoration = "none";
                }

    }

    
    document.getElementById("b").appendChild(newlist);
    newlist.appendChild(check);


   
  
}


/*document.getElementById("sub-btn").addEventListener(onclick,addtask());*/