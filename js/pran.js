$(document).ready(function() {
	$('.wholenum').numeric({
		decimal:false
	});	
	$('.positive').numeric({
		negative:false
	});	
	$('.wholenumpositive').numeric({
		negative:false,
		decimal:false
	});	
	
	
	$('.datepicker').datepicker({
		format: 'yyyy-mm-dd',
	});
	
	


	
	
	

	$(".viewpolist").on("click",function(e) {
		
		modalshow();
		
		var a = $(this).attr('id');
		$.get('ajaxfunctions/po_view_table.php?a='+a, function(data) {
			$("#polistdet").html(data);
			modalhide();
		});
	});
	
	
	
	$(".skudetailsanchor").on("click",function(e) {
		var sku = $(this).attr('id');
		window.location="sales_po_list.php?sku="+sku;
	});
	
	$(".settlementdetailsbyid").on("click",function(e) {
		var settlementid = $(this).attr('id');
		window.open("settlement_details_view.php?a="+settlementid,"_blank","toolbar=0,titlebar=0,height=600,width=1000");
	});
	
	

	

	$('.historytooltip').tooltip({
		title:'Click here to see history'
	});
	
	$('.detailstooltip').tooltip({
		title:'Click here to see Details',
		placement:'top'
	});
	
	
	$('.tooltipztop').tooltip({
		placement:'top'
	});
	
	
	$(".popoverz").popover();
	
	

	
	 // DataTable

	
	
	
	
	
	


	
	
	
	// $('#suppliertable').DataTable({
		// "bLengthChange": false,
		// "bFilter": false
    // });
	
	
	
	// $(function () {
  
		// $('table').each(function () {
			// if($(this).find('thead').length > 0 && $(this).find('th').length > 0) {
				
				
			// }
		// });
	// });
	
	$(".colorpickerhex").colorpicker({
      // format: "hex"
    });
	
	
	
    $(".date-range").daterangepicker({
      format: "yyyy/MM/dd",
      separator: " to ",
      startDate: Date.today().add({
        days: 0
      }),
      endDate: Date.today(),
      minDate: "2012/01/01",
      maxDate: (Date.today().getMonth()+24)
    });
	
	
	
	Ladda.bind('.ladda-button');	
	$('.select2').select2();
	
	$('.datatable').dataTable();
	modalhide();
	
	$('.custom_chk').checkbox({
		buttonStyle: 'btn-danger',
		buttonStyleChecked: 'btn-success',
		checkedClass: 'fa-check-square-o',
		uncheckedClass: 'fa-square-o'
	});
	
});



function modalhide()
{$("#pagemodal").attr('style','display:none;');}
		
function modalshow()
{$("#pagemodal").attr('style','display:inline;');}	

function post(path, params, method) {
    method = method  || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}



var decodeHtmlEntity = function(str) {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
};
 
var encodeHtmlEntity = function(str) {
  var buf = [];
  for (var i=str.length-1;i>=0;i--) {
    buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
  }
  return buf.join('');
};



function htmlEncode(value){
  //create a in-memory div, set it's inner text(which jQuery automatically encodes)
  //then grab the encoded contents back out.  The div never exists on the page.
  return $('<div/>').text(value).html();
}

function htmlDecode(value){
  return $('<div/>').html(value).text();
}



function txtboxrequired(v,txtid){
	
	if(v==''){
		$(txtid).css('border-color','red');
	}else{
		$(txtid).css('border-color','');
	}
	
}


function txtboxrequirednot0(v,txtid){
	
	if(v==0){
		$(txtid).css('border-color','red');
	}else{
		$(txtid).css('border-color','');
	}
	
}

function divrequired(v,div){
	// console.log(v);
	if((v=='')||(v==undefined)){
		$(div).css('border','red solid 1px');
		$(div).css('border-radius','5px');
		
		
	}else{
		
		$(div).css('border','');
		$(div).css('border-radius','');
	}
	
}


function select2required(v,id){
	if(v==''){
		$(id).next().children().children().css('border-color','red');
	}else{
		$(id).next().children().children().css('border-color','');
	}
	
}
function select2requirednot0(v,id){
	if(v==0){
		$(id).next().children().children().css('border-color','red');
	}else{
		$(id).next().children().children().css('border-color','');
	}
	
}

