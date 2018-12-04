var loginUsrid;

//insted of DB . we can remove once we access the DB...
var userinfo={"orgID":"001","test1@inmar.com":{"UserID":"test1@inmar.com","FirstName":"Sreekanth","LastName":"K","Password":"Password1","aadhar":"123456789123","groups":["Other"]},"test2@inmar.com":{"UserID":"test2@inmar.com","FirstName":"tester","LastName":"te","Password":"Password1","aadhar":"123045698701","groups":["Other"]},"raju@inmar.com":{"UserID":"raju@inmar.com","FirstName":"Raju","LastName":"kumar","Password":"Password","aadhar":"987654321012","groups":["Other"]},"meenanadh@inmar.com":{"UserID":"meenanadh@inmar.com","FirstName":"meenanadh","LastName":"K","Password":"Srik1918!","aadhar":"256431978012","groups":["Other","G1","G2","G3","G4"]}};
var Groupinfo={"Other":{"Name":"Other","Description":"Other","Status":"","Contacts":[]},"G1":{"Name":"G1","Description":"G1","Status":"Active","Contacts":[1,2]},"G2":{"Name":"G2","Description":"G2","Status":"Active","Contacts":[4,5,6,7,8,9,10,11,12,13]},"G3":{"Name":"G3","Description":"G3","Status":"Active","Contacts":[3,14]},"G4":{"Name":"G4","Description":"G4","Status":"Active","Contacts":[]}};
var contactsinfo={"1":{"Name":"Sreekanth K","PhoneNumber":"9052349988","GroupID":"G1","Email":"meenanadh@gmail.com","Status":"Active"},"2":{"Name":"test","PhoneNumber":"1234567890","GroupID":"G1","Email":"test@gmail.com","Status":"Active"},"3":{"Name":"test2","PhoneNumber":"102345698710","GroupID":"G3","Email":"test2@gmail.com","Status":"Active"},"4":{"Name":"abc","PhoneNumber":"9023654178","GroupID":"G2","Email":"abc@gmail.com","Status":"Active"},"5":{"Name":"ramu","PhoneNumber":"9658741230","GroupID":"G2","Email":"ramu@inamr.com","Status":"Active"},"6":{"Name":"pavan","PhoneNumber":"3214569870","GroupID":"G2","Email":"pavan@gmail.com","Status":"Active"},"7":{"Name":"Ragu","PhoneNumber":"0213654789","GroupID":"G2","Email":"ragu@gmail.com","Status":"Active"},"8":{"Name":"qwert","PhoneNumber":"2013654789","GroupID":"G2","Email":"qwert@gmail.com","Status":"Active"},"9":{"Name":"plkiuj","PhoneNumber":"5642139870","GroupID":"G2","Email":"plikju@gmail.com","Status":"Active"},"10":{"Name":"inghru","PhoneNumber":"3589746102","GroupID":"G2","Email":"ingji@gmail.com","Status":"Active"},"11":{"Name":"lkjhjj","PhoneNumber":"8794561230","GroupID":"G2","Email":"lkjhjj@gmail.com","Status":"Active"},"12":{"Name":"olkiuj","PhoneNumber":"6985741230","GroupID":"G2","Email":"olkji@gmail.com","Status":"Active"},"13":{"Name":"lkjhuh","PhoneNumber":"2136547890","GroupID":"G2","Email":"lkjhuh@gmail.com","Status":"Active"},"14":{"Name":"asdfgr","PhoneNumber":"2136547890","GroupID":"G3","Email":"dsfjdfsfh@gmail.com","Status":"Active"},"orgID":"001"};


var USERINFOLS={'orgID':'001'};
var contacsobj ={'orgID':'001'};
var groupinfo={'Other':{
		"Name":'Other',
		"Description":'Other',
		"Status":'',
		"Contacts":[]
}}

