<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Eletd extends CI_Controller {


	public function __construct(){
		parent::__construct();
		
		$this->load->model('Elements_model');
        
	}
	
	public function index()
	{
		
		$f0=array('code1');
		$c0=array();
		$o0=array();
		
		$q0 = $this->Elements_model->get_rec_list($f0,$c0,$o0);
		$d0 = $q0->result('array');
		
		
		$var1['d0'] = $d0;
		
		$this->load->view('eletd/tower_combinations/page',$var1);
	}
	
	public function towers_datasource()
	{
	
	}
}
