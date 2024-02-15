const WebSocket = require('ws');

// Create a WebSocket server instance
const wss = new WebSocket.Server({ port: 8080 });

console.log("starting")

// Event listener for when a client connects
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // Event listener for messages from clients
  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);

    // Assuming the message is JSON data with accelerometer, gyroscope, and screen input
    try {
      const data = JSON.parse(message);
      console.log('Accelerometer data:', data.accelerometer);
      console.log('Gyroscope data:', data.gyroscope);
      console.log('Screen input:', data.screenInput);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });

  // Event listener for when a client disconnects
  ws.on('close', function() {
    console.log('Client disconnected');
  });
});
