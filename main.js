Webcam.set({
    width :360,
    height : 300,
    image_format:'png',
    png_quality:90
})
camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src='+data_uri+'></img>';
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/liVgkz-QK/model.json",modelLoaded)
console.log("ml5 version",ml5.version);
function modelLoaded(){
    console.log(modelLoaded);
}
function identify(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,result){
    if(error){
        console.error(error);
    }
        else{
            console.log(result);
            document.getElementById("result_object").innerHTML=result[0].label;

       
    }
}