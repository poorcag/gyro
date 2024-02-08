
'use strict';

const QRCode = require('qrcode')
const sdpOffer = JSON.stringify("peerConnection.localDescription"); // Get SDP offer from WebRTC peer connection
var canvas = document.getElementById('canvas')

QRCode.toCanvas(canvas, sdpOffer, function (error) {
  if (error) console.error(error)
  console.log('success!');
})

console.log("yes")

// // Generate QR code image from SDP offer
// qr.toDataURL(sdpOffer, { errorCorrectionLevel: 'H' }, function (err, url) {
//     if (err) throw err;
//     // Display or save the QR code image (url)
// });