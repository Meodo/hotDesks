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
  addHotDesk(map, 9, 483, 32, 22, 15, false);
  addHotDesk(map, 10, 485, 68, 23, 18, false);
  addHotDesk(map, 11, 531, 30, 22, 14, true);
  addHotDesk(map, 12, 532, 68, 25, 17, false);
  addHotDesk(map, 13, 582, 57, 24, 13, true);
  addHotDesk(map, 14, 582, 94, 23, 15, true);
  addHotDesk(map, 15, 640, 35, 26, 16, true);
  addHotDesk(map, 16, 640, 73, 27, 17, false);
  addHotDesk(map, 17, 640, 112, 27, 17, true);
  addHotDesk(map, 18, 745, 50, 23, 18, true);
  addHotDesk(map, 19, 744, 75, 22, 16, false);
  addHotDesk(map, 20, 745, 102, 24, 15, true);


  addPersonalDesk(map, 1, 280, 32, 21, 14,"Nicolas Follet");
  /*p1:(261;67);
index.js:24:7
p2:(280;79);
addPersonalDesk(map, 2, 280, 32, 21, 14,"Nicolas Follet");
p1:(261;67);
index.js:24:7
p2:(280;79);
addPersonalDesk(map, 3, 280, 32, 21, 14,"Nicolas Follet");
index.js:28:7
p1:(261;103);
index.js:24:7
p2:(281;117);
index.js:28:7
addPersonalDesk(map, 4, 280, 32, 21, 14,"Nicolas Follet");
p1:(342;30);
index.js:24:7
p2:(361;44);
index.js:28:7
addPersonalDesk(map, 5, 280, 32, 21, 14,"Nicolas Follet");
p1:(340;104);
index.js:24:7
p2:(362;117);
index.js:28:7
addPersonalDesk(map, 6, 280, 32, 21, 14,"Nicolas Follet");
p1:(379;36);
index.js:24:7
p2:(399;48);
index.js:28:7
addPersonalDesk(map, 7, 280, 32, 21, 14,"Nicolas Follet");
p1:(380;71);
index.js:24:7
p2:(398;82);
index.js:28:7
addPersonalDesk(map, 8, 280, 32, 21, 14,"Nicolas Follet");
p1:(429;25);
index.js:24:7
p2:(446;38);
index.js:28:7
addPersonalDesk(map, 9, 280, 32, 21, 14,"Nicolas Follet");
p1:(422;64);
index.js:24:7
p2:(442;78);
index.js:28:7
addPersonalDesk(map, 10, 280, 32, 21, 14,"Nicolas Follet");
p1:(397;183);
index.js:24:7
p2:(416;196);
index.js:28:7
addPersonalDesk(map, 11, 280, 32, 21, 14,"Nicolas Follet");
p1:(398;222);
index.js:24:7
p2:(416;233);
index.js:28:7
addPersonalDesk(map, 12, 280, 32, 21, 14,"Nicolas Follet");
p1:(399;259);
index.js:24:7
p2:(418;270);
index.js:28:7
addPersonalDesk(map, 13, 280, 32, 21, 14,"Nicolas Follet");
p1:(501;190);
index.js:24:7
p2:(518;204);
index.js:28:7
addPersonalDesk(map, 14, 280, 32, 21, 14,"Nicolas Follet");
p1:(500;229);
index.js:24:7
p2:(518;238);
index.js:28:7
addPersonalDesk(map, 15, 280, 32, 21, 14,"Nicolas Follet");
p1:(501;267);
index.js:24:7
p2:(521;274);
index.js:28:7
addPersonalDesk(map, 16, 280, 32, 21, 14,"Nicolas Follet");
p1:(682;179);
index.js:24:7
p2:(702;192);
index.js:28:7
addPersonalDesk(map, 17, 280, 32, 21, 14,"Nicolas Follet");
p1:(683;219);
index.js:24:7
p2:(702;233);
index.js:28:7
addPersonalDesk(map, 18, 280, 32, 21, 14,"Nicolas Follet");
p1:(682;252);
index.js:24:7
p2:(703;264);
index.js:28:7
addPersonalDesk(map, 19, 280, 32, 21, 14,"Nicolas Follet");
p1:(748;251);
p2:(769;266);
*/
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
