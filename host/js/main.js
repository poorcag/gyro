
'use strict';
const QRCode = require('qrcode');

const configuration = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' }
  ]
};

const peerConnection = new RTCPeerConnection(configuration);
var receiveChannel = null;
peerConnection.ondatachannel = receiveChannelCallback;

var gyroscopeData = document.getElementById('gyroscopeData')

function receiveChannelCallback(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;

  document.getElementById('canvas').remove()
}

function handleReceiveMessage(event) {
  gyroscopeData.innerText = event.data
}

function handleReceiveChannelStatusChange(event) {
  if (receiveChannel) {
    console.log(
      `Receive channel's status has changed to ${receiveChannel.readyState}`,
    );
  }
}

// Generate SDP offer
peerConnection.createOffer()
  .then((offer) => {
    return peerConnection.setLocalDescription(offer);
  })
  .then(() => {
    const sdpOffer = peerConnection.localDescription;

    // Generate QR code containing only the SDP offer
    const canvas = document.getElementById('canvas');
    QRCode.toCanvas(canvas, sdpOffer.sdp, function (error) {
      if (error) {
        console.error(error);
      } else {
        console.log('QR code generated successfully!');
      }
    });
  })
  .catch((error) => {
    console.error('Error generating SDP offer:', error);
  });


// // Generate QR code image from SDP offer
// qr.toDataURL(sdpOffer, { errorCorrectionLevel: 'H' }, function (err, url) {
//     if (err) throw err;
//     // Display or save the QR code image (url)
// });