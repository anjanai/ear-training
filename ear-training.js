const yellow = 'rgb(255, 255, 0)';
const gray = 'rgb(239, 239, 239)';

const synth = new Tone.Synth().toDestination();

const srgm = "s r R g G m M P d D n N S".split(' ');
const abcd = "C#4 D4 D#4 E4     F4 F#4 G4 G#4   A4 A#4 B4 C5 C#5".split(/\s+/);

const notemap =  abcd.reduce(function(notemap, field, index) {
  notemap[srgm[index]] = field;
  return notemap;
}, {})

var scores = {};

var lastnote = "";
var num_correct = num_total = 0;
var got_note = false;
var num_attempts = 0;
var attempts = {};
var remove_notes;

$(document).ready(function () {
    remove_notes = localStorage.getItem('removeNotes');
    if (remove_notes === null) remove_notes = 'r,g,M,d,n'.split(',');
    
    $(".trigger_popup_subset").click(function(){
       $('.hover_bkgr_subset').show();
    });
    
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
	b.addClass("swar");
	$("#popup_swaras").append(b);
    }

    remove_notes = remove_notes.split(',');
    jQuery.each(remove_notes, function(i, id) {
	$("#"+id).hide();
	$("#A"+id).css({
	    'background-color': yellow,
	    'text-decoration': 'line-through'
	});
    });

    
});

function togglenote (note) {
    color = $(note).css('background-color');
    if (color == gray) $( note ).css({
	'background-color': yellow,
	'text-decoration': 'line-through'
    }); else $( note ).css({
	'background-color': gray,
	'text-decoration': 'none'
    });
}

function tanpura() {
    let tanpura = $('#tanpura')[0];
    tanpura.volume = 0.1;
    tanpura[tanpura.paused ? 'play' : 'pause']();
}


const sampler = new Tone.Sampler({
    urls: {
	A4: "A4.ogg",
	C4: "C4.ogg",
	'D#4': "Ds4.ogg",
	'F#4': "Fs4.ogg",
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

function createSubset() {
    remove_notes = [];
    $("#popup_swaras button").each(function() {
	id = $(this).attr('id').substring(1);
	if ($(this).css("background-color") === yellow) {
	    $("#"+id).hide();
	    remove_notes.push(id);
	} else {
	    $("#"+id).show();
	}
    });
    localStorage.setItem('removeNotes', remove_notes);
    $('.hover_bkgr_subset').hide();
}

