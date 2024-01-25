{/* <div class="todo flex justify-between align-middle w-full rounded-xl  p-2 bg-slate-300 gap-1" id="todo">
        <div class="content w-1/2 flex ">
            <input type="checkbox" class="w-5">
                    
            <span class=" p-2 inline-block">
                hello2
            </span>
        </div>
        <button class="delete bg-sky-800 rounded-xl rounded-br-xl p-2  text-white hover:bg-slate-500 hover:text-gray-900 active:shadow-md active:shadow-black ">Delete</button>

    </div> */}
//displaying the task store in local storage 
document.addEventListener("DOMContentLoaded",function (event){
    let list= document.getElementById("todolist");
    let value = localStorage.getItem("data");
    list.innerHTML = value;
});


// localStorage.removeItem("data");
function savedata(){
    let value = document.getElementById("todolist").innerHTML;
    let key = "data";
    localStorage.setItem(key,value);
}    



function addTask(value){
    let div= document.createElement("div");
    let width = screen.width;
    
        div.className="todo flex flex-row flex-wrap justify-between align-middle w-full rounded-xl  p-2 bg-slate-300 gap-1";
        div.innerHTML=` <div class="content flex-grow w-1/2 flex ">
            <input type="checkbox" class="checkbox w-5">
                
            <span class="p-2 inline-block task">
                ${value}
            </span>
            </div>
            <div class="edit-buttons flex gap-1">
                <button class="edit bg-sky-800 rounded-xl rounded-br-xl p-2  text-white hover:bg-slate-500 hover:text-gray-900 active:shadow-md active:shadow-black ">Edit</button>
                <button class="delete bg-sky-800 rounded-xl rounded-br-xl p-2  text-white hover:bg-slate-500 hover:text-gray-900 active:shadow-md active:shadow-black ">Done</button>

            </div>
        `
    
    
    
    

    document.getElementById("todolist").appendChild(div);
    savedata(); 
}

document.getElementById("submit").addEventListener("click",function (event){
    // create a new element
    let value = document.getElementById("inputbox").value;
    // adding and displaying on the page
    addTask(value);

    document.getElementById("inputbox").value = "";

});


document.getElementById("todolist").addEventListener("click",function (event){
    if(event.target.tagName=="INPUT"){
        if(!event.target.checked){
            console.log("checkbox is off")
            let x = event.target.nextElementSibling;
            event.target.removeAttribute("checked");
            // x.innerHTML = x.innerHTML.slice(3,x.innerHTML.length-4);
            x.classList.toggle("strike");
            console.log(x.innerHTML)
        }
        else{
            console.log("checkbox is on");
            event.target.setAttribute("checked",'true');
            let x = event.target.nextElementSibling;
            x.classList.add("strike");
        }
    }
    // if button was clicked
    else if(event.target.tagName=="BUTTON"){
        
        if(event.target.classList[0] =="delete"){
            console.log("deleting the task");
            let child = event.target.parentElement;
            child = child.parentElement;
            let parent = document.getElementById("todolist");
            parent.removeChild(child);
        } 
        else if(event.target.classList[0]=="edit"){
            console.log("editing the task");
            let parent = event.target.parentElement;
            
            parent = parent.previousElementSibling;
            // reached the target element
            let child = parent.children[1];
            let input = child.previousElementSibling;
            
            let x=prompt("Enter the task: ");
            if(x){
                child.innerHTML=x;
            }
            
            console.log("changed task to ",child.innerHTML);
        }
    }
    savedata();
});

