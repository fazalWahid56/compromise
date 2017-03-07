

function ExtractData()
{
    
    var text = $("#nlpText").val();
    if($.trim(text) !="")
    {
        var nlpJson={}
        var nlpObj = nlp(text);
        debugger;
        nlpJson["Medications"]=nlpObj.medications().out('array');
        nlpJson["Actions"]=nlpObj.actions().out("Array")

        $('#json-renderer').jsonViewer(nlpJson);
    }

}