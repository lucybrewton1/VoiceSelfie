var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition;

function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML=content;

if (content="Take My Selfie")
{
    console.log("taking selfie...");
    speak();
}
}
camera=document.getElementById("camera");
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);   
    setTimeout(function(){
        takeSnapshot();  
        save();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='captured_image'>"
    });
}
function save() {
    image=document.getElementById("captured_image").src;
    link=document.getElementById("link");
    link.href=image;
    link.click();
}
