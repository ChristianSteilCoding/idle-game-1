var money = 100000000000000;
var upgrade1_cost = 25;
var research1_cost = 50;
var spin_upgrade_cost = 100;
var click_multiplier = 1;
var gear1 = { base_value: 1, spin_speed: 0.0000000001, multiplier: 1 };

Start();

function Start() {
  document.querySelector("#spin-upgrade-button").style.display = "none";
}

function GameLoop() {
  TextUpdate();
  CheckIfCanAffordUpgrade("#upgrade1", upgrade1_cost);
  CheckIfCanAffordUpgrade("#research1", research1_cost);
  CheckIfCanAffordUpgrade("#spin-upgrade-button", spin_upgrade_cost);
  setInterval(AddMoneyFromRotations, 10000 / gear1.spin_speed);
}
setInterval(GameLoop, 30);

function AddMoneyFromRotations() {
  money += gear1.base_value * gear1.multiplier;
}
setInterval(AddMoneyFromRotations, 10000 / gear1.spin_speed);

function CheckIfCanAffordUpgrade(id, cost) {
  if (!(money >= cost)) {
    document.querySelector(id).disabled = true;
  } else {
    document.querySelector(id).disabled = false;
  }
}

function TextUpdate() {
  document.querySelector("#money").innerText = "Farts: " + money;
  document.querySelector("#upgrade1").innerText =
    "2X Multiplier - Cost: " + upgrade1_cost;
  document.querySelector(
    "#spin-speed"
  ).innerText = `Spin Speed: ${gear1.spin_speed}`;
}

document.querySelector("#clicker").onclick = function () {
  money += 1 * click_multiplier;
};

document.querySelector("#upgrade1").onclick = function () {
  click_multiplier *= 2;
  gear1.multiplier *= 2;
  money -= upgrade1_cost;
  upgrade1_cost *= 2;
};

document.querySelector("#research1").onclick = function () {
  gear1.spin_speed = 1;
  document.querySelector("#research1").style.display = "none";
  document.querySelector("#spin-upgrade-button").style.display = "inline";
  money -= 50;
  document.querySelector("#gear1").style.animation =
    "rotation 10s infinite linear";
};

document.querySelector("#spin-upgrade-button").onclick = function () {
  money -= spin_upgrade_cost;
  spin_upgrade_cost *= 2;
  document.querySelector("#spin-upgrade-button").innerText =
    "Upgrade Spin Speed - Cost: " + spin_upgrade_cost;
  gear1.spin_speed *= 2;
  document.querySelector("#gear1").style.animation = `rotation ${
    10 / gear1.spin_speed
  }s infinite linear`;
};
