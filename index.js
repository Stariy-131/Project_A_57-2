const header = document.getElementById("header");

function enableHeader() {
    text.innerHTML = "In game we have four class. All they have different but memorable gameplay in its own way. But they all have one thing in common, and that thing is BEER! <br>The goal of the game is to collect resources and ingredients for beer. Some resources are needed for leveling up, crafting, and some only for the task.";
    image.src = "../images/DRG.webp";
    image.style.width = "514.28px";
    image.style.height = "289.28px";
    image.style.marginLeft = "0px";

    scout.style.backgroundColor = "white";
    scout.style.color = "#333";
    gunner.style.backgroundColor = "white";
    gunner.style.color = "#333";
    driller.style.backgroundColor = "white";
    driller.style.color = "#333";
    engineer.style.backgroundColor = "white";
    engineer.style.color = "#333";
}


const scout = document.getElementById("scout");
const gunner = document.getElementById("gunner");
const driller = document.getElementById("driller");
const engineer = document.getElementById("engineer");
const text = document.getElementById("text");
const image = document.getElementById("image");

function enableScout() {
    scout.style.backgroundColor = "black";
    scout.style.color = "white";
    scout.style.borderRadius = "20px 0 0 0";
    image.src = "../images/SCOUT.webp";
    image.style.width = "180px";
    image.style.height = "300px";
    image.style.marginLeft = "160px";

    text.innerHTML = "The Scout is a versatile class known for its speed and agility. Equipped with a grappling hook, the Scout can quickly navigate the environment, making it easier to explore caves and reach high places. The Scout's primary weapon is a submachine gun, which is effective at close to medium range. Additionally, the Scout can deploy flares to illuminate dark areas, providing better visibility for the team.";


    gunner.style.backgroundColor = "white";
    gunner.style.color = "#333";
    driller.style.backgroundColor = "white";
    driller.style.color = "#333";
    engineer.style.backgroundColor = "white";
    engineer.style.color = "#333";
}

function enableGunner() {
    gunner.style.backgroundColor = "black";
    gunner.style.color = "white";
    image.src = "../images/GUNNER.webp";
    image.style.width = "280px";
    image.style.height = "300px";
    image.style.marginLeft = "120px";

    text.innerHTML = "The Gunner is the heavy weapons specialist of the team, designed to provide suppressive fire and deal with large groups of enemies. The Gunner is equipped with a powerful minigun that can unleash a high volume of fire, making it ideal for controlling the battlefield. Additionally, the Gunner has access to a deployable turret that can automatically target and shoot at enemies, providing additional firepower and support for the team.";


    scout.style.backgroundColor = "white";
    scout.style.color = "#333";
    driller.style.backgroundColor = "white";
    driller.style.color = "#333";
    engineer.style.backgroundColor = "white";
    engineer.style.color = "#333";
}

function enableDriller() {
    driller.style.backgroundColor = "black";
    driller.style.color = "white";
    image.src = "../images/DRILLER.webp";
    image.style.width = "280px";
    image.style.height = "300px";
    image.style.marginLeft = "120px";

    text.innerHTML = "The Driller is a class specialized in excavation and close-quarters combat. Equipped with dual flamethrowers, the Driller excels at clearing out swarms of enemies and creating new paths through the terrain. The Driller's most distinctive feature is its powerful drills, which can quickly bore through rock and create tunnels, allowing the team to navigate the environment more efficiently. This makes the Driller an essential class for exploration and resource gathering.";


    scout.style.backgroundColor = "white";
    scout.style.color = "#333";
    gunner.style.backgroundColor = "white";
    gunner.style.color = "#333";
    engineer.style.backgroundColor = "white";
    engineer.style.color = "#333";
}

function enableEngineer() {
    engineer.style.backgroundColor = "black";
    engineer.style.color = "white";
    engineer.style.borderRadius = "0 20px 0 0";
    image.src = "../images/ENGINEER.webp";
    image.style.width = "180px";
    image.style.height = "300px";
    image.style.marginLeft = "160px";

    text.innerHTML = "The Engineer is a support class focused on fortifications and defensive capabilities. The Engineer is equipped with a versatile platform gun that can deploy various structures, such as sentry turrets, shield generators, and zip lines. These structures provide strategic advantages for the team, allowing them to hold positions and navigate the environment more effectively. The Engineer's primary weapon is a shotgun, which is effective at close range and complements their defensive playstyle.";


    scout.style.backgroundColor = "white";
    scout.style.color = "#333";
    gunner.style.backgroundColor = "white";
    gunner.style.color = "#333";
    driller.style.backgroundColor = "white";
    driller.style.color = "#333";
}


header.addEventListener("click", enableHeader);
scout.addEventListener("click", enableScout);
gunner.addEventListener("click", enableGunner);
driller.addEventListener("click", enableDriller);
engineer.addEventListener("click", enableEngineer);