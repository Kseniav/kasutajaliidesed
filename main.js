function allowDrop(event) {
	event.preventDefault();
}

function drop(event) {
	event.preventDefault();
	var what = $('#' + event.dataTransfer.getData("trId"));
	var where = $(event.target.parentNode);
	var whatPos = what.position();
	var wherePos = where.position();
	if (where.is("tr")) {
		if (wherePos.top > whatPos.top) {
			what.insertAfter(where);
		} else {
			what.insertBefore(where);
		}
		$.each($('#lists table tr > td:first-child'), function (index, value) {
			$(value).text(index + 1);
		});
	}
}

function drag(event) {
	event.dataTransfer.setData('trId', event.target.id);
}

$(document).ready(function() {
	$('#lists table tr').each(function() {
		var trEl = $(this); 
		trEl.attr('draggable', 'true');
		trEl.attr('ondragstart', 'drag(event)');
		trEl.attr('ondragover', 'allowDrop(event)');
		trEl.attr('ondrop', 'drop(event)');
	});
});