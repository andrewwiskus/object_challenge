var locations = []; // this array will hold your objects

// object constructor
function State(state, locationCount, revenue) {
	this.state = state;
	this.revenue = revenue;
	this.locationCount = locationCount;

	this.averageRevenue = function() {
		
		return revenue / locationCount;
}

}
// object instances
var IL = new State("IL", 12, 5000);
var MN = new State("MN", 3, 300);
var NV = new State("NV", 1, 25000);
// push object instances to locations array
locations.push(IL);
locations.push(MN);
locations.push(NV);

console.log(MN);

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
