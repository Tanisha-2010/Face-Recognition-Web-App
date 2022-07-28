///https: //teachablemachine.withgoogle.com/models/zRXrMOkD8/

console.log(ml5.version);

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90,
});

camera = document.getElementById("webcam");

Webcam.attach("#camera");

function take_snapShot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='picture' src='" + data_uri + "'>"
    });
}

classifier = ml5.imageClassifier("https: //teachablemachine.withgoogle.com/models/zRXrMOkD8/", modelLoaded);

function modelLoaded() {
    console.log("Model is Loaded");
}