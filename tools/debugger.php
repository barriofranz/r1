<?php
require_once(dirname(__FILE__).DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'configs/debug.config.php');

if(DEBUG_MODE)
{
	$objDebugger = new Debugger();
	
}

final class Debugger
{
	private $objDebugger = null;
	
	public function __construct()
	{
		
		switch(USE_DEBUGGER)
		{
			case "FIRE-PHP":
				$use_debugger = 'tools/firephp-test/fb.php';
				require_once(dirname(__FILE__).DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.$use_debugger);
				ob_start();
				$this->objDebugger = FirePHP::getInstance(true);
				
				break;
				
			
			case "PHP-CONSOLE":
				$use_debugger = 'tools/php-console/src/PhpConsole/__autoload.php';
				require_once(dirname(__FILE__).DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.$use_debugger);
				
				$this->objDebugger = PhpConsole\Handler::getInstance();
				$this->objDebugger->start();
				
				break;
		}
	}
	
	public function dump($object_to_dump, $console_label= "dump")
	{
		switch(USE_DEBUGGER)
		{
			case "FIRE-PHP":
				
				$this->objDebugger->debug($object_to_dump);
				
				break;
				
				
			case "PHP-CONSOLE":
				
				$this->objDebugger->debug($object_to_dump,$console_label);
				
				break;
		}
	}
	
	
}
?>