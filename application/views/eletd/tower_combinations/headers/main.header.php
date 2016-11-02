<!-- !! REQUIRED !! -->
<!----------------------------------------------------------------------------------------------------------------------------------------->

<!-- LOAD jQuery and DataTable -->
<link rel="stylesheet" type="text/css" href="<?php echo BASE_PATH; ?>css/bootstrap.min.css"/>
<script type="text/javascript" src="<?php echo BASE_PATH; ?>js/jquery-1.11.3.min.js"></script>    
<script type="text/javascript" src="<?php echo BASE_PATH; ?>js/bootstrap.min.js"/></script>

    
<!-- DATATABLES STYLING BootStrap-->
<script type="text/javascript" src="<?php echo BASE_PATH; ?>js/jquery.dataTables.min.js"></script>

<script type="text/javascript" src="<?php echo BASE_PATH; ?>js/dataTables.bootstrap.min.js"></script>    
<link rel="stylesheet" type="text/css" href="<?php echo BASE_PATH; ?>css/dataTables.bootstrap.min.css"/>


<!-- DATATABLES EXTENSIONS -->
<script type="text/javascript" src="<?php echo BASE_PATH; ?>js/dataTables.select.min.js"></script>
<link rel="stylesheet" type="text/css" href="<?php echo BASE_PATH; ?>css/select.dataTables.min.css"/>


<!------------------------------------------------------------------------------------------------------------------------------------------------->

<!-- WIDGET CSS and JS -->

<!-- CUSTOM CSS and JS -->
<style>
<?php 
	$this->load->view('eletd/' . PAGE_ROOT_PATH .'/css/custom.css');
?>
</style>
<script type="text/javascript">
<?php 
	$this->load->view('eletd/' . PAGE_ROOT_PATH .'/js/custom.js');
?>
</script>
<link href="<?php echo BASE_PATH; ?>css/Global/global.css" media="all" rel="stylesheet" type="text/css" />

