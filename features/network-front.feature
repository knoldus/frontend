Feature: Network front

    Scenario: Trailblocks
		Given I visit the front page
		Then I should see the following trailblocks <News(Top stories), Sport, Comment is free, Features, 
        Culture, Business, Life style, Money and Travel>
        And each block have minimum 1 story maximum 5 stories
        And expanders for each block be maximum 5 stories

	Scenario: Texture
		Given a series of trailblocks network front 
	 	Then each block should obey the visual design rules 	

	Scenario: Comments
		Given there a Comment Is Free block on the network front
		Then it's visually differentiated from other sections 

	Scenario: Represent 'special event' block on the network front 
		Given a there is a special event called 'Paralypmpics'
			And it's corresponds to a tag called 'paralympics'
		Then I should see the first four paralympics stories on the network front
			appear after the top stories block
		And it should be visually represented by it's parent tag section
    
	Scenario: Collapsing sections 
        Given I visit the network front
		When I hide a sectiont
		Then the section should collapse from view 
    
    Scenario: Expanding collapsed sections 
        Given I visit the network front and one or more sections are hidden
		When I open the section
		Then the section should expand in to view

	Scenario: Persistently collapsed sections 
        Given I visit the network front
        When I hide a section
        And when I return after navigating away from the front 
		Then the collapsed section will stay collapsed

