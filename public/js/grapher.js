var socket = io.connect('http://localhost:3000/data');
socket.on('connect',function(data){
    socket.on('hello',function(data){
        console.log(data);
    });
});

