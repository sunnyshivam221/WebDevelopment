window.onload=function(){
    let input=document.getElementById('input')
    let btn=this.document.getElementById('btn')
    let list=document.getElementById('list')


    window.remove=function(element){
        let text=element.parentElement.children[0];
        if(text.style.textDecoration=='line-through'){
            text.style.textDecoration=''
        }else{
            text.style.textDecoration='line-through'
        }

    }


    addNewTask=function(){
        let val=input.value;
        let newTask=document.createElement(`li`)
        newTask.innerHTML=`
      <span>${val}</span>
        <button onclick="remove(this)">X</button>
        `;
        input.value=""
        list.appendChild(newTask)
    }

   

    btn.onclick=function(){
        addNewTask()
    }

    input.addEventListener("keypress",function(event){
        if(event.keyCode==13){
            addNewTask()
        }
    })
    
}