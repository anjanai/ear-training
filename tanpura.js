let transpose = 0;
const keys = `G G# A A# B C C# D D# E F F#`.split(' ');

function tanpura() {
    let tanpura = $('#tanpura')[0];
    tanpura[tanpura.paused ? 'play' : 'pause']();
}

function initTanpura() {
    for (let key of keys) {
	$("#key-select").append(new Option(key, key));
    }
    $("#key-select").change(function(){ changeSa(this.value);  });
    changeSa("C#");
    $("#key-select").val("C#");
}

function changeSa (key) {
    $("#key").text(key);
    transpose = keys.indexOf(key) - keys.indexOf('C#');
    console.log (key, transpose);

    // for ear-training.js
    if (document.title === "Ear-training") {
	let index = abcd.indexOf(key);
	let notes = $.merge(abcd.slice(index), abcd.slice(1,index));
	notes.push(key);
	srgm.forEach((swar, i) =>
	    notemap[swar] = notes[i] + octaveNum(swar,key));
    }
    
    let tanpura = $('#tanpura')[0];
    let paused = tanpura.paused;
    let mp3 = "/ear-training/" + key.toLowerCase().replace("#","%23") + "_quieter.mp3";
    tanpura.pause();
    tanpura.setAttribute('src', mp3);
    tanpura.load();
    if (! paused) tanpura['play']();
}



