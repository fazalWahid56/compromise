
$(document).ready(function () {
    loadLabels();
});


function loadLabels() {
    
    var url = "http://172.16.4.132:8888/labels/";
   
    $.ajax({
        type: "GET",
        contentType: 'application/json;charset=UTF-8',
        url: url,
        success: function (data) {
        
            $("#ddlLabels").find("option:gt(0)").remove();
            $("#sidebar-wrapper ul.sidebar-nav").find("li:gt(0)").remove();
            result = jQuery.parseJSON(data)
            for (var i = 0; i < result.length; i++) {             
                var labelID = "";
                var labelName = "";
                var displayHtml = "";
                var DdlHtml = "";

                $("#ddlLabels options").append(DdlHtml);

                labelID = result[i]._id.$oid;
                labelName = result[i].labelName;

                var displayHtml = "<li><span id=" + labelID + ">" + labelName + "</span></li>";
                $("#sidebar-wrapper ul.sidebar-nav").append(displayHtml);

                var DdlHtml = "<option value=" + labelID + ">" + labelName + "</option>";
                $("#ddlLabels").append(DdlHtml);

            }
            
        },
        error: function () {
            alert("error getting labels");
        }
    });
}


function feedSentece() {

    debugger;
    var url = "http://172.16.4.132:8888/sentences/";
    var InsertingSentence = $("#txtSentence").val();
    var labelid =  $("#ddlLabels option:selected").val();
    var labelname= $("#ddlLabels option:selected").text();
    //var data = { 'label': "'"+ label + "'"}

    if ($.trim(InsertingSentence) != "" && labelid != 0) {


        $.ajax({
            type: "POST",
            contentType: 'application/json;charset=UTF-8',
            url: url,
            data: JSON.stringify({ sentence: InsertingSentence, labelID: labelid, labelName: labelname }),
            success: function (data) {
                alert(" added: " + data);
                $("#txtSentence").val("");
                $("#ddlLabels").val("0")
            },
            error: function () {
                alert("error adding sentence");
            }
        });
    }
}

function addLabel() {
    debugger;
    var url = "http://172.16.4.132:8888/labels/";
    var Insertinglabel = $("#txtLabel").val();
    //var data = { 'label': "'"+ label + "'"}
    $.ajax({
        type: "POST",
        contentType: 'application/json;charset=UTF-8',
        url: url,
        data: JSON.stringify({ label: Insertinglabel }),
        success: function (data) {
            alert(" added: "+data);
            $("#txtLabel").val("");
            loadLabels();
        },
        error: function(){
            alert("error adding label");
         }
    });

    
}