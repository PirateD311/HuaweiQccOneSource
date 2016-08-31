const xml2js = require("xml2js");
const fs = require("fs");

fs.readFile("demoWSDL.wsdl","UTF-8",function(err,data){
	if(!err){
		console.log("Read wsdl success.");
		//console.log(data);
		xml2js.parseString(data,function(err,result){
			console.log(result);
		});
	}else{
		console.log(err);
	}
});
