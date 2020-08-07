To use these classes, you have to follow some of the steps
1. Create a Custom Object : SFRegistration
	Fields :
		Company : Text (100)
		Email : Email (Select all check boxes to make it unique)
		Lead : LookUp(Lead)
		Account : LookUp(Account)
		Contact : LookUp(Contact)
		
2. Follow the below link to understand how to create a Custom Tab with a form.
	http://sfdccodepractices.blogspot.com/2017/12/crate-lightning-component-to-insert.html

3. Requirements:
	Create a registration form using Aura Component which will fill the data in a custom object and create a lead and associate the created lead with the custom object created.
	The "status" will be filled as "Registered" at the time of filling the registration form.
	When the status is changed to "Approved", then the Lead should get converted to Account and Contact but Opportunity should not be created.
	Note:
		Custom object name: SFRegistration
		Status can accept only 2 values, "Registered" and "Approved"
		Use best practices of salesforce

