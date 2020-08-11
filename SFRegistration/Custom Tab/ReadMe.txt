To access the current files follow these steps

1. Read Init file of Salesforce/Custom Page folder
2. Create Custom Tab for SFRegistration
	i.   Find "Tabs" in Setup
 	ii.  Create new "Custom Object Tabs" with Object selected as SFRegistration (If not done already)

3. Add Approval visualforce Page link to the SFRegistration List View
	i.   Navigate to Setup -> Object Manager -> SFRegistration -> Buttons, Links and Actions
	ii.  Create a New "List Button" with "Visual Page" Approval.vfg page selected , name it as Approve Selected.
	iii. Navigate to "Search Layouts for Salesforce Classic" of SFRegistration Object Mannager Side bar.
    iv.  Select the "List View" Layout and Click on Edit and Add your custom button "Approve Selected" and Save.
4. Add Registration Form 
	i.   Navigate to Setup -> Object Manager -> SFRegistration -> Buttons, Links and Actions.
    ii.  Click on "New" the standard Button and Edit
    iii. Select Lightning Component and Select Registration (Registration Component Name)

5. Create Registration Component Public
	i. Follow this link :https://help.salesforce.com/articleView?id=sites_setup_overview.htm&type=5
	else  
	Follow the Below steps
		Navigate to Setup -> Sites

			if (you are doing this for the first time)
				->you would be asked to enter a domain name and to check the availability.
				->Type any name you want e.g  pk96 (I did that)
				->Check for Availability
				->Register My Salesforce Site Domain
			else
			Select Both the Checkbox (if present)
			->	Assign new records created by Salesforce Sites guest users to a default owner in the org
				Allow using standard external profiles for self-registration and user creation

			->Scroll to the last and Click on "New".
			->Site Edit will appear
				->Fill out the form
				->Select the "Default Web Address" any e.g register
				->Select "Active"
				->Select Active Site Home Page as SFRegistrationForm.vfp
			Click on Save.
	To view the page,
	Go to the developer console -> SFRegistrationForm.vfp and Click "Preview" extreme left button under tabs. 


