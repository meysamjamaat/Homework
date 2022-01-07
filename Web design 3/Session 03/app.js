var time = prompt("Please enter the desired time:");
var $output = document.getElementById('output');
var html = "";

if(time == 8) {
    html = "<h1>Wake up</h1>";
} else if(time == 9) {
    html = "<h1>Wake up</h1>";
} else if(time == 10) {
    html = "<h1>Go to Work</h1>";
} else if(time == 11) {
    html = "<h1>Go to Work</h1>";
} else if(time == 12) {
    html = "<h1>Lunch</h1>";
} else if(time == 13) {
    html = "<h1>Go to Work</h1>";
} else if(time == 14) {
    html = "<h1>Go to Work</h1>";
} else if(time == 15) {
    html = "<h1>Go to Work</h1>";
} else if(time == 16) {
    html = "<h1>Go to Work</h1>";
} else if(time == 17) {
    html = "<h1>Gym</h1>";
} else if(time == 18) {
    html = "<h1>Gym</h1>";
} else if(time == 19) {
    html = "<h1>Dinner time</h1>";
} else if(time == 20) {
    html = "<h1>Watch Tv</h1>";
} else if(time == 21) {
    html = "<h1>Watch Tv</h1>";
} else if(time >= 22) {
    html = "<h1>Time to go to sleep</h1>";
} else {
    html = "<h1>You should be sleeping</h1>";
}

$output.innerHTML = html;