const socket = new WebSocket('ws://10.0.18.24:8080', 'echo-protocol');

socket.addEventListener('open',function(event) {
    socket.send('Hello Server!');
});

socket.addEventListener('message',function(event) {
    console.log('Message From Server', event.data);
});

function sendTest() {
    socket.send("Sent a test message");
}