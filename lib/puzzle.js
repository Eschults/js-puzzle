// todo
// // 1. Select
// const button = document.querySelector('#show-hint');
// console.log(button);

// // 2. Put a microphone
// button.addEventListener('click', (event) => {
//   // 3. Callback
//   alert('OK I\'m ready!');
// });

const moveTile = (tile) => {
  // 4.1 Select the empty tile
  const empty = document.querySelector(".empty");
  // 4.2 Read coordinates
  const emptyTileRow = empty.parentElement.rowIndex;
  const emptyTileCol = empty.cellIndex;
  const clickedTileRow = tile.parentElement.rowIndex;
  const clickedTileCol = tile.cellIndex;
  if ((emptyTileCol === clickedTileCol && Math.abs(emptyTileRow - clickedTileRow) === 1) ||
   (emptyTileRow === clickedTileRow && Math.abs(emptyTileCol - clickedTileCol) === 1))  {
    // 5. Delete empty class from empty tile;
    empty.classList.remove("empty");
    // 6. Add the inner text to the empty tile;
    empty.innerText = tile.innerText;
    // 7. Add the empty class;
    tile.classList.add("empty");
    tile.innerText = "";
    const texts = [];
    tiles.forEach((tile) => {
      texts.push(tile.innerText);
    });
    if (texts.join() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,') {
      setTimeout(() => {
        alert('Congratulations!');
      }, 500)
    }
  };
};

// 1. Select all td for listening;
const tiles = document.querySelectorAll("td");
// console.log(tiles)
// 2. Iterate over the td;
tiles.forEach((tile) => {
  // 3. Set a micro on each td (event = "click");
  tile.addEventListener('click', (event) => {
    // 4. Callbalck;
    // console.log(event)
    moveTile(event.currentTarget);
  });

});
