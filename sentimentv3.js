var badwords, goodwords, filename, reader;


function main(args, kwargs) {
	var count, midsummer,wordCount,goodCount,indexCount,badCount;
	var badtext = FileHelper.readStringFromFileAtPath ( "bad_words.txt" );
	//document.getElementById('outputoffun').textContent = badtext;
	var goodtext = FileHelper.readStringFromFileAtPath ( "good_words.txt" );
	//document.getElementById('progression1').textContent = goodtext;
	goodwords = cleanup(goodtext);
	badwords = cleanup(badtext);
	
	//temp stuff

/*
	document.getElementById('outputoffun').textContent = foo1;
	document.getElementById('progression1').textContent = foo2;
	document.getElementById('progression2').textContent = foo3;
	document.getElementById('progression3').textContent = foo4;*/
	goodCount = 0;
	badCount = 0;
	count = 0;

}

function cleanup(filetxt){
	var patt = /[\s]/g;
	var hold = filetxt.split("\n");
	document.getElementById("outputoffun").innerHTML = hold;
return hold;
}

function script(arg){

} 
  

function FileHelper()
{}
{
    FileHelper.readStringFromFileAtPath = function(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }
}

