var http=require("http"),urls=['shapeshed.com','www.bbc.com','edition.cnn.com'];

function fetchPage(url){
	var start=new Date();
	http.get({host:url},function(res){
		console.log("Got response from: "+url);
		console.log("Request took:",new Date()-start,"ms");
	});
}

for(var i=0,len=urls.length;i<len;i++){
	fetchPage(urls[i]);
}