const synth = new Tone.Synth().toDestination();

const srgm = "s r R g G m M P d D n N S".split(' ');
const abcd = "C#4 D4 D#4 E4     F4 F#4 G4 G#4   A4 A#4 B4 C5 C#5".split(/\s+/);

const notemap =  abcd.reduce(function(notemap, field, index) {
  notemap[srgm[index]] = field;
  return notemap;
}, {})

var lastnote = "";
var num_correct = num_total = 0;
var got_note = false;
var num_attempts = 0;
var attempts = {};

$(document).ready(function () {
    $("#repeat").hide();
    for (let i in srgm) {
	let b = $('<button/>', {
	    text: srgm[i],
	    id: srgm[i],
	    click: function () { playnote(notemap[this.id]); }
	});
	b.addClass("swar");
	$("#hear").append(b);

	b2 = b.clone();
	b2.click (function() { checknote(this, notemap[this.id]); });
	$("#quiz").append(b2);
    }
});

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


function next() {
    $("#repeat").show();
    $("#start").hide();
    lastnote = abcd[Math.floor(Math.random() * abcd.length)];
    playnote(lastnote);
    num_total++;
    got_note = false;
    num_attempts = 0;
    $("#quiz").children().css('background-color', 'linen');
}

function playnote(note) {
    sampler.triggerAttackRelease(note, "2n");

}

function repeat() {
    playnote(lastnote);
}

function checknote(button, note) {
    console.log (lastnote, note);
    num_attempts ++;
    if (lastnote == note && num_attempts == 1) num_correct++;
    $("#correct").html("<p>Number correct: " + num_correct + "/" + num_total + "</p>");

    let color = (lastnote == note? 'limegreen' : 'red');
	
    $(button).css('background-color', color);

    window.setTimeout(function(){
	if (lastnote == note) next();
    }, 900);

    

}
