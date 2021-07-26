function preload() {

}

function setup() {
    canvas=createCanvas(300,270);
    canvas.center();

    vedio=createCapture(VIDEO);
    vedio.size(300,270);
    vedio.hide();

    classifier=ml5.imageClassifier('MobileNet',modalLoaded);
}

function modalLoaded() {
    console.log("modal is loaded");
}

function draw() {
    image(vedio,0,0,300,270);

    classifier.classify(vedio,gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("o").innerHTML="Object:"+results[0].label;
        document.getElementById("a").innerHTML="Accuracy:"+results[0].confidence.toFixed(2)*100;
    }
}