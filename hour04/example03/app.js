var http=require("http"),
	fs=require("fs");

function getResponse(url,message){
	http.get({host:url},function(res){
		console.log(message);
	}).on("error",function(){
		console.log("There was an error from "+url);
	});
}

function _readFile(filePath,encode){
	fs.readFile(filePath,encode,function(err,data){
		if(err){throw err;}
		console.log(filePath+" read!");
	});
}

getResponse("shapeshed.com","Got a response from shapeshed.com");

getResponse("www.bbc.com","Got a response from bbc.com");

_readFile("file1.txt","utf-8");

_readFile("file2.txt","utf-8");