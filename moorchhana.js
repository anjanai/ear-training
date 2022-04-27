const notes = "SrRgGmMPdDnN";

function rotate (arr, n) {
    let a = arr.slice(n).concat(arr.slice(0, n));
    let first = a[0];
    let scale = "";
    for (i in a) {
	let j = a[i] - first;
	if (j < 0) j += notes.length ;
	scale += notes[j];
    }
    return scale;
}

function moorchhana() {
    let scale = $("#scale").val().split('');
    let indices = [];
    for (note of scale) {
	indices.push(notes.indexOf(note));
    }
    $("#list").empty();
    for (i in indices) {
	if (i==0) continue;
	let shifted = scale[i] + ": " + rotate(indices, i);
	$("#list").append(`<li  class="list-group-item">${shifted}</li>`);
    }
}