function anchorrequired(v,id,nullval){
	if(v==nullval){
		$(id).css('border-color','red');
	}else{
		$(id).css('border-color','');
	}
}





function unckeckinput(inputid){
	$(inputid).removeAttr('checked');
}

function txboxclear(txtid){
	$(txtid).val('');
}

function txtareaclear(txtid){
	$(txtid).html('');
}

function selectclear(id){
	$(id).trigger('change').val('');
}


function disableanchor(id,state){
	$(id).attr('disabled', state);
	
}

function disabletxtbox(id,state){
	$(id).attr('disabled', state);
}




function get_sku_country_2ch(sku){
	
	var skumolpos = sku.indexOf('MOL');
	
	var country2char = '';
	var skucountry = sku.substring(skumolpos-4,3);
	switch (skucountry){
		case 'FRA':country2char='fr';break;
		case 'GER':country2char='de';break;
		case 'SPA':country2char='es';break;
		case 'ITA':country2char='it';break;
		case 'USA':country2char='us';break;
		case 'CAN':country2char='ca';break;
		case 'xUK':country2char='uk';break;
		default :country2char='uk';break;
	}
	
	return country2char;
	
}


function get_country_curr(c){
	
	var curr = '';
	switch (c){
		case 'uk':curr='GBP';break;
		case 'fr':curr='EUR';break;
		case 'de':curr='EUR';break;
		case 'es':curr='EUR';break;
		case 'it':curr='EUR';break;
		case 'us':curr='USD';break;
		case 'ca':curr='CAD';break;
	
		default :curr='GBP';break;
	}
	
	return curr;
	
}


function get_country_curr_symb(c){
	
	var curr = '';
	switch (c){
		case 'uk':curr='&pound;';break;
		case 'fr':curr='&euro;';break;
		case 'de':curr='&euro;';break;
		case 'es':curr='&euro;';break;
		case 'it':curr='&euro;';break;
		case 'us':curr='$';break;
		case 'ca':curr='c$';break;
	
		default :curr='GBP';break;
	}
	
	return curr;
	
}



function continuationelipse(text,thisisthis){
	
	$(thisisthis).after(text);
	$(thisisthis).remove();
	
	return false;
}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function wordwrap( str, width, brk, cut ) {
 
    brk = brk || 'n';
    width = width || 75;
    cut = cut || false;
 
    if (!str) { return str; }
 
    var regex = '.{1,' +width+ '}(\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\S+?(\s|$)');
 
    return str.match( RegExp(regex, 'g') ).join( brk );
 
}


// function htmlEntities(str) {
    // return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// }


function htmlEntities(string, quote_style, charset, double_encode) {
  //  discuss at: http://phpjs.org/functions/htmlentities/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //  revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //  revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: nobbler
  // improved by: Jack
  // improved by: Rafał Kukawski (http://blog.kukawski.pl)
  // improved by: Dj (http://phpjs.org/functions/htmlentities:425#comment_134018)
  // bugfixed by: Onno Marsman
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //    input by: Ratheous
  //  depends on: get_html_translation_table
  //   example 1: htmlentities('Kevin & van Zonneveld');
  //   returns 1: 'Kevin &amp; van Zonneveld'
  //   example 2: htmlentities("foo'bar","ENT_QUOTES");
  //   returns 2: 'foo&#039;bar'

  var hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style),
    symbol = '';
  string = string == null ? '' : string + '';

  if (!hash_map) {
    return false;
  }

  if (quote_style && quote_style === 'ENT_QUOTES') {
    hash_map["'"] = '&#039;';
  }

  if ( !! double_encode || double_encode == null) {
    for (symbol in hash_map) {
      if (hash_map.hasOwnProperty(symbol)) {
        string = string.split(symbol)
          .join(hash_map[symbol]);
      }
    }
  } else {
    string = string.replace(/([\s\S]*?)(&(?:#\d+|#x[\da-f]+|[a-zA-Z][\da-z]*);|$)/g, function(ignore, text, entity) {
      for (symbol in hash_map) {
        if (hash_map.hasOwnProperty(symbol)) {
          text = text.split(symbol)
            .join(hash_map[symbol]);
        }
      }

      return text + entity;
    });
  }

  return string;
}



