var char = {
    yoda: {
        life: 60,
        attack: 25,
    },
    skywalker: {
        life: 100,
        attack: 10,
    },
    dooku: {
        life: 120,
        attack: 9,
    },
    general: {
        life: 80,
        attack: 15,
    },
};

var yodacheck = true;
var skywalkercheck = true;
var dookucheck = true;
var generalcheck = true;
var yodacheck1 = false;
var skywalkercheck1 = false;
var dookucheck1 = false;
var generalcheck1 = false;
var buttonOn = false
var heroA;
var heroH;
var heroholder;
var defenderA;
var defenderD;
var endgame = 3;


$("#yodabox").on("click", function () {



    $("#yodabox").hide();
    $("#skywalkerbox").hide();
    $("#generalbox").hide();
    $("#dookubox").hide();

    $("#yodabox1").show();
    $("#skywalkerbox2").show();
    $("#generalbox2").show();
    $("#dookubox2").show();

    heroA = char.yoda.attack;
    heroH = char.yoda.life;
    heroholder = char.yoda.attack;
    console.log(heroA);
    console.log(heroH);
});

$("#skywalkerbox").on("click", function () {



    $("#yodabox").hide();
    $("#skywalkerbox").hide();
    $("#generalbox").hide();
    $("#dookubox").hide();

    $("#yodabox2").show();
    $("#skywalkerbox1").show();
    $("#generalbox2").show();
    $("#dookubox2").show();

    heroA = char.skywalker.attack;
    heroH = char.skywalker.life;
    heroholder = char.skywalker.attack;
    console.log(heroA);
    console.log(heroH);

});

$("#generalbox").on("click", function () {



    $("#yodabox").hide();
    $("#skywalkerbox").hide();
    $("#generalbox").hide();
    $("#dookubox").hide();

    $("#yodabox2").show();
    $("#skywalkerbox2").show();
    $("#generalbox1").show();
    $("#dookubox2").show();

    heroA = char.general.attack;
    heroH = char.general.life;
    heroholder = char.general.attack;
    console.log(heroA);
    console.log(heroH);

});

$("#dookubox").on("click", function () {



    $("#yodabox").hide();
    $("#skywalkerbox").hide();
    $("#generalbox").hide();
    $("#dookubox").hide();

    $("#yodabox2").show();
    $("#skywalkerbox2").show();
    $("#generalbox2").show();
    $("#dookubox1").show();

    heroA = char.dooku.attack;
    heroH = char.dooku.life;
    heroholder = char.dooku.attack;
    console.log(heroA);
    console.log(heroH);

});

$("#yodabox2").on("click", function () {

    if (yodacheck === false) {

    }
    else {
        yodacheck = false;
        skywalkercheck = false;
        dookucheck = false;
        generalcheck = false;

        yodacheck1 = true;

        buttonOn = true;

        $("#yodabox2").hide();
        $("#yodabox3").show();

        defenderA = char.yoda.attack;
        defenderD = char.yoda.life;
        console.log(defenderA);
        console.log(defenderD);
    }

});

$("#skywalkerbox2").on("click", function () {

    if (skywalkercheck === false) {

    }
    else {
        yodacheck = false;
        skywalkercheck = false;
        dookucheck = false;
        generalcheck = false;

        skywalkercheck1 = true;

        buttonOn = true;

        $("#skywalkerbox2").hide();
        $("#skywalkerbox3").show();

        defenderA = char.skywalker.attack;
        defenderD = char.skywalker.life;
        console.log(defenderA);
        console.log(defenderD);
    }

});

$("#generalbox2").on("click", function () {

    if (generalcheck === false) {

    }
    else {
        yodacheck = false;
        skywalkercheck = false;
        dookucheck = false;
        generalcheck = false;

        generalcheck1 = true;

        buttonOn = true;

        $("#generalbox2").hide();
        $("#generalbox3").show();

        defenderA = char.general.attack;
        defenderD = char.general.life;
        console.log(defenderA);
        console.log(defenderD);
    }

});

$("#dookubox2").on("click", function () {

    if (dookucheck === false) {

    }
    else {
        yodacheck = false;
        skywalkercheck = false;
        dookucheck = false;
        generalcheck = false;

        dookucheck1 = true;

        buttonOn = true;

        $("#dookubox2").hide();
        $("#dookubox3").show();

        defenderA = char.dooku.attack;
        defenderD = char.dooku.life;
        console.log(defenderA);
        console.log(defenderD);
    }

});

$("#attackbtn").on("click", function () {

    if (buttonOn === false) {
        $("#dialogue").css({ 'text-shadow': '-1px -1px 0 yellow, 1px -1px 0 yellow, -1px 1px 0 yellow, 1px 1px 0 yellow', 'font-size': '20px', 'font-weight': 'bold' });
        $("#dialogue").html("No matter how hard you try you can't hurt the air! Pick another enemy!");
    }
    else {
        defenderD -= heroA;
        $("#dialogue").css({ 'text-shadow': '-1px -1px 0 yellow, 1px -1px 0 yellow, -1px 1px 0 yellow, 1px 1px 0 yellow', 'font-size': '20px', 'font-weight': 'bold' });
        $("#dialogue").html("You did " + heroA + " damage to the defender!");

        heroA += heroholder;

        if (yodacheck1 === true) {
            $(".yl").html(defenderD);
        }
        else if (skywalkercheck1 === true) {
            $(".sl").html(defenderD);
        }
        else if (dookucheck1 === true) {
            $(".dl").html(defenderD);
        }
        else if (generalcheck1 === true) {
            $(".gl").html(defenderD);
        }

        console.log(defenderD);

        if (defenderD < 1) {

            if (yodacheck1 === true) {
                $("#yodabox3").hide();
                buttonOn = false;
                yodacheck1 = false;
                endgame -= 1;
                end();
            }
            else if (skywalkercheck1 === true) {
                $("#skywalkerbox3").hide();
                buttonOn = false;
                skywalkercheck1 = false
                endgame -= 1;
                end();
            }
            else if (dookucheck1 === true) {
                $("#dookubox3").hide();
                buttonOn = false;
                dookucheck1 = false;
                endgame -= 1;
                end();
            }
            else if (generalcheck1 === true) {
                $("#generalbox3").hide();
                buttonOn = false;
                generalcheck1 = false;
                endgame -= 1;
                end();
            }

            yodacheck = true;
            skywalkercheck = true;
            dookucheck = true;
            generalcheck = true;
        }
        else {
            heroH -= defenderA;
            $(".dx").html(heroH);
            if (heroH < 1) {
                alert("you lose")
                location.reload();
            }

            console.log(heroH);
        }
    }


});

function end() {
    if (endgame === 0) {
        alert("You Win!");
        location.reload();
    }
}

