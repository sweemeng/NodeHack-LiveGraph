var socket = io.connect('http://localhost:3000/data');
var graph_data = []
var result = [];
var options = {
        series: { shadowSize: 0 }, // drawing is faster without shadows
        yaxis: { min: 0, max: 2 },
        xaxis: { show: false }
    };
socket.on('connect',function(data){
    socket.on('hello',function(data){
        socket.emit('received',data);
    });
    socket.on('send',function(data){
        graph_data.push(parseFloat(data['data']));
        var result = [];
        for(var i=0;i<graph_data.length;i++){
             result.push([i,graph_data[i]]);
        }
        if(result < 10){
            var plot = $.plot($('#graph'),[ result ],options);
        }
        else{     
            var plot = $.plot($('#graph'),[ result.slice(-10) ],options);
            result = result.slice(-10);
        }
        plot.draw();
        setTimeout("",60000);
        socket.emit('received',data);
    });
    
});