function get_html_translation_table(table, quote_style) {
  //  discuss at: http://phpjs.org/functions/get_html_translation_table/
  // original by: Philip Peterson
  //  revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: noname
  // bugfixed by: Alex
  // bugfixed by: Marco
  // bugfixed by: madipta
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: T.Wild
  // improved by: KELAN
  // improved by: Brett Zamir (http://brett-zamir.me)
  //    input by: Frank Forte
  //    input by: Ratheous
  //        note: It has been decided that we're not going to add global
  //        note: dependencies to php.js, meaning the constants are not
  //        note: real constants, but strings instead. Integers are also supported if someone
  //        note: chooses to create the constants themselves.
  //   example 1: get_html_translation_table('HTML_SPECIALCHARS');
  //   returns 1: {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}

  var entities = {},
    hash_map = {},
    decimal;
  var constMappingTable = {},
    constMappingQuoteStyle = {};
  var useTable = {},
    useQuoteStyle = {};

  // Translate arguments
  constMappingTable[0] = 'HTML_SPECIALCHARS';
  constMappingTable[1] = 'HTML_ENTITIES';
  constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
  constMappingQuoteStyle[2] = 'ENT_COMPAT';
  constMappingQuoteStyle[3] = 'ENT_QUOTES';

  useTable = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
  useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() :
    'ENT_COMPAT';

  if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
    throw new Error('Table: ' + useTable + ' not supported');
    // return false;
  }

  entities['38'] = '&amp;';
  if (useTable === 'HTML_ENTITIES') {
    entities['160'] = '&nbsp;';
    entities['161'] = '&iexcl;';
    entities['162'] = '&cent;';
    entities['163'] = '&pound;';
    entities['164'] = '&curren;';
    entities['165'] = '&yen;';
    entities['166'] = '&brvbar;';
    entities['167'] = '&sect;';
    entities['168'] = '&uml;';
    entities['169'] = '&copy;';
    entities['170'] = '&ordf;';
    entities['171'] = '&laquo;';
    entities['172'] = '&not;';
    entities['173'] = '&shy;';
    entities['174'] = '&reg;';
    entities['175'] = '&macr;';
    entities['176'] = '&deg;';
    entities['177'] = '&plusmn;';
    entities['178'] = '&sup2;';
    entities['179'] = '&sup3;';
    entities['180'] = '&acute;';
    entities['181'] = '&micro;';
    entities['182'] = '&para;';
    entities['183'] = '&middot;';
    entities['184'] = '&cedil;';
    entities['185'] = '&sup1;';
    entities['186'] = '&ordm;';
    entities['187'] = '&raquo;';
    entities['188'] = '&frac14;';
    entities['189'] = '&frac12;';
    entities['190'] = '&frac34;';
    entities['191'] = '&iquest;';
    entities['192'] = '&Agrave;';
    entities['193'] = '&Aacute;';
    entities['194'] = '&Acirc;';
    entities['195'] = '&Atilde;';
    entities['196'] = '&Auml;';
    entities['197'] = '&Aring;';
    entities['198'] = '&AElig;';
    entities['199'] = '&Ccedil;';
    entities['200'] = '&Egrave;';
    entities['201'] = '&Eacute;';
    entities['202'] = '&Ecirc;';
    entities['203'] = '&Euml;';
    entities['204'] = '&Igrave;';
    entities['205'] = '&Iacute;';
    entities['206'] = '&Icirc;';
    entities['207'] = '&Iuml;';
    entities['208'] = '&ETH;';
    entities['209'] = '&Ntilde;';
    entities['210'] = '&Ograve;';
    entities['211'] = '&Oacute;';
    entities['212'] = '&Ocirc;';
    entities['213'] = '&Otilde;';
    entities['214'] = '&Ouml;';
    entities['215'] = '&times;';
    entities['216'] = '&Oslash;';
    entities['217'] = '&Ugrave;';
    entities['218'] = '&Uacute;';
    entities['219'] = '&Ucirc;';
    entities['220'] = '&Uuml;';
    entities['221'] = '&Yacute;';
    entities['222'] = '&THORN;';
    entities['223'] = '&szlig;';
    entities['224'] = '&agrave;';
    entities['225'] = '&aacute;';
    entities['226'] = '&acirc;';
    entities['227'] = '&atilde;';
    entities['228'] = '&auml;';
    entities['229'] = '&aring;';
    entities['230'] = '&aelig;';
    entities['231'] = '&ccedil;';
    entities['232'] = '&egrave;';
    entities['233'] = '&eacute;';
    entities['234'] = '&ecirc;';
    entities['235'] = '&euml;';
    entities['236'] = '&igrave;';
    entities['237'] = '&iacute;';
    entities['238'] = '&icirc;';
    entities['239'] = '&iuml;';
    entities['240'] = '&eth;';
    entities['241'] = '&ntilde;';
    entities['242'] = '&ograve;';
    entities['243'] = '&oacute;';
    entities['244'] = '&ocirc;';
    entities['245'] = '&otilde;';
    entities['246'] = '&ouml;';
    entities['247'] = '&divide;';
    entities['248'] = '&oslash;';
    entities['249'] = '&ugrave;';
    entities['250'] = '&uacute;';
    entities['251'] = '&ucirc;';
    entities['252'] = '&uuml;';
    entities['253'] = '&yacute;';
    entities['254'] = '&thorn;';
    entities['255'] = '&yuml;';
  }

  if (useQuoteStyle !== 'ENT_NOQUOTES') {
    entities['34'] = '&quot;';
  }
  if (useQuoteStyle === 'ENT_QUOTES') {
    entities['39'] = '&#39;';
  }
  entities['60'] = '&lt;';
  entities['62'] = '&gt;';

  // ascii decimals to real symbols
  for (decimal in entities) {
    if (entities.hasOwnProperty(decimal)) {
      hash_map[String.fromCharCode(decimal)] = entities[decimal];
    }
  }

  return hash_map;
}

