const canvas  = document.querySelector('.gridCanvas');

for(i=1; i<=16; i++){
    const square = document.createElement('div');
    square.textContent = 'S'+ i;
    canvas.appendChild(square)
}
