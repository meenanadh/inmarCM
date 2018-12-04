<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
		
		
<head>
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="HandheldFriendly" content="true">
	<title>Inmar CM</title>
	<script src="./js/jquery-1.8.3.js"></script>
	<link href="./css/jquery.dataTables.min.css" rel="stylesheet">
<!-- 	<link href="./jquery-ui-1.9.2.custom/css/start/jquery-ui-1.9.2.custom.css" rel="stylesheet"> -->
		<script src="./js/jquery.dataTables.min.js"></script>
	<script src="./js/controlsJS.js"></script>
	<script src="./js/dataJS.js"></script>
<link href='https://fonts.googleapis.com/css?family=Ubuntu:500' rel='stylesheet' type='text/css'>
<style type="text/css">

/* Tablet Landscape */

@media screen and (max-width: 1060px) {

    #primary { width:67%; }

    #secondary { width:30%; margin-left:3%;}  

}



/* Tabled Portrait */

@media screen and (max-width: 768px) {

    #primary { width:100%; }

    #secondary { width:100%; margin:0; border:none; }

}
body {
  background:url("./images/Mpsg2b.jpg");
  margin:0px;
  font-family: 'Ubuntu', sans-serif;
	background-size: inherit;
}
h1, h2, h3, h4, h5, h6, a {
  margin:0; padding:0;
}
.login {
  margin:0 auto;
  max-width:500px;
}
.login-header {
  color:#fff;
  text-align:center;
  font-size:300%;
}
/* .login-header h1 {
   text-shadow: 0px 5px 15px #000; */
}
.login-form {
  border:.5px solid #fff;
  background:#4facff;
  border-radius:10px;
  box-shadow:0px 0px 10px #000;
}
.login-form h3 {
  text-align:left;
  margin-left:40px;
  color:#fff;
}
.login-form {
  box-sizing:border-box;
  padding-top:15px;
	padding-bottom:10%;
  margin:5% auto;
  text-align:center;
}
.login input[type="text"],
.login input[type="password"],
.login input[type="number"],
.login select,
.Login textarea {
  max-width:400px;
	width: 80%;
  line-height:3em;
  font-family: 'Ubuntu', sans-serif;
  margin:1em 2em;
  border-radius:5px;
  border:2px solid #f2f2f2;
  outline:none;
  padding-left:10px;
}
.login-form input[type="button"] {
  height:30px;
  width:100px;
  background:#fff;
  border:1px solid #f2f2f2;
  border-radius:20px;
  color: slategrey;
  text-transform:uppercase;
  font-family: 'Ubuntu', sans-serif;
  cursor:pointer;
}
.sign-up{
  color:#f2f2f2;
  margin-left:-70%;
  cursor:pointer;
  text-decoration:underline;
}
.no-access {
  color:#E86850;
  margin:20px 0px 20px -57%;
  text-decoration:underline;
  cursor:pointer;
}
.try-again {
  color:#f2f2f2;
  text-decoration:underline;
  cursor:pointer;
}

.errormsg {
  color: red;
  margin-left: 5px;
}
.error {
  color: red;
  margin-left: 5px;
}
 
label.errormsg {
  display: inline;
}

/*Media Querie*/
@media only screen and (min-width : 150px) and (max-width : 530px){
  .login-form h3 {
    text-align:center;
    margin:0;
  }
  .sign-up, .no-access {
    margin:10px 0;
  }
  .login-button {
    margin-bottom:10px;
  }
}
/* Style the container for inputs */
.container {
    background-color: #f1f1f1;
    padding: 20px;
}

/* The message box is shown when the user clicks on the password field */
#message {
    display:none;    
    color: #000;
    position: relative;
    padding: 20px;
    margin-top: 10px;
}

#message p {
    padding: 10px 10px;
    font-size: 12px;
}

/* Add a green text color and a checkmark when the requirements are right */
.valid {
    color: green;
}

.valid:before {
    position: relative;
    left: -20px;
  
}

/* Add a red text color and an "x" when the requirements are wrong */
.invalid {
    color: red;
}

.invalid:before {
    position: relative;
    left: -20px;
    
}

