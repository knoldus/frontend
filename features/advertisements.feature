Feature: Adverts

As a Product Manager 
I want adverts displayed on the site
So that we meet our revenue targets

   Scenario: Adverts will appear at top of all pages
        Given I visit any page on the Guardian site
        Then an advert will be at the top of the page

   Scenario: Adverts will appear at the foot of all pages
        Given I visit any page on the Guardian site
        Then an advert will be at the foot of the page

   Scenario: Adverts navigate to a brand site
         Given I'm on a guardian page with adverts 
         When I click an advert
         Then the brand's site is displayed in a new window
