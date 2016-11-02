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
		<p></p>
		</div>
	
		<div class="col-lg-12">
		
		<div class="selected-ele-div">
			
		</div>
		<p></p>
		</div>
		
		<div class="col-lg-12">
			
			<button class="btn btn-default run">Run</button>
			<p></p>
		</div>
		
		
		<div class="col-lg-12">
		<div class="panel panel-info">
		
			<div class="panel-body">
				<table class="table table-condensed table responsive" id="towerstbl">
				<thead>
					<tr>
						<th>Tower</th>
					<tr>
				</thead>
				
				</table>
			
			
			</div>
		</div>
		</div>
	</div>
	</div>
	
<script>
<?php

$e_a=array();

foreach($d0 as $dd0){
	$e_a[]=$dd0['code1'];
}
$e = 'var elelist = ["' . implode($e_a,'","') . '"]';
echo $e;
?>


var selected_ele_ctr = 0;
var ele_ctr=new Array();
// console.log(elelist);

elelist.forEach(function(item, index){

	ele_ctr[item]=0;
});


function RefreshEventListener() {
   
 
	$('.selected-ele').off(); 

	$('.selected-ele').click( function(){
		
	// if((selected_ele_ctr>=0)&&(selected_ele_ctr<=10)){
		var item = $(this).attr('e');

		itemu=item.toUpperCase();
		
		if((ele_ctr[item]>1 )){
			// console.log('d');
			ele_ctr[item]--;
			selected_ele_ctr--;
			
			isselbtnexist = $('.selected-ele-div').find('button[e="'+item+'"]').length;
			if(isselbtnexist>0){
				$('.selected-ele-div').find('button[e="'+item+'"]').children('span').text(ele_ctr[item]);
			}else{
				var apphtml='<button class="btn btn-'+item+' selected-ele" e="'+item+'">'+itemu+'<span class="elelvl-span">'+ele_ctr[item]+'</span></button>\
				';
				$('.selected-ele-div').append(apphtml);
				
			}
		}else{
			ele_ctr[item]--;
			selected_ele_ctr--;
			$('.selected-ele-div').find('button[e="'+item+'"]').remove();
		}
		
	// }
	RefreshEventListener();
	});
	
}

$(document).ready(function() {
	
	elelist.forEach(function(item, index){

		var itemu=item.toUpperCase();
		var apphtml='<button class="btn btn-'+item+' elebtn" e="'+item+'">'+itemu+'</button>\
		';
	
		$('.elebtn-div').append(apphtml);
		
	});

	

	$('.elebtn').click( function(){
		if((selected_ele_ctr>=0)&&(selected_ele_ctr<=10)){
			var item = $(this).attr('e');
			itemu=item.toUpperCase();
			
			if(!(ele_ctr[item]>2 )){
				// console.log('d');
				ele_ctr[item]++;
				selected_ele_ctr++;
				
				
				isselbtnexist = $('.selected-ele-div').find('button[e="'+item+'"]').length;
				if(isselbtnexist>0){
					$('.selected-ele-div').find('button[e="'+item+'"]').children('span').text(ele_ctr[item]);
				}else{
					
					var apphtml='<button class="btn btn-'+item+' selected-ele" e="'+item+'">'+itemu+'<span class="elelvl-span">'+ele_ctr[item]+'</span></button>\
					';
					$('.selected-ele-div').append(apphtml);
					
				}
				
				
				
				
			}
			
		}
		RefreshEventListener();
	});
	
	
	
	
	
	
	
	$('#closeaddnewcampaignmodalbtn').click( function(){
		data_table2.clear();
		data_table2.destroy();
	});
	
	/*
	$('.run').click( function(){
		data_table2 = $('#templatelisttbl').DataTable
		(
			{
				fnRowCallback: function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
				
				if(aData.isCampaignHead==1){
					$(nRow).addClass('campaignhead');
				}
			},
			// "scrollX": true,
			// "scrollY": tblheight+"px",
			"bSort": false,
			"bPaginate" : false,			
			"lengthChange": false,
			"searching": false,
			"dom": '<"top"flp>t<"bottom"ir><"clear">',
			"bInfo" : false,
			"bFilter": false,
			"processing": true,
			"bAutoWidth": false,
			"language": {
				"processing": '<b>Loading records <img src="<?php echo $loading_gif_path; ?>"> </b> '
			},
			"serverSide": true,
			"ajax":{
				"url": "<?php echo $templisttbl_datasource; ?>",
				// 'data': {"key" : "1","sel1" : sel1,"sel2" : sel2,"page" : p,"colindex" : colindex,"order" : order},
				// 'type': "POST"
			},
			"initComplete":function( settings, json ) {
				
				
				$('#templatelisttbl tr').click( function(){
					var ptid=$(this).attr('id').split('pt');
					
				
					location.href="<?php echo BASE_PATH; ?>Campaign/NewCampaign/" + ptid[1];
				});
				
			
			}
			
		});
	});*/
	


});
</script>

	</body>
</html>