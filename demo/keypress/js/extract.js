

function ExtractData(){
    
    var text = $("#nlpText").val();
    if($.trim(text) !="")
    {
        var nlpJson={}
        var nlpObj = nlp(text.toLowerCase()).clauses();
        nlpJson["Medications"]=getNlpData("Medications",nlpObj);
        nlpJson["Actions"]=getNlpData("Actions",nlpObj);
        nlpJson["Allergies"]=getNlpData("Allergies",nlpObj);
        nlpJson["Race"]=getNlpData("Races",nlpObj);
        nlpJson["Social History"]=getNlpData("Social_histories",nlpObj);
        nlpJson["Enthnicity"]=getNlpData("Ethnicities",nlpObj);
        nlpJson["Vitals"]=getNlpData("Vital_signs",nlpObj);        
        $('#json-renderer').jsonViewer(nlpJson);
    }

}

function getNlpData(tag,nlpObj){
    var List =[]
        jQuery.each( nlpObj.if('#'+tag).out('array'), function(index,value){  
            var Obj={}
            Obj["Clause"] = value;
            switch (tag) { 
	            case 'Medications': 
		            Obj["Terms"]=nlp(value).medications().out('array');
		            break;
                case 'Actions': 
		            Obj["Terms"]=nlp(value).actions().out('array');
		            break;
                case 'Allergies': 
		            Obj["Terms"]=nlp(value).allergies().out('array');
		            break;
                case 'Races': 
		            Obj["Terms"]=nlp(value).races().out('array');
		            break;
                case 'Social_histories': 
		            Obj["Terms"]=nlp(value).social_histories().out('array');
		            break;
                case 'Ethnicities': 
		            Obj["Terms"]=nlp(value).ethnicities().out('array');
		            break;
                case 'Vitals': 
		            Obj["Terms"]=nlp(value).vital_signs().out('array');
		            break;               
                default:
                    break;
            }
           
            List.push(Obj);             
        });
    return List;
}