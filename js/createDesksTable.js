// Desks initialisation
function createMapTable() {
  var map = {
    hotDesks : [],
    personalDesks : []
  }
  addHotDesk(map, 1, 120, 45, 21, 14, true);
  addHotDesk(map, 2, 110, 102, 21, 14, true);
  addHotDesk(map, 3, 108, 156, 21, 14, false);
  addHotDesk(map, 4, 107, 216, 21, 15, false);
  addHotDesk(map, 5, 214, 43, 21, 14, false);
  addHotDesk(map, 6, 210, 99, 19, 12, false);
  addHotDesk(map, 7, 211, 136, 20, 13, false);
  addHotDesk(map, 8, 211, 173, 21, 16, false);
  addPersonalDesk(map, 1, 280, 32, 21, 14,"Nicolas Follet");
  return map
}

function addHotDesk(map, number, relativeX, relativeY, relativeWidth, relativeHeight, isUsed) {
  map.hotDesks[number] = {
    coordinates : {
      x : relativeX,
      y : relativeY,
      width : relativeWidth,
      height : relativeHeight
    },
    used : isUsed
  };
};

function addPersonalDesk(map, number, relativeX, relativeY, relativeWidth, relativeHeight, ownerName) {
  map.personalDesks[number] = {
    coordinates : {
      x : relativeX,
      y : relativeY,
      width : relativeWidth,
      height : relativeHeight
    },
    owner : ownerName
  };
};
