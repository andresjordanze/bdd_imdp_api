Feature: IMDB rest api gets

  Scenario: Get movie by title
    Given I query movie by "Finding Nemo"
    When I make the rest call
    Then response should contain:
      """
      {
      "Title":"Finding Nemo",
      "Genre":"Animation, Adventure, Comedy",
      "Year":"2003"
      }
      """

  Scenario Outline: Get many movies by title
    Given I query movie by "<title>"
    When I make the rest call
    Then response should contain "<Genre>"
    
    Examples: No special characters in movie titles
    
    | title        | Genre                                       |
    | Finding Nemo | {"Genre":"Animation, Adventure, Comedy"}    |
    | Inception    | {"Genre":"Action, Mystery, Sci-Fi"}         |
    
    Examples: Special characters in movie titles 
    | title        | Genre                                       |
    | WALL·E      | {"Genre":"Animation, Adventure, Family"}   |
    | 8½          | {"Genre": "Mystery, Sci-Fi, Thriller"}   |

  Scenario: Get movie by year
    Given I query movie by year "2015"
    When I make the rest call
    Then response should contain:
      """
      {
      "Response":"False",
      "Error":"Something went wrong"
      }
      """

  Scenario: Get movie by title and year
    Given I query movie by 'Star Wars' and year '2011'
    When I make the rest call
    Then response should contain:
      """
      {
      "Title":"Star Wars: The Old Republic",
      "Year":"2011",
      "Genre":"Action, Adventure, Fantasy"
      }
      """