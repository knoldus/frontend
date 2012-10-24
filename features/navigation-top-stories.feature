Feature: Navigation - Top Stories 

    In order know what's going on in the world
    As a Guardian Reader
    I want to read a list of the top stories 

    Scenario Outline: View 10 top stories on every page
        Given I visit a <page>
        When I select the "Top Stories" link
        Then a list of the top stories should be shown 
        
        Examples:
            | page |
            | article |
            | section |
            | gallery |
    
    Scenario: Hide top stories
        Given I visit an article and the "Top Stories" navigation is open 
        When I deselect the "Top Stories" link
        Then a list of top stories should be hidden 
            
    Scenario: No top stories navigation on the network front
        Given I visit the network front
        Then the "Top Stories" link is hidden
		
    Scenario: Show 10 Top stories from the guardian site       
        Given I visit an article within a section
        When I select the "Top Stories" link
        Then I'm shown the top ten stories from across the site
		
    Scenario: Indicate the visited state of stories in the "Top Stories" list
        Given I visit an article within a section
        When I have visited some stories within the top stories list
        Then the stories I have visited will have a visted state
