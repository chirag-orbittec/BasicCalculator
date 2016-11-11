/**
 * New node file
 */
var ejs = require("ejs"); 

function homePage(req,res)
{
	ejs.renderFile('./views/home.ejs',{data:"0",nan:false},
			function(err, result) {  
		// render on success    
		if (!err) {             
			res.end(result); 
			}     // render or error   
		else {            
			res.end('An error occurred');    
			console.log(err); 
			}    
		});

}

function calculate(req,res)
{
	var resultGrid=req.param("resultGrid");
	var notANumber=false;
	if(isNaN(req.param("inputGrid")))
	{
		notANumber=true;
	}
	
	var action = req.param("evaluate");
if(!notANumber)
	{
	if(action=="plus")
	{
		var resultFinal = resultGrid;
		resultGrid =  (resultFinal*1)+(req.param("inputGrid")*1);
	}
	else if(action=="minus")
	{
		resultGrid-=req.param("inputGrid");
	}
	else if(action=="multiply")
	{
		resultGrid*=req.param("inputGrid");
	}
	else if(action=="divide")
	{
		resultGrid/=req.param("inputGrid");
	}
	}
	
	ejs.renderFile('./views/home.ejs',{data:resultGrid,nan:notANumber},
			function(err, result) {  
		// render on success    
		if (!err) {             
			res.end(result); 
			}     // render or error   
		else {            
			res.end('An error occurred');    
			console.log(err); 
			}    
		});
}

exports.homePage=homePage;
exports.calculate=calculate;