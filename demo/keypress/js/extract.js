

function ExtractData(){
    
    var text = $("#nlpText").val();
    if($.trim(text) !="")
    {
        var nlpJson={}
        var nlpObj = nlp(text.toLowerCase()).clauses();
        nlpJson["Medications"]=getNlpData("Medication",nlpObj);
        nlpJson["Actions"]=getNlpData("Action",nlpObj);
        nlpJson["Allergies"]=getNlpData("Allergy",nlpObj);
        nlpJson["Race"]=getNlpData("Race",nlpObj);
        nlpJson["Social History"]=getNlpData("Social",nlpObj);
        nlpJson["Enthnicity"]=getNlpData("Ethnicity",nlpObj);
        nlpJson["Vitals"]=getNlpData("Vitals",nlpObj);        
        $('#json-renderer').jsonViewer(nlpJson);
    }

}

function getNlpData(tag,nlpObj){
    var List =[]
        jQuery.each( nlpObj.if('#'+tag).out('array'), function(index,value){  
            var Obj={}
            Obj["Clause"] = value;
            switch (tag) { 
	            case 'Medication': 
		            Obj["Terms"]=nlp(value).medication().out('array');
		            break;
                case 'Action': 
		            Obj["Terms"]=nlp(value).action().out('array');
		            break;
                case 'Allergy': 
		            Obj["Terms"]=nlp(value).allergy().out('array');
		            break;
                case 'Race': 
		            Obj["Terms"]=nlp(value).race().out('array');
		            break;
                case 'Social': 
		            Obj["Terms"]=nlp(value).social().out('array');
		            break;
                case 'Ethnicity': 
		            Obj["Terms"]=nlp(value).ethnicity().out('array');
		            break;
                case 'Vitals': 
		            Obj["Terms"]=nlp(value).vitals().out('array');
		            break;               
                default:
                    break;
            }
           
            List.push(Obj);             
        });
    return List;
}