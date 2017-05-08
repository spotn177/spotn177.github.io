//var words = new Array("she", "i", "happiness", "hope", "movement", "belief", "fantasy", "language", "love", "life");

//var words = new Array("runs", "happens", "conceals", "lives", "unifies", "shames", "proves", "undermines", "flies", "informs");

//var words = new Array("smoothly", "away", "sometimes", "truthfully", "surprisingly", "secretly", "cheerfully", "unwillingly", "darkly", "unfortunately");

//$("p").html(words[Math.floor(Math.random()*words.length)]);
//$("p").append(" ");
//$("p").append(words[Math.floor(Math.random()*words.length)]);
//$("p").append(" ");
//$("p").append(words[Math.floor(Math.random()*words.length)]);
//var arrayInArray = [[1,2,3], [4,5,6], [7,8,9]];

//var key = {
//	high: ["low","bottom","earth"],
//	she: ["he","his"],
//	hi: ["bye"],
//	keyName: ["val1", "val2"]
//}


//pull a random value from key/value object pair

//console.log(key.high[Math.floor(Math.random()*key.high.length)]);



/*
var wordsAnt = new Array(["he"], ["you"], ["sadness"], ["dispair"], ["idleness"], ["disbelief"], ["reality"], ["silence"], ["hate"], ["death"]);

var wordKey = Math.floor(Math.random()*words.length);

console.log(words[wordKey]);
console.log(wordsAnt[wordKey][Math.floor(Math.random()*wordsAnt[wordKey].length)]);





var col_one      = ["she", "i", "happiness", "hope", "movement", "belief", "fantasy", "language", "love", "life"];
var col_one_ants = [["he"], ["you"], ["sadness"], ["dispair"], ["idleness"], ["disbelief"], ["reality"], ["silence"], ["hate"], ["death"]];

$('.column1.word').click(function() {
	var index = $(this).data("index");
	var antWord = col_one_ants[index][Math.floor(Math.random()*col_one_ants[index].length)];
	console.log(antWord);
});

col_one[3]
col_one_ants[3]

var col_two      = ["runs", "happens", "conceals", "lives", "unifies", "shames", "proves", "undermines", "flies", "informs"];
var col_two_ants = ["stands", "stops", "shows", "dies", "scatters", "honors", "denies", "aids", "lands", "hides"];

$('.column2.word').click(function() {
	var index = $(this).data("index");
	var antWord = col_two_ants[index];
});


var col_three      = ["smoothly", "away", "sometimes", "truthfully", "suprisingly", "sscretly", "cheerfully", "unwillingly", "darkly", "unfortunately"];
var col_three_ants = ["roughly", "here", "always", "falsely", "usually", "openly", "sadly", "unwillingly", "lightly", "fortunately"];


$('.column3.word').click(function() {
	var index = $(this).data("index");
	var antWord = col_three_ants[index];
});

*/

$(function () {
	$(".column1.word").click(function () {
		if ($(this).hasClass("changed")) {
			$(this).removeClass("changed");
			$(this).html($(this).data("original"));
		} else {
			$(this).addClass("changed");
			// $(this).html($(this).data("change"));
			$(this.parentNode.parentNode).addClass("disabled");
			$("#column1-final").text($(this).text());
		}
	});
});