var editSontaflg=-1;
var deleCtFlg=-1;
function validateEmail(email) {
    var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if (re.test(email)) {
        if (email.indexOf(myObj.domainName, email.length - myObj.domainName.length) !== -1) {
            return('successful');
        } else {
        	return('Email must be a '+ myObj.domainName+' address (your name'+ myObj.domainName+').');
        }
    } else {
    	return('Not a valid e-mail address.');
    }
}

function checkEmai(svar) {
	var id="#"+svar;
	var msg=validateEmail($(id).val())
	var dicID="#"+svar+"ErroDiv"
	var spanID="#"+svar+"Error"
	if(msg !="successful"){
		$(dicID).show();	
		$(spanID).html(msg);	
	}else{
		$(dicID).hide();
	}
	var userInfo= localStorage.getItem("UserInfo");
	if(userInfo != "null" && userInfo != null && userInfo != undefined  ){
		
		if( JSON.parse(userInfo).hasOwnProperty($(id).val()) ){
		
				
				 $(id).after('<span class="errormsg">Enter ID is not available, please try other.. </span>');
				
			 }
		
	}
	

}
function loadinfo(){
	if(localStorage.getItem("UserInfo") == "null" || localStorage.getItem("UserInfo") == null && localStorage.getItem("UserInfo") == undefined ){
		localStorage.setItem("UserInfo",JSON.stringify(userinfo));
		localStorage.setItem("Groupinfo",JSON.stringify(Groupinfo));
		localStorage.setItem("contactsinfo",JSON.stringify(contactsinfo));
	}else{
		localStorage.getItem("UserInfo").concat(JSON.stringify(userinfo));
		localStorage.getItem("Groupinfo").concat(JSON.stringify(Groupinfo));
		localStorage.getItem("contactsinfo").concat(JSON.stringify(contactsinfo));
	}
}
function validateUserDetails() {
	
	
	
	var userInfo= localStorage.getItem("UserInfo");
	if(userInfo != "null" && userInfo != null && userInfo != undefined  ){
		if( !JSON.parse(userInfo).hasOwnProperty($("#userName").val())){
			$("#userName").after('<span class="errormsg">User ID is not available, please sign Up </span>');
		}else if($("#loginPassword").val() != JSON.parse(JSON.stringify(JSON.parse(userInfo)[$("#userName").val()])).Password){
			$("#loginPassword").after('<span class="errormsg">Password is incorrect..</span>');
		}else{
			loginUsrid=$("#userName").val();
			document.getElementById('loginForm').reset();
			$("#loginDiv").hide();
			loadinfo();
			fillContactDetails();
			$("#contactManageDiv").show();
		}
	}else{
		$("#userName").after('<span class="errormsg">User ID is not available, please register using sign Up </span>');
	}
}
function removeErrorMsG(svar) {
	var divid="#"+svar+"ErroDiv";
	if("aadhar" == svar ){
		 $(".errormsg").remove();
	}else{
		$(divid).hide();
		 $(".errormsg").remove();
		if(svar == "regConf"){
			 var password = $('#regPassword').val();
			if (password.length < 8) {
				  $('#regPassword').focus();
			      $('#regPassword').after('<span class="errormsg">Password must be at least 8 characters long</span>');
			    }
			else {
				
			      var regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
			      var validpassword = regEx.test(password);
			      if (!validpassword) {
			    	  $('#regPassword').focus();
			        $('#regPassword').after('<span class="errormsg">Please Enter a strong password</span>');
			        
			      }
			    
		}
	}
	
}
	}
function openRegdiv() {
	$("#loginDiv").hide();
	$("#registrationDiv").show();
	
}

function validateConfirm(){
	if($("#regConfPassowrd").val() != $("#regPassword").val()){
		$("#regConfErroDiv").show();
		$("#regConfErro").html("Confirm password should match with the Password !!!");
	}
}

