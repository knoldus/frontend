Feature: Editions

    As a Guardian reader in American
    I want to read stories relevant to me
    
    Scenario: Manually switching editions
        Given I visit the Guardian front
        When I chose the 'US' edition from the sections menu
        Then I should see the US edition front