.contacts {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

.contacts td, .contacts th {
    border: 1px solid #ddd;
    padding: 8px;
}

.contacts tr:nth-child(even){background-color: #f2f2f2;}

.contacts tr:hover {background-color: #ddd;}


html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul:after { /* to clearfix your ul list */
  content: "";
  display: table;
  clear: both;
}
ul li {
  display: block; /* inline-block have an extra 4px margin wich makes it harder to use in this situation */
  width: 33.3333333%; /* You get it (100/3) but use exact number */
  padding: 10px 5px;
  float: left; /* if you use block elements you have to float them */
  text-align: center;
}



</style>
<script type="text/javascript">


$(document).ready( function () {
	fillContactDetails();
	 $('#myTable').DataTable();
	 //$("select").val(5);
	$("#userName").attr("placeholder","UserName"+myObj.domainName);

	var myInput = document.getElementById("regPassword");
	var letter = document.getElementById("letter");
	var capital = document.getElementById("capital");
	var number = document.getElementById("number");
	var length = document.getElementById("length");

	// When the user clicks on the password field, show the message box
	myInput.onfocus = function() {
	    document.getElementById("message").style.display = "block";
	}

	// When the user clicks outside of the password field, hide the message box
	myInput.onblur = function() {
	    document.getElementById("message").style.display = "none";
	}

	// When the user starts to type something inside the password field
	myInput.onkeyup = function() {
	  // Validate lowercase letters
	  var lowerCaseLetters = /[a-z]/g;
	  if(myInput.value.match(lowerCaseLetters)) {  
	    letter.classList.remove("invalid");
	    letter.classList.add("valid");
	  } else {
	    letter.classList.remove("valid");
	    letter.classList.add("invalid");
	  }
	  
	  // Validate capital letters
	  var upperCaseLetters = /[A-Z]/g;
	  if(myInput.value.match(upperCaseLetters)) {  
	    capital.classList.remove("invalid");
	    capital.classList.add("valid");
	  } else {
	    capital.classList.remove("valid");
	    capital.classList.add("invalid");
	  }

	  // Validate numbers
	  var numbers = /[0-9]/g;
	  if(myInput.value.match(numbers)) {  
	    number.classList.remove("invalid");
	    number.classList.add("valid");
	  } else {
	    number.classList.remove("valid");
	    number.classList.add("invalid");
	  }
	  
	  // Validate length
	  if(myInput.value.length >= 8) {
	    length.classList.remove("invalid");
	    length.classList.add("valid");
	  } else {
	    length.classList.remove("valid");
	    length.classList.add("invalid");
	  }
	}
	
	
});

</script>

</head>
<body class="demo-page"  style="background-color: #ffffff;border-color: black;border-style: solid; ">
<article>
  <header>
    <span style="margin:0 8px;float:center;text-transform:uppercase;letter-spacing: 0.8em;color: black;font-size: 12px;" class="header-toolbar-contact" id="ic-text">Intelligent Commerce</span>
  </header>
  
</article>

<div class="login" id="loginDiv">
<form action="ActionServlet.do" id="loginForm" name="loginForm">
  <div class="login-header">
    <h3>Login</h3>
  </div>
  <div class="login-form">
    <h3>Username:</h3>
    <input type="text" id="userName" placeholder="Username" onclick="removeErrorMsG('')"/><br>
    <div id="userNameErroDiv" style="display:none;"><span class="errormsg" id="userNameError"></span></div>
    <h3>Password:</h3>
    <input type="password" placeholder="Password" id="loginPassword"  onclick="removeErrorMsG('')"/>
    <br>
    <input type="button" value="Login" class="login-button" onclick="validateUserDetails()"/>
    <br>
    <a class="sign-up" onclick="openRegdiv()">Sign Up!</a>
    <br>
    
  </div>
  </form>
</div>
<div id="registrationDiv" class="login" style="display: none" >
<form name="registrationForm" id="registrationForm" action="" >
 <div class="login-header">
    <h3>Registration</h3>
 </div>
  <div class="login-form">
   <h3>First Name:</h3>
    <input type="text" id="FirstName" placeholder="First Name" required="required" onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" /><br>   
  <h3>Last Name:</h3>
    <input type="text" id="LastName" placeholder="Last Name" required="required" onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" /><br>
    <h3>Aadhar No:</h3>
      <input  type="number" name="aadhar" id="aadhar" placeholder="Aadhar No" pattern= "[0-9]+ " onclick="removeErrorMsG('aadhar')"  maxlength="12"/><br>
   
    <h3>Email:</h3>
      <input type="text" id="regemail" placeholder="email"  onblur="checkEmai('regemail')" onclick="removeErrorMsG('regemail')" /><br>
    <div id="regemailErroDiv" style="display:none;"><span class="error" id="regemailError"></span></div>
     <h3>Password:</h3>
    <input type="password" id="regPassword" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onclick="removeErrorMsG('')" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
   <div id="message" style="display: none;">
  <h4>Password must contain the following:</h4>
  <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
  <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
  <p id="number" class="invalid">A <b>number</b></p>
  <p id="length" class="invalid">Minimum <b>8 characters</b></p>
</div>
     <h3>Confirm Password:</h3>
    <input type="password" id="regConfPassowrd" placeholder="Confirm Password" min="8" onblur="validateConfirm()" onclick="removeErrorMsG('regConf')"/>
     <div id="regConfErroDiv" style="display:none;"><span class="errormsg" id="regConfErro"></span></div>
     <br>
    <input type="button" value="Done" class="login-button" onclick="saveRegDetails()"/>
    <br>
  </div>

</form>

</div>
<div id="contactManageDiv"   style="overflow-x:auto;display: none;border: thin;border-color: black; ">
<form name="contactManageForm" id="contactManageForm" action="" >
<div class="login-header" >
 <h6>Contacts information</h6>
 </div><div>
 
 <ul id="menu" style="display: inline;">
  <li style="display: inline;"><a class="sign-up" id="groupLink" onclick="openGroupDiv()">Create Group</a></li>
  <li style="display: inline;"><a class="sign-up" id="contactLink" onclick="openContactDiv()">Create Contact</a></li>
  <li style="display: inline;"><a class="sign-up" id="logout" onclick="logoutFun()" >logout</a></li>
  </ul> 
 
<hr style="height:1px;border:none;color:#333;background-color:#333;" />
<table id="myTable" class="contacts"> 
    
<thead>
<tr>
	<th>Group</th>
	<th>Name</th>
	<th>Phone No</th>
	<th>Email</th>
	<th>Active/Inactive</th>
</tr>
</thead>
<tbody id="contactDetailsTbody">

</tbody>

</table>
</div>
</form>
</div>
<div id="groupDetailsDiv" class="login" style="display: none" >
<form name="groupDetailsForm" id="groupDetailsForm" action="" >
 <div class="login-header">
    <h5 id="groupH5">Create Group</h5></div>
    <div >
   <h5>Group Name:</h5>
    <input type="text" id="groupName" placeholder="Group Name" required="required" /><br> 
      <h5>Group Description:</h5>
      <input type="text" id="groupDescription"  placeholder="Group Description" name="groupDescription" required="required">
       <br>
         
         <input type="radio" name="status" value="Active" checked> Active<br>
  		<input type="radio" name="status" value="Inactive"> Inactive<br>
  		<br>
        <ul id="menu" style="display: inline;">
  <li style="display: inline;"><a class="sign-up" id="back" onclick="backToConList()">Back</a></li>
  <li style="display: inline;"><a class="sign-up" id="save" onclick="saveGroupDetails()">Save</a></li>
  <li style="display: inline;"><a class="sign-up" id="delete" onclick="deleteGroupDetails()">Delete</a></li>
 
  </ul> 
    
    </div>
    </form></div>



<div id="contactDetailsDiv" class="login" style="display: none" >
<form name="contactDetailsForm"  id="contactDetailsForm" action="" >
 <div class="login-header">
    <h5 id="contactH5">Create Contact</h5></div>
    <div  class="login-form">
   <h5> Name:</h5>
    <input type="text" id="ContactName" placeholder="Contact Name" required="required" /><br> 
      <h5>email:</h5>
      <input type="text" id="contactEmail"  placeholder="Email" name="contactEmail" required="required">
       <br>       
       <h5> Phone Number:</h5>
      <input  type="number" name="PhoneNumber" id="PhoneNumber" placeholder="Phone Number" pattern= "[0-9]+ " onclick="removeErrorMsG('PhoneNumber')"  maxlength="12"/><br> 
		 <h5> Group</h5>
      	<select id="contactGroup">
      	<option>please select group </option>
      	</select>
      <br>   <br> <input id="activeC" type="radio" name="contactStatus" value="Active" checked> Active<br>
  		<input  id="inactiveC" type="radio" name="contactStatus" value="Inactive"> Inactive<br>
  	
  		<br> 		
  		
        <ul id="menu" style="display: inline;">
  <li style="display: inline;"><a class="sign-up" id="back" onclick="backToConList()">Back</a></li>
  <li style="display: inline;"><a class="sign-up" id="save" onclick="saveContactDetails()">Save</a></li>
 	<li style="display: inline;"><a class="sign-up" id="delete" onclick="deleteContactDetails()">Delete</a></li>
  </ul> 
    
    </div>
    </form></div>



  <hr>
<footer></footer>
</body>

</html>
	
