console.log("Hello there on frontend")

const socket=io()

socket.on('connected',()=>{
    console.log(`connected with socket id ${socket.id}`)
})


window.onload=function(){
    let btn=this.document.getElementById('btn')
    let massage=document.getElementById('massage')
    let list=document.getElementById('list')
    let loginbtn=this.document.getElementById('loginbtn')
    let chatbox=document.getElementById('chatbox')
    let loginbox=this.document.getElementById('loginbox')
    let username=document.getElementById('username')

    let user=''

    btn.onclick=function(){
        socket.emit('send_msg',{user:user,msg:massage.value})
    }

    loginbtn.onclick=function(){
        // loginbox.hide();
        // chatbox.show();
        user=username.value;
        loginbox.style.display='none'
        chatbox.style.display='block'
    }

    socket.on('Recieved_msg',function(data){
        let newList=document.createElement('li')
        newList.innerText=`${data.user} : ${data.msg}`;
        list.appendChild(newList);
    })
}