function validateForm(){
	
	 
	    var first_name = $('#FirstName').val();
	    var last_name = $('#LastName').val();
	    var email = $('#regemail').val();
	    var aadharno=$('#aadhar').val();
	 
	    $(".errormsg").remove();
	 
	    if (first_name.length < 1) {
	      $('#FirstName').after('<span class="errormsg">This field is required</span>');
	      $('#FirstName').focus();
	      return false;
	    }
	    if (last_name.length < 1) {
	      $('#LastName').after('<span class="errormsg">This field is required</span>');
	      $('#LastName').focus();
	      return false;
	    }
	    if(aadharno.length != 12 ){
	    	  $('#aadhar').after('<span class="errormsg">This field is required and enter valid Aadhar Number</span>');
	    	  $('#aadhar').focus();
	    	  return false;
	    }
	   if(validateEmail(email) != 'successful'){
		   $('#regemail').focus();
		   return false;
	   }
	 return true;
}

function saveRegDetails(){
	if(validateForm()){
		var tempJson;
		tempJson = {
		        'UserID': $('#regemail').val(),
		        'FirstName':  $('#FirstName').val(),
		        'LastName':$('#LastName').val(),
		        'Password':$('#regPassword').val(),
		        'aadhar'  :$('#aadhar').val(),
		        'groups':['Other']
		    };
		if(localStorage){
			//alert("tempJson\t"+tempJson)
			USERINFOLS[$('#regemail').val()]=tempJson;
			 localStorage.setItem("UserInfo",JSON.stringify(USERINFOLS));
		}
		//alert("localStorage.getItem(\"UserInfo\")---"+localStorage.getItem("UserInfo"));
		  alert("Please Login with "+$('#regemail').val()+" and Password");
		 document.getElementById('registrationForm').reset();
		    document.getElementById('loginForm').reset();
		    $("#registrationDiv").hide();
		    $("#loginDiv").show();
	}
	
	loadinfo();
	fillContactDetails();
}

function openGroupDiv(){
	$("#contactManageDiv").hide()
	$("#groupDetailsDiv").show()
}

function openContactDiv(){
	$("#contactManageDiv").hide();	
	var userInfo= JSON.parse(localStorage.getItem("UserInfo"));
	$('#contactGroup').html("");
	$('#contactGroup').append($("<option></option>").text("Please select Group")); 
              
               
	$.each(userInfo[loginUsrid].groups, function(key,value) {   
	     $('#contactGroup')
	         .append($("<option></option>")
	                    .attr("value",value)
	                    .text(value)); 
	});
	$("#contactDetailsDiv").show()
	
}

function logoutFun (){
	loginUsrid="";
	location.reload();
}

function saveGroupDetails(){
	var userInfo= JSON.parse(localStorage.getItem("UserInfo"));
	
	if($("#groupName").val().trim().length <1){
		alert("Please Enter Group Name..")
	}else{
		
		// groupinfo= JSON.parse(localStorage.getItem("Groupinfo"));
		
		var groups={
				"Name":$("#groupName").val(),
				"Description":$("#groupDescription").val(),
				"Status":$('input[name=status]:checked').val(),
				"Contacts":[]
			};
		if(JSON.parse(localStorage.getItem("Groupinfo")) != "null" && JSON.parse(localStorage.getItem("Groupinfo")) != null && JSON.parse(localStorage.getItem("Groupinfo")) != undefined  ){
			var grpTemp=JSON.parse(localStorage.getItem("Groupinfo"))[$("#groupName").val()];
			if(grpTemp !=undefined && grpTemp.Contacts.length >0){
				groups["Contacts"]=grpTemp["Contacts"];
			}
							
						groupinfo[$("#groupName").val()]=groups;
						localStorage.setItem("Groupinfo",JSON.stringify(groupinfo));
				//		 alert("Group details added successfully..")
							
		}else{
			
			groupinfo[$("#groupName").val()]=groups;
			
			 localStorage.setItem("Groupinfo",JSON.stringify(groupinfo));
			
		}
		
		if(!userInfo[loginUsrid].groups.includes($("#groupName").val())){
			userInfo[loginUsrid].groups.push($("#groupName").val());
			localStorage.setItem("UserInfo",JSON.stringify(userInfo));
		}
		
		document.getElementById('groupDetailsForm').reset();
		
		 alert("Group details added successfully..")
		
		
	}

	
	
}
function backToConList(){
//	alert("!");
	$("#groupDetailsDiv").hide();
	$("#contactDetailsDiv").hide();
	$("#contactManageDiv").show();
	 fillContactDetails();
}

