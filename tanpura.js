let transpose = 0;
const keys = `G G# A A# B C C# D D# E F F#`.split(' ');

function tanpura() {
    let tanpura = $('#tanpura')[0];
    tanpura[tanpura.paused ? 'play' : 'pause']();
}

function initTanpura() {
    for (let key of keys) {
	$("#key-select").append('<li><a class="dropdown-item" href="#">' + key + '</a></li>');
    }
    $(".dropdown-item").click(function(){ changeSa($(this).text());  });
    changeSa("C#");
}

function changeSa (key) {
    $("#key").text(key);
    transpose = keys.indexOf(key) - keys.indexOf('C#');
    console.log (key, transpose);

    let tanpura = $('#tanpura')[0];
    let paused = tanpura.paused;
    let mp3 = "/ear-training/" + key.toLowerCase().replace("#","%23") + "_quieter.mp3";
    tanpura.pause();
    tanpura.setAttribute('src', mp3);
    tanpura.load();
    if (! paused) tanpura['play']();
}



