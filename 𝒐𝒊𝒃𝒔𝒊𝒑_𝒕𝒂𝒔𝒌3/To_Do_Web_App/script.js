const date=document.getElementById("date");
const inp=document.getElementById("inp");
const input=document.querySelector(".input");
const list=document.getElementById("unlist");
const list1=document.getElementById("unlist1");
const todolist=document.getElementById("to_do_heading");
const comlist=document.getElementById("completed_heading");


const d = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
date.innerHTML=days[d.getDay()]+","+d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear();


var id=0;


const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "linethrough";



document.addEventListener("keyup",function(event)
{
     if(event.keyCode==13)
     {
      var todo=inp.value;
      if(todo)
      {
          var c=UNCHECK;
          var  li=document.createElement("li");
          li.setAttribute('id',id);
          li.setAttribute('class',"listitem");
          li.innerHTML=`<span><i id="${id}"class="fa ${UNCHECK}"></i>`+`<span class="text">${todo}</span></span>`+`<i id="${id}"class="fa fa-trash-o de"></i>`;
          list.append(li);
          inp.value="";
          id+=1;
      }
      

     }
    
});

todolist.addEventListener("click",function(event)
{
list1.style.display='none';
list.style.display='block';
input.style.display="inline";
todolist.setAttribute('class',"a");
comlist.classList.remove("a");
});
comlist.addEventListener("click",function(event)
{
list.style.display='none';
list1.style.display='block';
comlist.setAttribute('class',"a");
input.style.display="none";
todolist.classList.remove("a");

});

list.addEventListener("click",function(event)
{
 let del_item=event.target;
 
 if(del_item.className==`fa ${UNCHECK}`||del_item.className==`fa ${CHECK}`) 
 {
 del_item.parentNode.querySelector(".text").style.textDecoration="line-through";
 del_item.parentNode.querySelector(".text").style.color="gray";
 del_item.classList.toggle(`${CHECK}`);
 del_item.classList.toggle(`${UNCHECK}`);


 setTimeout(function fun()
 {
    list1.appendChild(del_item.parentNode.parentNode);
 }, 300)

 }
 else if(del_item.className=="fa fa-trash-o de")
 {
     list.removeChild(del_item.parentNode);
 }
});




list1.addEventListener("click",function(event)
{
 let del_item=event.target;
 
 if(del_item.className==`fa ${UNCHECK}`||del_item.className==`fa ${CHECK}`) 
 {
 del_item.parentNode.querySelector(".text").style.textDecoration="solid";
 del_item.parentNode.querySelector(".text").style.color="black";
 del_item.classList.toggle(`${CHECK}`);
 del_item.classList.toggle(`${UNCHECK}`);


 setTimeout(function fun()
 {
    list.appendChild(del_item.parentNode.parentNode);
 }, 400)

 }
 else if(del_item.className=="fa fa-trash-o de")
 {
     list1.removeChild(del_item.parentNode);

 }
});

