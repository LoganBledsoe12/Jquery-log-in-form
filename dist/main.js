var $txtname = $('#txtname');
var $spnname = $('#spnname');

var $txtemail = $('#txtemail');
var $spnemail = $('#spnemail');

var $txtsite = $('#txtsite');
var $spnsite = $('#spnsite');

var $txtmessage = $('#txtmessage');
var $spnmessage = $('#spnmessage');


var $btnsubmit = $('#btnsubmit');


$btnsubmit.on('click', submit);
$btnsubmit.on('mouseover', colorChange);
$btnsubmit.on('mouseout', changeBack);
$btnsubmit.on('keypress', clickEnter);
$spnname.hide();
$spnemail.hide();
$spnsite.hide();
$spnmessage.hide();

function submit (){
	$spnname.hide();
	$spnemail.hide();
	$spnsite.hide();
	$spnmessage.hide();


	if($txtname.val()==''){
		$spnname.show();
	}
	if($txtemail.val().indexOf ('@') === -1){
		$spnemail.show();
	}
	if ($txtsite.val()==''){
		$spnsite.show();
	}
	if ($txtsite.val().indexOf ('http://') === -1){
		$spnsite.show();
	}
	if ($txtmessage.val()==''){
		$spnmessage.show();
	}
}
function colorChange(){
	$btnsubmit.css ('background-Color', '#88C470');
}
function changeBack(){
	$btnsubmit.css('background-color', 'rgb(25,26,27)')
}
function clickEnter(e){
	if(e.which == 13){
		submit();
	}
}



