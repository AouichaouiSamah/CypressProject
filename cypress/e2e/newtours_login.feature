Feature:newtours validation
Background:
 Given open newtours application

 @smoke @sanity
 Scenario: Home Page
    When I log in as Following
       |userName|password|
       |mercery |mercery |
    Then click on submit button
    And verify title should be  'Login: Mercury Tours'
    