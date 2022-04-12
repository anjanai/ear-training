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

function useRaag (raag) {
    selected_raag = raag;
    $("#hear").empty();

    scale = raag_scales[raag].trim().split(' ');
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


$(document).ready(function () {
    initTanpura();
    for (let raag of raags) {
	$("#raag-select").append(new Option(raag, raag));
    }

    $( "#raag-select" ).change(function() {
	useRaag(this.value);
    });
    
    useRaag("yaman");
    $("#raag-select").val("yaman");
    
});


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
