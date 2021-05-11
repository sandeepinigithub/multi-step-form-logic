var step=1;
document.querySelector('.step'+step).style.display = 'block';
const steps = document.querySelectorAll('.step');

function next(){
  step++;
  document.getElementById('step').innerText = step;
  steps.forEach(step =>{
    step.style.display = 'none';
  });
  document.querySelector('.step'+step).style.display = 'block';
}
function prev(){
  step--;
  document.getElementById('step').innerText = step;
  steps.forEach(step =>{
    step.style.display = 'none';
  });
  document.querySelector('.step'+step).style.display = 'block';
  
}