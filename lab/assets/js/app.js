var container = 'some value';

var cash = 1000;


function update_wallet(value) {
	$('.wallet').html(value);
}


function charge_card() {

}

$('.item').click(function() {
	var amount = $(this).data('amount');
	var item = $(this).data('item');


	console.log(cash);
	console.log(amount);
	console.log(cash < amount);

	if (cash >= amount) {

	cash = cash - amount;
	update_wallet(cash);
	$('.purchases').append(item + ', ');
	} else {
		alert('not enough money.');
	}

});



update_wallet(cash);