var $btn = document.getElementsByTagName('button');
var $your = "";
var pcrandom = ['paper' , 'rock' , 'scissor']
var $pcviewpic = "";
var $pc = "";
var $pcscore = 0;
var $yourscore = 0;
var $selectpc = document.getElementById('selectpc');
var $result = document.getElementById('result');


document.getElementById('rockbtn').onclick = function() {
    $your = 'rock';
}
document.getElementById('paperbtn').onclick = function() {
    $your = 'paper';
}
document.getElementById('scissorbtn').onclick = function() {
    $your = 'scissor';
}

for(var i = 0; i < $btn.length; i++) {
    $btn[i].onclick = function() {
        $pc = pcrandom[Math.floor(Math.random()*pcrandom.length)];
        
        if ($pc === 'rock') {
            $pcviewpic = '<div class="d-inline-block mt-3 mb-3"><img src="../Scissor paper rock project/assets/image/rock.jpg" alt="rock" class="rock"></div>';
        } else if ($pc === 'paper') {
            $pcviewpic = '<div class="d-inline-block mt-3 mb-3"><img src="../Scissor paper rock project/assets/image/paper.jpg" alt="paper" class="paper"></div>';
        } else {
            $pcviewpic = '<div class="d-inline-block mt-3 mb-3"><img src="../Scissor paper rock project/assets/image/scissor.jpg" alt="scissor" class="scissor"></div>';
        }
        
        $selectpc.innerHTML = $pcviewpic;

        if ($pc === 'rock' && $your === 'rock') {
        }else if ($pc === 'rock' && $your === 'paper') {
            $yourscore++;
            document.getElementById('yourscore').innerHTML = "";
            document.getElementById('yourscore').innerHTML += $yourscore;
        }else if ($pc === 'rock' && $your === 'scissor') {
            $pcscore++;
            document.getElementById('pcscore').innerHTML = "";
            document.getElementById('pcscore').innerHTML += $pcscore;
        }else if ($pc === 'paper' && $your === 'rock') {
            $pcscore++;
            document.getElementById('pcscore').innerHTML = "";
            document.getElementById('pcscore').innerHTML += $pcscore;
        }else if ($pc === 'paper' && $your === 'paper') {
        }else if ($pc === 'paper' && $your === 'scissor') {
            $yourscore++;
            document.getElementById('yourscore').innerHTML = "";
            document.getElementById('yourscore').innerHTML += $yourscore;
        }else if ($pc === 'scissor' && $your === 'rock') {
            $yourscore++;
            document.getElementById('yourscore').innerHTML = "";
            document.getElementById('yourscore').innerHTML += $yourscore;
        }else if ($pc === 'scissor' && $your === 'paper') {
            $pcscore++;
            document.getElementById('pcscore').innerHTML = "";
            document.getElementById('pcscore').innerHTML += $pcscore;
        }else if ($pc === 'scissor' && $your === 'scissor') {
        }
    }
}

