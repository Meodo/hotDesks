// Desks initialisation
function createMapTable() {
  var map = []
  addDesk(map, 1, 120, 45, 21, 14, true);
  addDesk(map, 2, 110, 102, 21, 14, true);
  addDesk(map, 3, 108, 156, 21, 14, false);
  addDesk(map, 4, 107, 216, 21, 15, false);
  addDesk(map, 5, 214, 43, 21, 14, false);
  addDesk(map, 6, 210, 99, 19, 12, false);
  addDesk(map, 7, 211, 136, 20, 13, false);
  addDesk(map, 8, 211, 173, 21, 16, false);
  return map
}

function addDesk(map, number, relativeX, relativeY, relativeWidth, relativeHeight, isUsed) {
  map[number] = {
    coordinates : {
      x : relativeX,
      y : relativeY,
      width : relativeWidth,
      height : relativeHeight
    },
    used : isUsed
  };
};
