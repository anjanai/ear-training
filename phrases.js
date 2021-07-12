
const yellow = 'rgb(255, 255, 0)';
const gray = 'rgb(128, 128, 128)';

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

var raag_scales = {
    yaman: "S R G M P D N",
    kalavati: "S G P D n",
};

var raag_phrases = {
    yaman : `N R ; ,N R G ; ,N R ,N G ; R G ; ,N M G R S ; ,N R G ; M R G M P ; M D P ; M D N ; M D M N ; G M G ; N D P ; M R G ; ,N R S ; ,D ,N ,D S ; ,D ,N R G   ; ,N R G ; G R G ; ,N R ,N G ; ,N R G M R M G ; G R M G ; M P ; G M P R S   ; ,N R S ; ,N R G M P ; M P M P ; P M D P M P ; M D M N ; N D P ; M G ; G M D N  M D N ; N D P M G R  S ; ,N R S `,
    kalavati : `S G P D ; G P D ; P D P S' ; n D D ; n D P ; G P D ; G D P ; G P G S ; ,n ,D S ;`,
    
}

var selected_raag;


function convert_notation (notes) {
    let abc = "Q: 50\n";	// tempo

    let note = '';
    for (let i = 0; i < notes.length; i++) {
	note += notes[i];
	if (note === ',' || note ==='\`') continue;
	abc += ( notemap[note] || note );
	note = '';
    }

    abc = abc.replaceAll("---", "4");
    abc = abc.replaceAll("--", "3");
    abc = abc.replaceAll("-", "2");
    
    return abc;
}



function useRaag (raag) {
    selected_raag = raag;
    $("#quiz").empty();
    $("#hear").empty();
    $("#repeat").hide();
    $("#start").show();
    
    var scale = raag_scales[raag].split(' ');
    let higher = [];
    let lower = [];
    console.log (scale);
    for (const note of scale) {
	if ("mp".includes(note.toLowerCase())) {
	    higher.push(note + "'");
	    lower.push("," + note);
	} else if ("srg".includes(note.toLowerCase())) {
	    higher.push(note + "'");
	} else {
	    lower.push("," + note);
	}
    }
    scale = lower.concat(scale).concat(higher);
    for (const note of scale) {
	if (note === 'S') {
	    $("#quiz").append(" (lower octave) <br>");
	    $("#hear").append(" (lower octave) <br>");
	}
	if (note === "S'") {
	    $("#quiz").append("<br> (higher octave)");
	    $("#hear").append("<br> (higher octave)");
	}

	let b = $('<button/>', {
	    text: note,
	    id: note,
	    click: function () { playphrase(convert_notation(this.id)); }
	});
	b.addClass("swar");
	$("#hear").append(b);

	b2 = b.clone();
	b2.click (function() { checknote(this); });
	$("#quiz").append(b2);

    }
}

$(document).ready(function () {
    for (let raag in raag_scales) {
	$("#raag-select").append(new Option(raag, raag));
    }
    $("#datemod").html(document.lastModified);
    
    $( "#raag-select" ).change(function() {
	useRaag(this.value);
    });
    
    useRaag("yaman");
    $("#repeat").hide();
 
});

String.prototype.firstWord = function(){return this.replace(/\s.*/,'')}

function tanpura() {
    let tanpura = $('#tanpura')[0];
    tanpura[tanpura.paused ? 'play' : 'pause']();
}

function start() {
    $("#repeat").show();
    $("#start").hide();
    next();
}

var num_correct = 0;
var current_phrase;
var current_abc;

function next() {
    $("#quiz").children().css('background-color', 'linen');
    let active = raag_phrases[selected_raag].split(';');
    let phrase = active[Math.floor(Math.random() * active.length)].trim().split(/\s+/);
    // phrase = ",D ,N S";
    let len = phrase.length;
    current_phrase = phrase;
    console.log (phrase);
    current_abc = convert_notation(phrase);
    playphrase (current_abc);

    $("#current").html("&block; ".repeat(len));
    
}

function playphrase(notes) {
    var visualObj = ABCJS.renderAbc("*", notes)[0];
    
    // This object is the class that will contain the buffer
    var midiBuffer;
    var audioContext = new window.AudioContext();
    audioContext.resume().then(function () {
	midiBuffer = new ABCJS.synth.CreateSynth();
	
	return midiBuffer.init({
	    visualObj: visualObj,
	    audioContext: audioContext
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

function repeat() {
    playphrase(current_abc);
}

var correct_so_far = "";

function reset() {
    $("#quiz").children().css('background-color', 'white');
    correct_so_far = "";
    num_correct = 0;
}


function checknote(button) {
    let note = $(button).attr('id');
    let correct_note = current_phrase[num_correct];

    $("#quiz").children().css('background-color', 'white');
    let color = (correct_note === note? 'limegreen' : 'red');
	
    $(button).css('background-color', color);

    playphrase (convert_notation(note));

    if (correct_note !== note) return;

    let guess = $("#current").html().trim().split(/\s+/);
    guess[num_correct++] = note;
    let str = guess.join(' ');
    
    if (str === current_phrase.join(' ')) {
	str +=  '&#10004;';
	
	window.setTimeout(
	    function() {
		$("#guessed").prepend(str+"<br>");
		reset();
		next();
	    }, 900);
    }
    
    $("#current").html(str);

}

