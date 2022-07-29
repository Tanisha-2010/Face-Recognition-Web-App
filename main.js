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

classifier = ml5.imageClassifier("https: //teachablemachine.withgoogle.com/models/zRXrMOkD8/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model is Loaded");
}

function check() {
    img = document.getElementById("picture");
    classifier.classify(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("fam_member").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}