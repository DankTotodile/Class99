SpeechRecognition = window.webkitSpeechRecognition;
e = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = ""
    e.start()
}
e.onresult = function run(event)
{
console.log(event);
content = event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML = content;
tts();
}
function tts()
{
    var synth = window.speechSynthesis;
    data = document.getElementById("textbox").value;
    l = new SpeechSynthesisUtterance(data);
    synth.speak(l);
    Webcam.attach("#camera");
}
Webcam.set
(
    {
        width:350,
        height: 350,
        image_quality: "png",
        png_quality: 90
    }
)
camera = document.getElementById("camera");
