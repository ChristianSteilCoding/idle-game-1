var money = 0;
var upgrade1_multiplier = 1;
var upgrade1_cost = 25;

function GameLoop() {
  TextUpdate();
  CanAffordUpgrade1();
}
setInterval(GameLoop, 30);

function CanAffordUpgrade1() {
  if (!(money >= upgrade1_cost)) {
    document.querySelector("#upgrade1").disabled = true;
  } else {
    document.querySelector("#upgrade1").disabled = false;
  }
}

function TextUpdate() {
  document.querySelector("#money").innerHTML = "Farts: " + money;
  document.querySelector("#upgrade1").innerHTML =
    "2X Multiplier - Cost: " + upgrade1_cost;
}

document.querySelector("#clicker").onclick = function () {
  money += 1 * upgrade1_multiplier;
};

document.querySelector("#upgrade1").onclick = function () {
  upgrade1_multiplier *= 2;
  money = money - upgrade1_cost;
  upgrade1_cost = upgrade1_cost * 2;
};
