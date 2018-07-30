window.onload=function(){
    let todos=[]

    let input=this.document.getElementById('input')
    let addTask=this.document.getElementById('addTask')
    let clear=this.document.getElementById('clear')
    let sort=document.getElementById('sort')
    let list=document.getElementById('list')



    saveToDo=function(){
        localStorage['todos']=JSON.stringify(todos)
    }
    
    retrieveToDO=function(){
        if(localStorage['todos']){
            todos=JSON.parse(localStorage['todos'])
        }
    }

    clearList=function(){
        while(list.firstChild){
            list.removeChild(list.firstChild)
        }
    }


    createListItemFromTodo=function(todo){
        let item=document.createElement('li')
        item.innerText=todo.task;
        return item;
    }
    refreshList=function(){
        retrieveToDO()
        clearList()
        for(let i=0;i<todos.length;i++){
            list.appendChild(createListItemFromTodo(todos[i]))
        }
    }
    refreshList()

    addNewTask=function(){
        todos.push({
            task:input.value,
            done:false
        })
        saveToDo()
        input.value=''
        refreshList()
    }



    addTask.onclick=function(){
        addNewTask()
    }
}