const flags = document.querySelectorAll("#flagueName");
// const flagsPl = [
 //   "Unia Europejska", "Albania", "Andorra", "Austria", "bialorus", "Belgia", "Bosnia", "Bulgaria", "Chorwacja", "Cypr", "Czechy", "Dania", "Estonia", "Wyspy Owcze", "Finlandia", 
// "Francja", "Niemcy", "Gibraltar", "Grecja", "Grenlandia", "Wegry", "Islandia", "Irlandia", "Wlochy", "Lotwa", "Lichtenstain", "Litwa", "Luxemburg", "Macedonia", "Malta", "Moldawia",
  //  "Monaco", "Czarnogora", "Holandia", "Norwegia", "Polska", "Serbia", "Slowacja", "Slowenia", "Hiszpania", "Szwecja", "Szwajcaria", "Turcja", "Ukraina", "Wielka Brytania", "Watykan",
// ];
let answers = document.getElementById("answers");



    console.log(flags);
    for (let i = flags.length - 1; i >= 0; i--) 
        flags[i].classList.add("invisible");
    

function checkForCorrect() { 
    for (let m = flags.length - 1; m >= 0; m--) {
        if (flags[m].innerHTML.toLowerCase() == answers.value.toLowerCase()) {
            flags[m].classList.remove("invisible");
        } 
        
    } 
    
}
setInterval(checkForCorrect, 1000);
