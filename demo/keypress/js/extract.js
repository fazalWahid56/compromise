

function ExtractData()
{
    
    var text = $("#nlpText").val();
    if($.trim(text) !="")
    {
        var nlpJson={}
        var nlpObj = nlp(text);
        debugger;
        nlpJson["Medications"]=nlpObj.medications().out('array');
        nlpJson["Actions"]=nlpObj.actions().out("array");

        nlpJson["Allergies"]=nlpObj.allergies().out("array");
        nlpJson["Race"]=nlpObj.races().out("array");
        nlpJson["Social History"]=nlpObj.social_histories().out("array");
        nlpJson["Enthnicity"]=nlpObj.ethnicities().out("array");
        nlpJson["Vitals"]=nlpObj.vital_signs().out("array");

        $('#json-renderer').jsonViewer(nlpJson);
    }

}