const tanpuras_sapa = `/2020/03/g-tanpura-thick
/2020/03/ab-tanpura-thick
/2020/03/a-tanpura-thick
/2020/03/bb-tanpura-thick
/2020/03/b-tanpura-thick
/2020/03/c-tanpura-thick
/2020/03/db-tanpura-thick
/2020/03/d-tanpura-thick
/2020/03/eb-tanpura-thick
/2020/03/e-tanpura-thick
/2020/03/f-tanpura-thick
/2020/03/gb-tanpura-thick`.split(/\s+/);

console.log (tanpuras_sapa);

const tanpuras_sama = `/2021/02/G-Tanpura-B5-SaMa-2021
/2021/02/Ab-Tanpura-B5-SaMa-2021
/2021/02/A-Tanpura-B5-SaMa-2021
/2021/02/Bb-Tanpura-B5-SaMa-2021
/2021/02/B-Tanpura-B5-SaMa-2021
/2021/02/Low-D-Tanpuras-B5-SaMa-2021
/2021/02/C-Tanpura-B5-SaMa-2021
/2021/02/Db-Tanpura-B5-SaMa-2021
/2021/02/D-Tanpura-B5-SaMa-2021
/2021/02/Eb-Tanpura-B5-SaMa-2021
/2021/02/E-Tanpura-B5-SaMa-2021
/2021/02/F-Tanpuras-B5-SaMa-2021
/2021/02/Gb-Tanpura-B5-SaMa-2021`.split(/\s+/);

const srgm =
           `,m ,M ,P ,d ,D ,n ,N
S r R g    G m M P   d D n N
S' r' R' g' G' m' M' P'`.split(/\s+/);


// use C# as Sa
const abcd =   `^F, =G, ^G, =A, ^A, B, =C 
^C =D ^D    E =F ^F =G    ^G =A ^A B =c 
^c =d ^d    e =f ^f =g    ^g`.split(/\s+/);

const notemap =  abcd.reduce(function(notemap, field, index) {
  notemap[srgm[index]] = field;
  return notemap;
}, {})


function convert_notation (note) {
    let abc = "Q: 50\n%%MIDI program 2\n";	// tempo & instrument
    abc += notemap[note];
    return abc;
}

function createButtons() {
    scale = "S r R g G m M P d D n N".trim().split(' ');
    let octaves = {};
    octaves.mid = scale;
    octaves.higher = [];
    octaves.lower = [];

    for (const note of scale) {
	if ("mp".includes(note.toLowerCase())) {
	    octaves.higher.push(note + "'");
	    octaves.lower.push("," + note);
	} else if ("srg".includes(note.toLowerCase())) {
	    octaves.higher.push(note + "'");
	} else {
	    octaves.lower.push("," + note);
	}
    }

    let d = document.createElement('div');
    for (let octave of "higher mid lower".split(' ')) {
	let div = document.createElement('div');
	$(div).append(octave);
	for (const note of octaves[octave]) {
	    let b = $('<button/>', {
		text: note,
		id: note,
		class: "swar",
	    });
	    $(div).append(b);
	}
	$(div).appendTo(d);
	
    }

    $(d).appendTo("#hear");

    $("#hear").find("button").click (function() {
	playnote(convert_notation(this.id));
    });
    
}

let transpose = 0;
let keys = `G G# A A# B C C# D D# E F F#`.split(' ');

function changeSa (key) {
    transpose = keys.indexOf(key) - keys.indexOf('C#');
    let mp3 = "https://ragajunglism.org/wp-content/uploads/" + tanpuras_sapa[keys.indexOf(key)] + ".mp3";
    let tanpura = document.getElementById("tanpura");
    tanpura.volume = 0.2;
    tanpura.pause();
    console.log (mp3);
    tanpura.setAttribute('src', mp3);
    tanpura.load();
}

$(document).ready(function () {
    createButtons();
    for (let key of keys) {
	$("#key-select").append(new Option(key, key));
    }
    $("#key-select").change( function() {
	changeSa (this.value);
    });
    $("#key-select").val("C#");
    changeSa("C#");

});

function tanpura() {
    let tanpura = $('#tanpura')[0];
    tanpura[tanpura.paused ? 'play' : 'pause']();
}

var visualObj;
var audioContext = new window.AudioContext();
// This object is the class that will contain the buffer
var midiBuffer;

function playnote(note) {
    visualObj = ABCJS.renderAbc("*", note)[0];
    
    audioContext.resume().then(function () {
	midiBuffer = new ABCJS.synth.CreateSynth();
	
	return midiBuffer.init({
	    visualObj: visualObj,
	    audioContext: audioContext,
	    options: {
		midiTranspose: transpose,
	    },
	}).then(function (response) {
	    return midiBuffer.prime();
	}).then(function () {
	    midiBuffer.start();
	    return Promise.resolve();
	}).catch(function (error) {
	    alert("synth error", error);
	});
    });
}
