let textarea=document.querySelector("#text-area");
let ul=document.querySelector(".addItem");

textarea.addEventListener('keypress',function (e){
    if(e.key=='Enter'){
        addNote(this.value);
        this.value="";
    }
    
});

function addNote(text){
    let li=document.createElement('li');
    li.classList.add("litem")
    li.innerHTML=`<li>${text}<i class="button fa-regular fa-circle-xmark"></i></li>`;
   
    li.addEventListener('click',function(){
        this.classList.toggle("cross");
    })
    li.querySelector(".button").addEventListener('click',function(){
        li.remove();
    })
    ul.appendChild(li);
}