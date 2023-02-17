
var mammoth = require("mammoth");
var path = require("path");

async function fieldExtract(filePath,callback){

    filePath = path.join(__dirname,"../"+filePath);
    
    mammoth.extractRawText({path: filePath})
    .then(function(result){
        var text = result.value; // The raw text

        //this prints all the data of docx file
        //console.log(text);
        console.log('------------------------------');
        var textLines = text.split ("\n");

        var listOfText = [];
        for (var i = 0; i < textLines.length; i++) {
            //this saves data in brackets into a list
            
            var testString = textLines[i];
            var reBrackets = /\((.*?)\)/g;
            var found;
            
            while(found = reBrackets.exec(testString)) {
                if(listOfText.indexOf(found[1])==-1){

                    listOfText.push(found[1]);
                    // console.log(found[1]);
                }
            };
        }
        dict=[];
        data=listOfText;
        data.forEach(i=> {
            
            dict.push({"label":`${i}-type`})
            dict.push({"label":`${i}-length`})
            
        })
        
        // console.log(dict)
       callback(dict)
               
    })
    .done();
}
// fieldExtract("Painting-COntract.docx");

module.exports=fieldExtract