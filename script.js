function setBoard(pixelNum = 16){

    pixelNum > 100 ? pixelNum = 100 : pixelNum = pixelNum;
    pixelNum < 16 ? pixelNum = 16 : pixelNum = pixelNum;
    const allPixel = pixelNum*pixelNum;
    
    const container = document.querySelector('.container')
    container.style.gridTemplate = `repeat(${pixelNum}, 1fr) / repeat(${pixelNum}, 1fr)`
    let pixelArr = [];
    for (let index = 0; index < allPixel; index++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
        pixelArr.push(pixel)
    }    
    
    container.replaceChildren(...pixelArr);
}

function resetBoard(){
    const container = document.querySelector('.container');
    container.childNodes.forEach((child) => {
        child.style.backgroundColor = 'white';
    })
}

setBoard();
document.getElementById('add').addEventListener('click', (e) => {
    const boardSize = prompt('Please choose the size of the sketch pad (1 - 100): ');
    console.log(typeof +boardSize)
    typeof +boardSize === 'number' ? setBoard(+boardSize) : setBoard();
})

document.getElementById('reset').addEventListener('click', (e) => {
    resetBoard()
})
