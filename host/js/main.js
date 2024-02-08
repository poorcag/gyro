
'use strict';
const QRCode = require('qrcode');

const configuration = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' }
  ]
};

const peerConnection = new RTCPeerConnection(configuration);

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