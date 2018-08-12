const express=require('express')
const path=require('path')
const app=express()
const socketio=require('socket.io')
const http=require('http')
const server=http.createServer(app)
const io=socketio(server)

io.on('connection',(socket)=>[
    console.log("connected with id "+socket.id),
    socket.emit('connected'),
    socket.on('send_msg',(data)=>{
        io.emit('Recieved_msg',data)

    })
])

app.use('/',express.static(__dirname+'/frontend'))
app.get('/',(req,res)=>{
    res.send(`Welcome to frontend`);
})
server.listen(9000,function(){
    console.log(`server is started at
    http://localhost:9000`)
})