function saveContactDetails(){
	
	if($("#ContactName").val().trim().length < 1){
		$("#ContactName").after('<span class="errormsg">This field is required..</span>');
		return;
	}
	else if($("#PhoneNumber").val().trim().length < 1){
		$("#PhoneNumber").after('<span class="errormsg">This field is required.. </span>');
		return;
	}
	else if($("#contactGroup").val().trim().length < 1){
		
		$("#contactGroup").after('<span class="errormsg">This field is required..</span>');
		return;
	}else{
		
		if(localStorage.getItem("contactsinfo") != "null" && localStorage.getItem("contactsinfo") != null && localStorage.getItem("contactsinfo") != undefined  ){
			contacsobj=JSON.parse(localStorage.getItem("contactsinfo"));
		}
		var contacsobjLength;
		if(editSontaflg== -1){
			 contacsobjLength=Object.keys(contacsobj).length;	
		}else{
			contacsobjLength=editSontaflg;
		}
		
		var temobj={
				'Name':$("#ContactName").val(),
				'PhoneNumber':$("#PhoneNumber").val(),
				'GroupID':$("#contactGroup").val().trim(),
				'Email':$("#contactEmail").val(),
				'Status':$('input[name=contactStatus]:checked').val()
		}
		var assOldGRoupID;
		
		contacsobj[contacsobjLength]=temobj;
		localStorage.setItem("contactsinfo",JSON.stringify(contacsobj));
		var groupinfo =JSON.parse(localStorage.getItem("Groupinfo"));
		var singlegrpConts=groupinfo[$("#contactGroup").val().trim()];
		if(!singlegrpConts.Contacts.includes($("#groupName").val())){
			if(editSontaflg != -1){
				assOldGRoupID=contacsobj[editSontaflg].GroupID;
				var index = groupinfo[assOldGRoupID].Contacts.indexOf(editSontaflg);
				if (index > -1) {
					groupinfo[assOldGRoupID].Contacts.splice(index, 1);
				}
			}
			
			groupinfo[$("#contactGroup").val().trim()].Contacts.push(contacsobjLength);
			localStorage.setItem("Groupinfo",JSON.stringify(groupinfo));
		}
	
		
		editSontaflg=-1;
		document.getElementById('contactDetailsForm').reset();
		 alert("Contact details added successfully..")
	}
}
function deleteGroupDetails (){
	$("#groupName").val();
	var userinfo=JSON.parse(localStorage.getItem("UserInfo"));
	var groupinfo=JSON.parse(localStorage.getItem("Groupinfo"));
	var contactsinfo=JSON.parse(localStorage.getItem("contactsinfo"));

	//var grpTemp=groupinfo[$("#groupName").val()];
			
		$.each(groupinfo[$("#groupName").val()]["Contacts"], function( gindex, gvalue ) {
			contactsinfo[gvalue]["GroupID"]='Other'
				groupinfo['Other']["Contacts"].push(gvalue);
		});
		delete groupinfo[$("#groupName").val()];
		
		var useArray=userinfo[loginUsrid]["groups"];
		var index =useArray.indexOf($("#groupName").val());
		if (index > -1) {
			(userinfo[loginUsrid]["groups"]).splice(index, 1);
		}
		
		 localStorage.setItem("UserInfo",JSON.stringify(userinfo));
		 localStorage.setItem("Groupinfo",JSON.stringify(groupinfo));
		 localStorage.setItem("contactsinfo",JSON.stringify(contactsinfo));
		document.getElementById('groupDetailsForm').reset();
		alert("Deleted Successfully..");		
		backToConList();
}

