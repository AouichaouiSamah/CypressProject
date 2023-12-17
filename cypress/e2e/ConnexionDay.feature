
Feature:DayToDay connexion validation
Background:
 Given open DayToDay application
 When I log in as Following
       |userName|password|
       |sameh.aouichaoui@croix-rouge.be |samah2024$ |
       Then click on connexion button
    And verify title should be  'DayToDay'
 @smoke @sanity
 Scenario: Home Page
    Then click on connexion button
    And verify title should be  'DayToDay'
   
@deconnexion
 Scenario: Deconnexion
    Then click on deconnexion button
    And verify title should be  'Connection Page'
@Search_resident(recherche rapide)

 Scenario: Search_Rs 
    When click on link resident
    And click on link search 
    And choose recherche_rapide 
    And fill :center all center 
    And write 500 in text input
    And click on rechercher button
    Then verify resultat page  should be  'Resultats'

  @Search_resident1(recherche rapide)
    When click on link resident
    And click on link search 
    And choose recherche_avancee
    And fill :center all center 
    And fill Badge
     And click on rechercher button
    Then verify resultat page  should be  'Resultats'

    @Modify_Badge_Resident
    When click on link "Donnes signaletiques"
    And click on button Modifier
    And modify champ Badge
    And Click on enregistrer button
    Then verify result in badge changed 

    @Add_Number_resident
    When click on link center
    And click on toggle resident
    And Write number 
    And click on enregistrer button
    Then numero saved and show in interface 

    
    
   
