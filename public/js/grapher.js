var socket = io.connect('http://localhost:3000/data');
socket.on('connect',function(data){
    socket.on('hello',function(data){
        socket.emit('received',data);
        console.log(data);
    });
    socket.on('send',function(data){
        socket.emit('received',data);
        console.log(data);
    });
});

