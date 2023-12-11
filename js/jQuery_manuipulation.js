$(function(){
    $("$button").click(function(){
        $("#divStatus").html("<h1 id='status'>status</h1>");
        $("#status").text("Set status");
        $("#status").css("textAlign","center");
        $("#status").text($(this).attr("Set status"));
    });

});