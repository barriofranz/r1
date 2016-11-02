<?php
/*
For LS1-295
First Created by Franz
Last modified 2016-04-20
Last modified by Franz	
*/
define("PAGE_ROOT_PATH", basename(__DIR__) );

?>
<!DOCTYPE html>
<html>
	<head>
	    <meta http-equiv="content-type" content="text/html; charset=utf-8">
	    
	    <title>
			Trendle.io
		</title>
	    
	    <?php 
			$this->load->view('eletd/' . PAGE_ROOT_PATH . '/headers/main.header.php');
		?>	   
	</head>
	
	
	<body>
	<div class="row">
	<div class="container">
		<div class="page-header">
			<h1>Example Page Header</h1>
		</div>
		
		<div class="col-lg-12">
		<div class="elebtn-div">
			
		</div>
		</div>
	
		<div class="col-lg-12">
		<div class=" selected-ele-div">
			
		</div>
		</div>
	</div>
	</div>

	
	
<script>
var elelist = ['l','d','w','f','n','e'];
var selected_ele_ctr = 0;
var ele_ctr=new Array();


elelist.forEach(function(item, index){

	ele_ctr[item]=0;
});



$(document).ready(function() {
	
	elelist.forEach(function(item, index){

		var itemu=item.toUpperCase();
		var apphtml='<button class="btn btn-'+item+' elebtn">'+itemu+'</button>\
		';
	
		$('.elebtn-div').append(apphtml);
		
	});

	

	$('.elebtn').click( function(){
		if((selected_ele_ctr>=0)&&(selected_ele_ctr<=10)){
			var thistxt = $(this).text();
			thistxtl=thistxt.toLowerCase();
			var apphtml='<button class="btn btn-'+thistxtl+' selected-ele">'+thistxt+'</button>\
			';
			
			
			console.log(ele_ctr[thistxtl]);
			
			
			if(!(ele_ctr[thistxtl]>2)){
				// console.log('d');
				ele_ctr[thistxtl]++;
				selected_ele_ctr++;
				$('.selected-ele-div').append(apphtml);
			}
			
		}
	});
	


});
</script>

	</body>
</html>