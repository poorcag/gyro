(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

'use strict';


// let localConnection;
// let remoteConnection;
// let sendChannel;
// let receiveChannel;

// let transmitData = false;

// const startButton = document.querySelector('button#startButton');
// const closeButton = document.querySelector('button#closeButton');

// const dataField = document.getElementById('gyroscopeData')

// startButton.onclick = createConnection;
// closeButton.onclick = closeDataChannels;

// function enableStartButton() {
//     startButton.disabled = false;
// }

// function createConnection() {
//     const servers = null;
//     window.localConnection = localConnection = new RTCPeerConnection(servers);
//     console.log('Created local peer connection object localConnection');
  
//     sendChannel = localConnection.createDataChannel('sendDataChannel');
//     console.log('Created send data channel');
  
//     localConnection.onicecandidate = e => {
//       onIceCandidate(localConnection, e);
//     };
//     sendChannel.onopen = onSendChannelStateChange;
//     sendChannel.onclose = onSendChannelStateChange;
  
//     localConnection.createOffer().then(
//         gotDescription1,
//         onCreateSessionDescriptionError
//     );
//     startButton.disabled = true;
//     closeButton.disabled = false;
// }

// function onCreateSessionDescriptionError(error) {
//     console.log('Failed to create session description: ' + error.toString());
// }

// function sendData(raw_data) {
//     if (transmitData) {
//         sendChannel.send(raw_data);
//     }
// }

// function closeDataChannels() {
//     console.log('Closing data channels');
//     sendChannel.close();
//     console.log('Closed data channel with label: ' + sendChannel.label);
//     receiveChannel.close();
//     console.log('Closed data channel with label: ' + receiveChannel.label);
//     localConnection.close();
//     remoteConnection.close();
//     localConnection = null;
//     remoteConnection = null;
//     console.log('Closed peer connections');
//     startButton.disabled = false;
//     sendButton.disabled = true;
//     closeButton.disabled = true;
//     dataChannelSend.value = '';
//     dataChannelReceive.value = '';
//     dataChannelSend.disabled = true;
//     enableStartButton();
// }

// function onIceCandidate(pc, event) {
//     getOtherPc(pc)
//         .addIceCandidate(event.candidate)
//         .then(
//             onAddIceCandidateSuccess,
//             onAddIceCandidateError
//         );
//     console.log(`${getName(pc)} ICE candidate: ${event.candidate ? event.candidate.candidate : '(null)'}`);
// }

// function onAddIceCandidateSuccess() {
//     console.log('AddIceCandidate success.');
// }
  
// function onAddIceCandidateError(error) {
//     console.log(`Failed to add Ice Candidate: ${error.toString()}`);
// }

// function onSendChannelStateChange() {
//     const readyState = sendChannel.readyState;
//     console.log('Send channel state is: ' + readyState);
//     if (readyState === 'open') {
//         transmitData = true;
//         closeButton.disabled = false;
//     } else {
//         transmitData = false;
//         closeButton.disabled = true;
//     }
// }

// function gotDescription1(desc) {
//     localConnection.setLocalDescription(desc);
//     console.log(`Offer from localConnection\n${desc.sdp}`);
//     remoteConnection.setRemoteDescription(desc);
//     remoteConnection.createAnswer().then(
//         gotDescription2,
//         onCreateSessionDescriptionError
//     );
// }

// function gotDescription2(desc) {
//     remoteConnection.setLocalDescription(desc);
//     console.log(`Answer from remoteConnection\n${desc.sdp}`);
//     localConnection.setRemoteDescription(desc);
// }

// function initialiseGyroscope() {
//     if (!('Gyroscope' in window)) {
//         alert('Gyroscope not supported in this device/browser.');
//         document.getElementById('errorMessages').innerText = "gyroscope not supported by browser"
//         return;
//     }

//     if (!('Accelerometer' in window)) {
//         alert('Accelerometer not supported in this device/browser.');
//         document.getElementById('errorMessages').innerText = "accelerometer not supported by browser"
//         return;
//     }
      
//     // Request permission to access gyroscope
//     if (!('permissions' in navigator)) {
//         alert('Web browser does not support permissions API.');
//         document.getElementById('errorMessages').innerText = "Web browser does not support permissions API"
//         return;
//     }

//     navigator.permissions.query({ name: 'accelerometer' })
//         .then(permission => {
//           if (permission.state === 'granted') {
//             let acl = new Accelerometer({ frequency: 60 });
//             acl.addEventListener("reading", () => {
//               const accelerometerData = {
//                 x: acl.x,
//                 y: acl.y,
//                 z: acl.z
//               }
//               sendData(JSON.stringify(accelerometerData))
//               dataField.innerText = JSON.stringify(accelerometerData)
//             });
//             acl.start();
//           } else {
//             alert('Permission to access accelerometer denied.');
//             document.getElementById('errorMessages').innerText = "Permission to access accelerometer denied"
//           }
//         })
//         .catch(error => {
//             console.error('Error querying accelerometer permission:', error)
//             document.getElementById('errorMessages').innerText = error
//         });

//       navigator.permissions.query({ name: 'gyroscope' })
//       .then(permission => {
//         if (permission.state === 'granted') {
//           // Initialize gyroscope
//           // Start streaming gyroscope data
          
//           let gyroscope = new Gyroscope({ frequency: 60 });

//           gyroscope.addEventListener("reading", (e) => {
//           const gyroscopeData = {
//               x: gyroscope.x,
//               y: gyroscope.y,
//               z: gyroscope.z
//             };
//             sendData(JSON.stringify(gyroscopeData));
//           });

//           gyroscope.start();
//         } else {
//           alert('Permission to access gyroscope denied.');
//           document.getElementById('errorMessages').innerText = "Permission to access gyro denied"
//         }
//       })
//       .catch(error => {
//           console.error('Error querying gyroscope permission:', error)
//           document.getElementById('errorMessages').innerText = error
//       });
// }

// window.onload = function() {
//     initialiseGyroscope();
// };
},{}]},{},[1]);
