const canvas  = document.querySelector('.gridCanvas');
for(i=1; i<=160; i++){
    // Canvas have one single column which is columnDiv
    const columnDiv = document.createElement('div');
    columnDiv.setAttribute('style', 
        "display:flex"
    )  
    canvas.appendChild(columnDiv)
    // each columnDiv have rowSquare in horizontal manner
    for(j=1; j<=160; j++){
     const rowSquare = document.createElement('div');
     rowSquare.classList.add('rowSquare');
     rowSquare.addEventListener('mouseenter',()=>{
        rowSquare.style.backgroundColor = 'black';
     })
   
 
   columnDiv.appendChild(rowSquare);

  
 }
}





