/**
 * Created by stefbucag on 10/6/2015.
 */

function getTableData(id){
    console.log("getTableData: "+id);
    headerData = {};

    //get the hidden fields
    $("#data-table").find('input:text, input:hidden').each(function() {
        var fieldID = $(this).attr('id');
        var data = $(this).val();
        var colName = $(this).closest('td').attr('class');

        if(colName === undefined ){
            headerData[fieldID] = data;
        }else{
            var col = colName.split('_')[1];

            headerData[fieldID+"_"+col] = data;
        }

    });

    console.log("my array: ");
    console.log(headerData);

    return headerData;
}

function getDataID(id){
    headerData = {};

    headerData["action"] = $("#action").val();
    $("#"+id).find('input:text, select ').each(function() {
        var fieldID = $(this).attr('id');
        var data = $(this).val();
        headerData[fieldID] = data;
    });

    console.log(headerData);
    return headerData;
}

function editData(thisthis){
    var thisval = $(thisthis).text();
    var colindex = $(thisthis).index();
    var ispositive='';
    if((colindex==5)||
        (colindex==6)){
        ispositive='positive';
    }

    console.log('save this cell ');
    $(thisthis).html('<input style="height:100%;width:100%;" class="form-control '+ispositive+'" onblur="savethiscell(this)" type="text" value="'+thisval+'">').promise().done(function() {
        $('.positive').numeric({
            negative:false
        });
    });

    $(thisthis).children('input').focus();
}


//TODO: To be updated in OOP
function savethiscell(thisthis){
    $("#action").val("updatecol");

    var thisval = $(thisthis).val();
    var elemID = $(thisthis).parent('td').attr('id');

    var colindex = $(thisthis).parent('td').index();

    var id = $(thisthis).parent('td').siblings().eq(0).text();
    var idCol = $(thisthis).parent('td').siblings().eq(0).attr('id');

    var tableID = $(thisthis).closest('table').attr('id');
    console.log("table id: "+tableID);

    var growlp = $.growl({
        title: "Updating",
        style: "primary",
        message: 'Please wait... <img src="img/loading.gif"> ',
        duration: 0,
        close: ''
    });

    //TO DO NEEDS ADJUSTING
    var where = idCol+"="+id;
    var data = '';
    var data =  data + 'action=updatecol&'+elemID+"="+thisval+"&where="+where;
    console.log(data);

    var url =  tableID.replace('_tbl','');

    $.ajax({
        type: "POST",
        url: "ajaxfunctions/"+url+"_function.php",
        data: data,
        cache: false,
        success: function(r)
        {
            growlp.dismiss();
            growlp.$growl().remove();

            $.growl({
                title: "Success",
                style: "notice",
                message: "Existing record successfully updated."
            });
            $(thisthis).parent('td').html(thisval);

        }
    })
}

function waiting(id, columnWidth){
    $('#'+id).children('tbody').html('<td colspan="'+columnWidth+'" style="text-align: center"><img src="img/loading.gif" class="" style="width:35px"></td>');
}

function gotopage(p,pagecount){

    if((p>0) && (p<=parseInt(pagecount)))
    {
        dtable.destroy();
        $('#product_tbl').children('tbody').html('<td colspan="7" style="text-align: center"><img src="img/loading.gif" class="" style="width:35px"></td>');

        // $('#product_tbl_pagination').children('li').removeClass('active');

        var col = $('#inp1').val();
        var val = $('#inp2').val();

        var dstr = '';
        dstr = dstr + 'act=search';
        dstr = dstr + '&col='+encodeURIComponent(col);
        dstr = dstr + '&val='+encodeURIComponent(val);
        dstr = dstr + '&page='+p;


        $.ajax({
            type: "POST",
            url: "ajaxfunctions/product_function.php",
            data: dstr,
            cache: false,
            success: function(r)
            {
                $('#product_tbl').children('tbody').html(r);

                $('#product_tbl_pagination').children('tbody').html(r);

                var qcount = $('#qcount').val();
                var pagecount = Math.ceil((qcount/25));

                var lihtml = '';
                lihtml = lihtml + '<a class="btn btn-btn2" onclick="gotopage(1,\''+pagecount+'\')"><i class="fa fa-angle-double-left"></i></a><a class="btn btn-btn2" onclick="gotopage('+(p-1)+',\''+pagecount+'\')"><i class="fa fa-angle-left"></i></a>\
			Page <input type="text" style="width:40px;" value="'+p+'" class="wholenumpositive" onkeyup="enterpage(event,this,\''+pagecount+'\')"> of '+pagecount+'\
			<a onclick="gotopage('+(p+1)+',\''+pagecount+'\')" class="btn btn-btn2"><i class="fa fa-angle-right"></i></a><a class="btn btn-btn2" onclick="gotopage(\''+pagecount+'\',\''+pagecount+'\')"><i class="fa fa-angle-double-right" ></i></a>';

                $('#product_tbl_pagination').html(lihtml);

                var offset = ((p-1)*25)+1;
                $('#product_tbl_pagination_info').text('Displaying results of '+offset+' of '+qcount);
                $('.wholenumpositive').numeric({
                    negative:false,
                    decimal:false
                });


                dtable = $('#product_tbl').DataTable({
                    "bLengthChange": false,
                    "bFilter": false,
                    "paging": false,
                    "bInfo": false,
                    "scrollY": (winheight-280)+"px"
                });


            }
        });

    }else{
        $.growl({
            title: "Warning",
            style: "warning",
            message: "Invalid page."
        });

    }
}