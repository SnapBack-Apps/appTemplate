//***** Use this file to set up your buttons and include any custom functions for your app *****
// 
var development = 1;						// 1 this app is in development, 0 this app is in production
//var currentUserDefaultCaution = "0";		// **This is the global Throw caution to the wind flag for the current use

/*-----------------------------------------------------*/
/*-------------- Standard App Variables ---------------*/
/*-----------------------------------------------------*/

var appname = "appTemplate";				// This app's name / folder name which must be unique
var apptitle = "App Template";				// This display title written to the HTML
var connect_link = "http://factory.snapback-apps.com/app/new-app-template/";     // The link to your App's Connect Page in the SnapBack Apps Factory 
var group_name ="App Helpers";				// The group or individual responsible for this app

/*-----------------------------------------------------*/
/*---------------------- Buttons ----------------------*/
/*-----------------------------------------------------*/

var btncount = 2;                            // This is the number of buttons on the App Home tab in main.html

//Setup for Button0 (The First Button)
var btn0_Title = "First Button Title";		// This is what is displayed on the button.
var btn0_MouseOver = "A MouseOver for Button 1";	// This is what appears upon mouseover for the button.
var btn0_Description = "First Description: This App displays a message when the button on the left is clicked.";		// This is what is displayed as the description of the button.
var btn0_Why = "This is an example explanation of why someone would want to run this button.  For example, you would want to run this specific button to see how our apps are demonstrated. You can even include links such as <a href='http://www.google.com/' id='btn0-link' title='This is a link to Google'>this</a> to help provide greater context for a user.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Command = "displaymessage0.js";	// This is the actual script the button will be calling.
var btn0_Source = "displaymessage0.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn0_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn0_id="btn0";							// The unique ID of the button.  Please follow the format provided.

// Permissions for button0 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn0_KeyValue="button0"; 				// Key value name for the registry
var btn0_DefaultEnableButton=1;
var btn0_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn0_DefaultAllowUser=1;
var btn0_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn0_DefaultCaution=1;
var btn0_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedCaution="";     		// Update timestamp if admin modifies current value
//var buttonname0 ="";

// Service Information for Button0
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn0_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn0_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn0_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn0( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		//This function executes your script.  Do not edit this line
}



//Setup for Button1 (The Second Button)
var btn1_Title = "Second Button Title";		// This is what is displayed on the button.
var btn1_MouseOver = "A MouseOver for Button 2";	// This is what appears upon mouseover for the button.
var btn1_Description = "Second Description: This App displays a message when the user clicks the button on the left.  By default, you have a 250 character limit before a 'more' link is provided which will expand the content for further reading.  This message is an example.  As you can see, this content is hidden by default but a user can expand this section and continue reading.<br /><br />This helps truncate certain sections, keep the page organized, and allow users the opportunity to find what they want without the hassle of reading extended text.";		// This is what is displayed as the description of the button.
var btn1_Why = "The explaination for why someone would want to run this button.";		// Use this to explain to an end user why they would want to run this button.
var btn1_Command = "displaymessage1.js";	// This is the actual script the button will be calling.
var btn1_Source = "displaymessage1.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn1_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn1_id="btn1";							// The unique ID of the button.  Please follow the format provided.

// Permissions for button1 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn1_KeyValue="button1"; 				// Key value name for the registry
var btn1_DefaultEnableButton=1;
var btn1_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn1_DefaultAllowUser=1;
var btn1_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn1_DefaultCaution=1;
var btn1_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedCaution="";     		// Update timestamp if admin modifies current value
//var buttonname1 ="";

// Service Information for Button1
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn1_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn1_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn1_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn1( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		//This function executes your script.  Do not edit this line
}



	
/*-----------------------------------------------------*/
/*----------------- Custom Functions ------------------*/
/*-----------------------------------------------------*/	
//***** Use the below area for your common functions *****