function deleteContactDetails(){
	
	
	
	if(deleCtFlg != -1){
		
		var groupinfo=JSON.parse(localStorage.getItem("Groupinfo"));
		var contactsinfo=JSON.parse(localStorage.getItem("contactsinfo"));
		
		var groupID=contactsinfo[editSontaflg].GroupID;
		var index = groupinfo[groupID].Contacts.indexOf(editSontaflg);
		if (index > -1) {
			groupinfo[assOldGRoupID].Contacts.splice(index, 1);
		}
		delete contactsinfo[deleCtFlg];
		localStorage.setItem("Groupinfo",JSON.stringify(groupinfo));
		 localStorage.setItem("contactsinfo",JSON.stringify(contactsinfo));
		 
		document.getElementById('contactDetailsForm').reset();
	}
	
	
	
	backToConList();
}

function fillContactDetails(){
	
	var userinfo=JSON.parse(localStorage.getItem("UserInfo"));
	var groupinfo=JSON.parse(localStorage.getItem("Groupinfo"));
	var contactsinfo=JSON.parse(localStorage.getItem("contactsinfo"));
	if(contactsinfo != "null" && contactsinfo != null && contactsinfo != undefined  ){
	
		var groupArray=userinfo[loginUsrid].groups;
		$("#myTable tbody").html("");
		$.each(groupArray, function( gindex, gvalue ) {
			var groupVal=gvalue;
			var contactArry=groupinfo[gvalue].Contacts;
			$.each(contactArry, function( cindex, cvalue ) {
				var markup ="";
				   var contactdetails=contactsinfo[cvalue];
				    markup = "<tr><td style='cursor:pointer' onclick=editGroupDtails('"+groupVal+"')>"+groupVal+"</td>" +
				    	    "<td style='cursor:pointer' onclick=editContactDetails('"+cvalue+"')>"+contactdetails.Name+"</td>" +
				    				"<td>"+contactdetails.PhoneNumber+"</td>" +
				    						"<td>"+contactdetails.Email+"</td>" +
				    								"<td>"+contactdetails.Status+"</td></tr>"
				    								$("#myTable tbody").append(markup);
				});
			
			});
		
		
		
	}
	$('#myTable').DataTable();
	
}

function editGroupDtails(grpVal){
	var grpDetails=JSON.parse(localStorage.getItem("Groupinfo"))[grpVal];
	$("#groupName").val(grpDetails.Name);
	$("#groupDescription").val(grpDetails.Description);
	$('input[name=status]:checked').val(grpDetails.Status);
	$("#contactManageDiv").hide()
	$("#groupDetailsDiv").show()
}
function editContactDetails(conVal) {
	var coninfo=JSON.parse(localStorage.getItem("contactsinfo"))[conVal];
	$("#ContactName").val(coninfo.Name);
	$("#PhoneNumber").val(coninfo.PhoneNumber);
	$("#contactManageDiv").hide();	
	var userInfo= JSON.parse(localStorage.getItem("UserInfo"));
	$('#contactGroup').html("");
	$('#contactGroup').append($("<option></option>").text("Please select Group")); 
              
               
	$.each(userInfo[loginUsrid].groups, function(key,value) {   
	     $('#contactGroup')
	         .append($("<option></option>")
	                    .attr("value",value)
	                    .text(value)); 
	});
	
	$("#contactEmail").val(coninfo.Email);
	$('input[name=contactStatus]:checked').val(coninfo.Status);
	$("#contactGroup").val(coninfo.GroupID);
	$("#contactDetailsDiv").show();
	editSontaflg=conVal;
	deleCtFlg=conVal;
}