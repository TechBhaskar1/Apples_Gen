x = 0;
y = 0;
var to_number = 0;
var screenWidth = 0;
draw_apple = "";
var screenHeight = 0;
var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is Listening... Please Speak";
    Recognition.start();
}

Recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML = "Speech has been recohnized as :" + content;
    to_number = Number(content);
    if (Number.isInteger(to_number)) {
        document.getElementById("status").innerHTML = "Started drawing apples";
        draw_apple = "set";
    } else {
        document.getElementById("status").innerHTML = "Speech is not a number";
    }
}

function preload() {
    apple = loadImage('https://i.postimg.cc/7LfZ7mXP/717079.png');
}

function setup() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    canvas = createCanvas(screenWidth, screenHeight);

}

function draw() {
    if (draw_apple == "set") {
        for (var i = 1; i <= to_number; i++) {
            x = Math.floor(Math.random() * screenWidth );
            y = Math.floor(Math.random() * screenHeight);
            image(apple, x, y, 50, 50);
        }
        document.getElementById("status").innerHTML = to_number + " Apples are drawn !";
        draw_apple = "";
    }
}