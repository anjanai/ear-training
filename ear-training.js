const srgm = "s r R g G m M P d D n N S".split(' ');

const abcd = "C# D D# E     F F# G G#   A A# B C C#".split(/\s+/);

let notemap = {};
srgm.forEach((swar, i) =>
    notemap[swar] = abcd[i] + octaveNum(swar,"C#"));


var scores = {};

var lastnote = "";
var num_correct = num_total = 0;
var got_note = false;
var num_attempts = 0;
var attempts = {};
var remove_notes = [];

function popupNotes () {
    $('.hover_bkgr_subset').show(); 
}

function octaveNum(swar, key) {
    let octave = 4;
    if (abcd.indexOf(key) > 5) octave--;

    let diff = 11 - abcd.indexOf(key);
    if (srgm.indexOf(swar) >= diff) octave++;
    return octave;
}

$(document).ready(function () {
    initTanpura();
    remove_notes = localStorage.getItem('removeNotes');
    console.log (remove_notes);
    if (remove_notes === null) remove_notes = 'r,g,M,d,n'.split(',');
    
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_subset').hide();
    });


    $("#repeat").hide();
    for (let i in srgm) {
	let b = $('<button/>', {
	    text: srgm[i],
	    id: srgm[i],
	    click: function () { playnote(this.id); }
	});
	b.addClass("swar");
	$("#hear").append(b);

	b2 = b.clone();
	b2.click (function() { checknote(this); });
	$("#quiz").append(b2);

	b = $('<button/>', {
	    text: srgm[i],
	    id: 'A' + srgm[i],
	    click: function () { togglenote(this); }
	});
	b.addClass("popup_swar");
	$("#popup_swaras").append(b);
    }

    console.log (remove_notes);
    //remove_notes = remove_notes.split(',');
    jQuery.each(remove_notes, function(i, id) {
	if (!id) return;
	$("#"+id).hide();
	$("#A"+id).removeClass("popup_swar").addClass("swar_remove");
    });

    
});

function togglenote (note) {
    note.className = (note.className == "popup_swar") ? "swar_remove" : "popup_swar";
}

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
    $("#quiz").children().css('background-color', 'beige');
    let active = srgm.filter(x => !remove_notes.includes(x));
    lastnote = active[Math.floor(Math.random() * active.length)];
    playnote(lastnote);
    num_total++;
    got_note = false;
    num_attempts = 0;
}

function playnote(note) {
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

function sel_none() {
    $("#popup_swaras button").each(function() {
	$(this).removeClass("popup_swar").addClass("swar_remove");
    });
}


function sel_all() {
    $("#popup_swaras button").each(function() {
	$(this).addClass("popup_swar").removeClass("swar_remove");
    });
}
    
function randomSubset() {
    $("#popup_swaras button").each(function() {
	if (Math.random() < .5) togglenote(this);
    });
}

function createSubset() {
    remove_notes = [];
    $("#popup_swaras button").each(function() {
	let id = $(this).attr('id').substring(1);
	if (this.className === "swar_remove") {
	    $("#"+id).hide();
	    remove_notes.push(id);
	} else {
	    $("#"+id).show();
	}
    });
    localStorage.setItem('removeNotes', remove_notes);
    $('.hover_bkgr_subset').hide();
}

