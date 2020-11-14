var socket = undefined;
var IP = "ws://10.0.18.24:8080";
function connect(event) {
    event.preventDefault();
    IP = document.getElementById('IPbox').value;
    console.log(IP);
    socket = new WebSocket(IP, 'echo-protocol');

    socket.addEventListener('open',function(event) {
        socket.send('Hello Server!');
    });
    
    socket.addEventListener('message',function(event) {
        console.log('Message From Server', event.data);
    });
}


function sendTest() {
    socket.send("Sent a test message");
}
window.addEventListener('load',function() {
    document.getElementById('connectForm').addEventListener('submit',connect);
    console.log("AAA");

});