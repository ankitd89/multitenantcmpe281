$( document ).ready(function() {
    
    
    
    
/*	for(var i=0;i<5;i++)
	{
		var data='<div class="col-lg-4">'+
                	'<div class="box">'+
                  	'<header>'+
                    	'<h5>Project '+i+'</h5>'+
                    	'<div class="toolbar">'+
                      '<button class="btn btn-xs btn-primary" onclick="viewproject('+i+');">View</button>'+
                    	'</div>'+
                  	'</header>'+
                  	'<div class="body">'+
                    	'<pre class="prettyprint linenums">This project is about some thing about project '+i+'</pre>'+
                  	'</div>'+
                	'</div>'+
              	'</div>'
		$("#displayProjects").append(data);	
	}*/
});

function newProjectSubmit(){
 var data=$("#newProject").serializeArray();
 var windowUrl = window.location.href;
	var query = windowUrl.split("?");
	var email_id ={
	 name:"email_id",
 value : query[1]
};
data.push(email_id);

 var o = {};
  // o["email_id"].push(query[1]);
  // var a = this.serializeArray();
   $.each(data, function() {
       if (o[this.name] !== undefined) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   //return o;
     
   alert(JSON.stringify(o));
   $.ajax({
    	    type: "POST",
    	    url: "/createTaskKanban",
    	    dataType: 'json',
    	    data : o,
    	    async: false,
    	    crossDomain : true,
    	    success: function(data){
			       console.log("User added successfully");
			       alert("Task Added");
			      
    	    },
    	     error: function(response,text,err){
    	    	 alert(err);
    	 	 }
    	   });
     
       
       
	}
function viewproject(id){
	alert("you clicked on project="+id);
	}