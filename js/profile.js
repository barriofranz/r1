/**
 * Created by stefbucag on 10/9/2015.
 */
$(document).ready(function() {

    $("#addRow").val(0);
    setTimeout(function() {
        $("#search").trigger('click');
    },10);

    $("#addrow").on("click",function(e) {
        console.log("addrow");

        $("#action").val("addrow");
        $('#addRow').val(parseInt($('#addRow').val())+1);

        //get form id
        var form = ($(this).closest('form').attr('id')).replace('Search','');
        console.log(form);

        var data = getTableData(form+'_tbl');
        $.ajax({
            type: "POST",
            url: "ajaxfunctions/"+form+"_function.php",
            data: data,
            cache: false,
            success: function(r)
            {
                $('#'+form+'_tbl').prepend(r);
                $('#'+form+'_tbl input:text:first').focus();
            }
        });

        $('.positive').numeric({
            negative:false
        });
    });

    $("#cancelrow").on("click",function(e) {
        $('.newrow').remove();
    });

    $("#saveall").on("click",function(e) {
        $("#action").val("saveall");

        //get form id
        var form = ($(this).closest('form').attr('id')).replace('Search','');
        console.log(form);

        if($('.newrow').length>0){
            $('.newinp').prop('disabled',true);

            var data = getTableData(form+'_tbl');
            //wait here
            waiting(form+'_tbl', 11);

            $.ajax({
                type: "POST",
                url: "ajaxfunctions/"+form+"_function.php",
                data: data,
                cache: false,
                success: function(r)
                {
                    $.growl({
                        title: "Success",
                        style: "notice",
                        message: "New record(s) successfully added."
                    });

                    $("#search").click();
                }
            });
        }else{
            $.growl({
                title: "Notice",
                style: "primary",
                message: "No data to be saved."
            });
        }
    });

    $("#search").on("click",function(e) {
        console.log("search");
        $("#action").val("search");


        //get form id
        var form = ($(this).closest('form').attr('id')).replace('Search','');
        console.log(form);

        dtable.destroy();
        waiting(form+'_tbl', 11);
        var data = getDataID(form+'Search');
        var p=1;

        $.ajax({
            type: "POST",
            url: "ajaxfunctions/"+form+"_function.php",
            data: data,
            cache: false,
            success: function(r)
            {
                $('#'+form+'_tbl').children('tbody').html(r);
                $('#'+form+'_tbl_pagination').children('tbody').html(r);

                var qcount = $('#'+form+' tr').size();
                var pagecount = Math.ceil((qcount/25));
                var lihtml = '';

                lihtml = lihtml + '<a class="btn btn-btn2" onclick="gotopage(1,\''+pagecount+'\')"><i class="fa fa-angle-double-left"></i></a><a class="btn btn-btn2" onclick="gotopage('+(p-1)+',\''+pagecount+'\')"><i class="fa fa-angle-left"></i></a>\Page <input type="text" style="width:40px;" value="'+p+'" class="wholenumpositive" onkeyup="enterpage(event,this,\''+pagecount+'\')"> of '+pagecount+'\
				<a onclick="gotopage('+(p+1)+',\''+pagecount+'\')" class="btn btn-btn2"><i class="fa fa-angle-right"></i></a><a class="btn btn-btn2" onclick="gotopage(\''+pagecount+'\',\''+pagecount+'\')"><i class="fa fa-angle-double-right" ></i></a>';


                $('#'+form+'_tbl_pagination').html(lihtml);
                $('#'+form+'_tbl_pagination_info').text('Displaying results of 1 of '+qcount);

                $('.wholenumpositive').numeric({
                    negative:false,
                    decimal:false
                });
                //dtable.fnDestroy();

                dtable = $('#'+form+'_tbl').DataTable({
                    "bLengthChange": false,
                    "bFilter": false,
                    "paging": false,
                    "bInfo": false,
                    "scrollY": (winheight-280)+"px"
                });
            }
        });
    });


});