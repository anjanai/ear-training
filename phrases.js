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

    console.log (abc);
    return abc;
}



function useRaag (raag) {
    selected_raag = raag;
    $("#quiz").empty();
    $("#hear").empty();
    $("#repeat").hide();
    $("#skip").hide();
    $("#start").show();
    
    var scale = raag_scales[raag].trim().split(' ');
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
		click: function () { checknote(this); }
	    });
	    $(div).append(b);
	}
	$(div).appendTo(d);
	
    }
        
    $(d).appendTo("#quiz");
    $(d).clone().appendTo("#hear");

    $("#hear").find("button").click (function() {
	playphrase(convert_notation(this.id));
    });
    
}

function random() {
    const raag = raags[raags.length * Math.random() | 0];
    $( "#raag-select" ).val(raag).change();
}

$(document).ready(function () {
    for (let raag of raags) {
	$("#raag-select").append(new Option(raag, raag));
	raag_phrases[raag] = raag_phrases[raag].replace(/’/g,"'")
	    .replace(/\([^)]*\) */g, "")
	    .split(';')
	    .filter(a => a!="")
	    .map(a => a.trim().split(/\s+/)
		);
    }
    //console.log(raag_phrases["gopika_basant"][10]);

    $("#datemod").html(document.lastModified);
    
    $( "#raag-select" ).change(function() {
	useRaag(this.value);
    });
    
    useRaag("yaman");
    $("#raag-select").val("yaman");
    $("#repeat").hide();
    $("#skip").hide();
    $("#reveal").hide();
 
});

String.prototype.firstWord = function(){return this.replace(/\s.*/,'')}

function tanpura() {
    let tanpura = $('#tanpura')[0];
    tanpura[tanpura.paused ? 'play' : 'pause']();
}

function start() {
    $("#repeat").show();
    $("#skip").show();
    $("#reveal").show();
    $("#start").hide();
    next();
}

function reveal() {
    let note = $("#" + current_phrase[num_correct]);
    $(note).css('background-color', "yellow");
}

var num_correct = 0;
var current_phrase;
var current_abc;

function next() {
    $("#quiz").find("button").css('background-color', 'beige');
    let active = raag_phrases[selected_raag];
    let phrase = active[Math.floor(Math.random() * active.length)];
    //phrase = "gm Pm g S";
    //phrase = phrase.split().join(' ');
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

function skip() {
    reset();
    next();
}

var correct_so_far = "";

function reset() {
    $("#quiz").find("button").css('background-color', 'beige');
    correct_so_far = "";
    num_correct = 0;
}


function checknote(button) {
    let note = $(button).attr('id');
    let correct_note = current_phrase[num_correct];

    $("#quiz").find("button").css('background-color','beige');
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

