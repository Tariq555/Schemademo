Feature: Schools

    Scenario: Adding a school
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the schools button
        Then I should be able to create a new school

    Scenario: Get schools
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the schools button
        Then I should be able to see all the schools from school list

    Scenario: Edit a school
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the schools button
        Then I should be able to edit a school

    Scenario: Delete a school
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the schools button
        Then I should be able to delete a school