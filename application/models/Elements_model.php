<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Elements_model extends CI_Model {
	
	
	private $eletbl = TBL_ELEMENTS;
    
	public function __construct(){
		parent::__construct();
		$this->load->database();
	}
	
	// public function get_rec_count_seller_detail_campaign_template($id=1){
		// $this->seller_db->select('count(*) as count');
		// $this->seller_db->from($this->campaignstattbl." a");
		// $this->seller_db->join($this->campaigntmpltbl." b",  "a.IDCampaignEmailTemplate=b.IDCRM_EmlTemplate", "left");
		// $this->seller_db->where('a.IDCampaignEmailTemplate',$id);
		
		// $query = $this->seller_db->get();
		// $data = 0;											
		// foreach($query->result_array() as $row ){
			// $data = $row['count'];
		// }
		// return $data;
	// }
	
	public function get_rec_list($fields='*',$cond=array(),$order=array()){
		
       
        $query = "";
		$this->db->select($fields);
		$this->db->from($this->eletbl);
		
		if(count($cond)>0){
			end($cond);
			$last=key($cond);
			reset($cond);
			$first = key($cond);
			foreach($cond as $key => $c){
				if ($key === $first){
					reset($cond);
				}
				$thiskey = key($cond);
				$this->db->where($thiskey,$c);
				next($cond);
			}
		}
		if(count($order)>0){
			$this->db->order_by($order[0],$order[1]);
		}

		
		$query = $this->db->get();
		// echo $this->db->last_query();
       
		return $query;
	}

	
	public function addRec($arr=array()){
		
		$this->db->insert($this->eletbl,$arr);
		return $this->db->insert_id();
		
	}
	
	public function updateRec($arr=array(),$w=array()){
		
		$this->db->where(key($w),$w[key($w)]);
		$this->db->update($this->eletbl,$arr);
		
	}
	
	public function delRec($arr=array()){
		
		$this->db->delete($this->eletbl, $arr);
		
	}
	
	
	public function __destruct(){
		
	
	}
	
}


