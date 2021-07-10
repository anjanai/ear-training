
const yellow = 'rgb(255, 255, 0)';
const gray = 'rgb(128, 128, 128)';

const srgm =
      `,m ,M ,P ,d ,D ,n ,N
s r R g    G m M P   d D n N
s' r' R' g' G' m' M' P'`.split(/\s+/);
const abcd =
                    `F#3 G3 G#3   A3 A#3 B3 C4
C#4 D4 D#4 E4     F4 F#4 G4 G#4   A4 A#4 B4 C5
C#5 D5 D#5 E5     F5 F#5 G5 G#5`.split(/\s+/);

const notemap =  abcd.reduce(function(notemap, field, index) {
  notemap[srgm[index]] = field;
  return notemap;
}, {})

console.log (notemap);
var scores = {};

var lastnote = "";
var num_correct = num_total = 0;
var got_note = false;
var num_attempts = 0;
var attempts = {};

var raag_scales = {
    yaman: "s R G M P D N",
    kalavati: "s G P D n",
};

var raag_phrases = {
    yaman : `N R ; ,N R G ; ,N R ,N G ; R G ; ,N M G R S ; ,N R G ; M R G M P ; M D P ; M D N ; M D M N ; G M G ; N D P ; M R G ; ,N R S ; ,D ,N ,D S ; ,D ,N R G ; ,N R G ; G R G ; ,N R ,N G ; ,N R G M R M G ; G R M G ; M P ; G M P R S ; ,N R S ; ,N R G M P ; M P M P ; P M D P M P ; M D M N ; N D P ; M G ; G M D N M D N ; N D P M G R S ; ,N R S `,
    kalavati : `S G P D ; G P D ; P D P S' ; n D D ; n D P ; G P D ; G D P ; G P G S ; ,n ,D S ;`,
    
}



function useRaag (raag) {
    $("#quiz").empty();
    $("#hear").empty();
    
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
	if (note === 's') {
	    $("#quiz").append(" (lower octave) <br>");
	    $("#hear").append(" (lower octave) <br>");
	}
	if (note === "s'") {
	    $("#quiz").append("<br> (higher octave)");
	    $("#hear").append("<br> (higher octave)");
	}

	let b = $('<button/>', {
	    text: note,
	    id: note,
	    click: function () { playnote(this.id); }
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


const sampler = new Tone.Sampler({
    urls: {
	A4: "A4.mp3",
	C4: "C4.mp3",
	'D#4': "Ds4.mp3",
	'F#4': "Fs4.mp3",
    },
    baseUrl: "https://tonejs.github.io/audio/salamander/"
}).toDestination();


function start() {
    $("#repeat").show();
    $("#start").hide();
    next();
}

function next() {
    $("#quiz").children().css('background-color', 'linen');
    lastnote = active[Math.floor(Math.random() * active.length)];
    playnote(lastnote);
    num_total++;
    got_note = false;
    num_attempts = 0;
}

function playnote(note) {
    console.log (notemap[note]);
    sampler.triggerAttackRelease(notemap[note], "2n");

}

function repeat() {
    playnote(lastnote);
}

function checknote(button) {
    let note = $(button).attr('id');
    num_attempts ++;

    let color = (lastnote == note? 'limegreen' : 'red');
	
    $(button).css('background-color', color);

    window.setTimeout(function(){
	if (lastnote == note) {
	    if (!(note in scores)) {
		scores[note] =  {
		    quizzed: 0,
		    correct: 0
		}
	    }
	    scores[note].quizzed++;
	    console.log (scores);
	    if (num_attempts == 1) {
		num_correct++;
		scores[note].correct ++;
	    }
	    let html = "<p>Number correct: " + num_correct + "/" + num_total + "</p>";
	    html += "<ul>"
	    jQuery.each(scores, function(key, el) {
		html += "<li> " + key + ": " + el.correct + "/" + el.quizzed + "</li>";
	    });
	    html+="</ul>";
	    $("#correct").html(html);
	    next();
	} 
    }, 900);
    

}

