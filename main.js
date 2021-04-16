Webcam.set({
    width:300,
    height:300,
    image_format: "png",
    png_quality:90

});

Webcam.attach("#camera")

function capture(){
    Webcam.snap(function (picture) {
        document.getElementById("snapshot").innerHTML=`<img id="captured_image" src=${picture}>`
    })
}

console.log("ml5 version", ml5.version);


classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wpJBK18UE/model.json", modelLoaded);


function modelLoaded(){
    console.log("model has been loaded successfully")
}

function identify(){
    img = document.getElementById("captured_image");
    classifier.classify(img, getResult);
}

function getResult(error, results){
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        personName=results[0].label
        console.log(personName)
        accuracy= results[0].confidence.toFixed(3)*100+"%";
        console.log(accuracy)
        document.getElementById("personResult").innerHTML=personName;
        document.getElementById("personAccuracy").innerHTML=accuracy;
        }
}