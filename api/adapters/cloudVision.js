const vision = require('@google-cloud/vision');
// $env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\jimmy\OneDrive\Desktop\limJimmy\serviceAccount.json"

module.exports = async function cloudVision(image) {
    const client = new vision.ImageAnnotatorClient();
    const fileName = `../../limJimmy/Image/${image.name}.jpg`
    // Performs text detection on the local file
    const [result] = await client.textDetection(fileName);
    const detections = result.textAnnotations;

    let detectionText = ''
    for (let i = 1; i < detections.length; i++) {
        if (i === 1) {
            detectionText += detections[i]['description']
        } else {
            detectionText += ' ' + detections[i]['description']
        }
    }
    // console.log(detectionText, 'detectionText')
    return detectionText
}
