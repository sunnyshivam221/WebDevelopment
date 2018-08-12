console.log("Hello there on frontend")

const socket=io()

socket.on('connected',()=>{
    console.log(`connected with socket id ${socket.id}`)
})


window.onload=function(){
    let btn=this.document.getElementById('btn')
    let massage=document.getElementById('massage')
    let list=document.getElementById('list')

    btn.onclick=function(){
        socket.emit('send_msg',{msg:massage.value})
    }

    socket.on('Recieved_msg',function(data){
        let newList=document.createElement('li')
        newList.innerText=data.msg;
        list.appendChild(newList);
    })
}