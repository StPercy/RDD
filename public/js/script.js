/*
You'll probably want to drop a cookie so this doesn't pop up everytime. I'd reccomend this plugin:
https://github.com/js-cookie/js-cookie
*/

overAge = function() {
  $('#age-verify').addClass('hidden');
}

underAge = function() {
  $('#age-verify').addClass('under');
}

goBack = function() {
  window.location.replace(document.referrer);    //better use this for this single page app...
  // window.history.back(); //works only for sites with severeal pages
}


// The Stuff to make the button NotDBLClickable, but ON(C)E-Clickable:

     const once = f => {
      let finished = false;
      return (...args) => {
        if (!finished) {
          finished = true;
          f(...args);
        }
      };
    };

    const bgimage_on = document.getElementById("bgimage_on");
      bgimage_on.addEventListener('click', once(toDo).bind(this));




//The Doing of all the Crap, two functions inside to change the pic and to play all the random selected Dorfdeppen-mp3s:

function toDo(){  


changePicture(); 
setTimeout(selectRandom, 3000); 

// let freezeClic = false; // just modify that variable to disable all clics events

// document.addEventListener("click", e => {
//     if (freezeClic) {
//         e.stopPropagation();
//         e.preventDefault();
//     }
// }, true);

  }

  
// Play Click
  function playClick() {

    const Clicksound = new Audio('./sounds/clickKurz.mp3');
    Clicksound.play();
    
    }


  //The stuff to change the pics

  var xchange = true;
  
  function changePicture() {
    var current = document.getElementById("bgimage_on");
    if(xchange) {
      current.src = "bilder/Radio_01.jpg"
      xchange = false;
    } else {
      current.src = "bilder/Radio_02.jpg"
      xchange = true;
    }
   
  }

//The stuff to change the audiofiles and play them

var lastSong = null;
var selection = null;

var playlist = ["sounds/derRussischeWeg.mp3","sounds/longIslandIcetea.mp3","sounds/liveImHaus.mp3","sounds/liquidTrip.mp3",
"sounds/lightinASpliff.mp3","sounds/liegeAusMetall.mp3","sounds/liberoDerLibido.mp3","sounds/lauchLsd.mp3",
"sounds/lappenfreunde.mp3","sounds/Kuhdorfdepp.mp3","sounds/krawallImAll.mp3","sounds/knecht.mp3",
"sounds/kleineMaedchen.mp3","sounds/killerOfRhymes.mp3","sounds/Kevin.mp3","sounds/jurassicPark.mp3",
"sounds/jogging.mp3","sounds/jingleRmxZwei.mp3","sounds/jingleRmx.mp3","sounds/inYourHeart.mp3",
"sounds/Ikea.mp3","sounds/ichWillSaufen.mp3","sounds/iCantDance.mp3","sounds/hotBodies.mp3",
"sounds/holidaysInTheRain.mp3","sounds/hiCarb.mp3","sounds/heisseMilfMitHonig.mp3","sounds/hartgeldBitch.mp3",
"sounds/Harburg.mp3","sounds/handumdrehen.mp3","sounds/Hampelmann.mp3","sounds/Hagenbeck.mp3",
"sounds/Grabschänder.mp3","sounds/goldenSpoon.mp3","sounds/getSloty.mp3","sounds/gelbePillen.mp3",
"sounds/geburtAusDeimRektum.mp3","sounds/Fusion.mp3","sounds/funkySchiss.mp3","sounds/fuckPussy.mp3",
"sounds/flickenKassieren.mp3","sounds/fleischwurstEinhorn.MP3",
"sounds/Fleisch.mp3","sounds/Fireheart.mp3","sounds/fassInDieTuete.mp3","sounds/einsZweiDreiAhh.mp3",
"sounds/einGanzNormalesRddLied.mp3","sounds/ehrlicherErwin.mp3","sounds/durchbrenn.mp3",
"sounds/duBistNackt.mp3","sounds/dreiZuNull.mp3","sounds/doubleFuck.mp3","sounds/dorfdeppJingle.mp3",
"sounds/dorfdeppAnthem.MP3","sounds/dontStop.mp3","sounds/Discoland.mp3","sounds/dieZeit.mp3",
"sounds/dieTiere.mp3","sounds/diesDas.mp3","sounds/diddlzInnaCypher.mp3","sounds/diddlalarm.mp3",
"sounds/derTrueffelo.mp3","sounds/deinVaterRdd.mp3","sounds/deinVaterHat.mp3","sounds/deinSchwager.mp3",
"sounds/deinRadio.mp3","sounds/deinArsch.mp3","sounds/dasLebenIsSchwer.mp3","sounds/dasIsDeutschland.mp3",
"sounds/dankeMerkel.mp3","sounds/daFotz.mp3","sounds/Crewlove.mp3","sounds/ccb.mp3","sounds/buggiMedley.mp3",
"sounds/bToBSuplex.mp3","sounds/brilleUndDuttRmx.mp3","sounds/blockDieFrequenz.mp3","sounds/Bettgestell.MP3",
"sounds/berlinPartyCop.mp3","sounds/beissDenGagball.mp3","sounds/beefOderPeace.mp3","sounds/Beachdepp.mp3",
"sounds/babyImBauch.mp3","sounds/allesIsVorbei.mp3","sounds/alleAufIhnRauf.MP3","sounds/alkUndGewalt.mp3",
"sounds/again.mp3","sounds/afterhour.MP3","sounds/aerobic.mp3"  ]; // List of songs

var player = document.getElementById("audioplayer"); // Get audio element

player.autoplay = 0;
player.addEventListener("ended", selectRandom); // Run function when the song ends



function selectRandom(){
    while(selection == lastSong){ // Repeat until a different song is selected
        selection = Math.floor(Math.random() * playlist.length);
    }
    lastSong = selection; // Remember the last song
    player.src = playlist[selection]; // Tell HTML the location of the new song
    player.play();
    
}

selectRandom(); // Select initial song
player.pause();


// the fade in of the mp3:

$(document).ready(function(){
  $("#audioplayer")[0].volume = 0;
  $("#audioplayer").animate({volume: 1}, 10000);
});



