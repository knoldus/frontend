Feature: Sections Navigation 

    In order to easily access stories that interest me 
    As a Guardian reader
    I want to access all the sections across the Guardian site

    Scenario: Navigation to sections 
		Given I visit any guardian page
        When I open the sections menu
		Then I am shown the most relevent 12 sections 
        And I can link through to those sections to view their fronts 
		
   Scenario: Navigation to complete list of sections
		Given I visit any guardian page
        When I open the sections menu
	    And select the 'all sections' link
        Then I see a list of all the site's sections
  
   Scenario: Toggle the sections menu 
        Given I visit any guardian page
        When I open the sections menu 
        And I then close the menu
        Then the sections menu should be hidden

   Scenario: Section navigation is tracked with Omniture
       Given I interact with Section features using a mobile device, tablet or desktop
       When I track my visit using omniture
       Then Omniture will display data showing my interaction with each section tab
