// Desks initialisation
function createMapTable() {
  var map = []
  addDesk(map, 200,100,1,true);
  addDesk(map, 200,120,2,false);
  addDesk(map, 200,140,3,true);
  addDesk(map, 200,160,4,false);
  addDesk(map, 200,180,5,true);
  addDesk(map, 200,200,6,false);
  return map
}

function addDesk(map, relativeX, relativeY, number, isUsed) {
  map[number] = {
    coordinates : {
      x : relativeX,
      y : relativeY
    },
    used : isUsed
  };
};