function get_current_date(){
	var d = new Date();

	var yy = d.getFullYear();
	var mm = d.getMonth()+1;
	var dd = d.getDate();

	var str = "" + mm;
	var pad = "00";
	
	mm = pad.substring(0, pad.length - str.length) + str;
	str = "" + dd;
	dd = pad.substring(0, pad.length - str.length) + str;
	
		
	return date =yy+'/'+mm+'/'+dd;

}




function days_between(date1, date2) {

	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var firstDate = new Date(date1);
	var secondDate = new Date(date2);

	var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	return diffDays;
}


function loading_table(identi, columnWidth, loadingimgwidth){
    $(identi).children('tbody').html('<td colspan="'+columnWidth+'" style="text-align: center"><img src="img/loading.gif" class="" style="width:'+loadingimgwidth+'px"></td>');
}



function showmorecontent(thisthis){
	var fullcontent = $(thisthis).parent().attr('fullcontent');
	$(thisthis).parent().html(htmlEntities(fullcontent)+' <a style="cursor:pointer" class="fdefaultlink" onclick="showlesscontent(this)">(show less)</a>');
	
}

function showlesscontent(thisthis){
	var fullcontent = $(thisthis).parent().attr('fullcontent');
	$(thisthis).parent().html(htmlEntities(fullcontent.substring(0,50))+' <a style="cursor:pointer" class="fdefaultlink" onclick="showmorecontent(this)">(show more)</a>');
	
}	


function getquickgrowlnorif(n){
	switch (n){
		case '0':
			$.growl({
				title: "Warning",
				style: "warning",
				message: "An error occurred. Data not saved"
			});
			break;
		
		case '-1':
			$.growl({
				title: "Warning",
				style: "warning",
				message: "Email already exist."
			});
			break;
		case '-2':
			$.growl({
				title: "Warning",
				style: "warning",
				message: "Invalid email."
			});
			break;
		default:
			$.growl({
				title: "Success",
				style: "notice",
				message: ""
			});
			break;
	}
}
