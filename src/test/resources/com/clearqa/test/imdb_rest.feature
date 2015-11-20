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
    Then the response should contain:
      """
      {
      "Title":"Star Wars: The Old Republic",
      "Year":"2011",
      "Genre":"Action, Adventure, Fantasy"
      }
      """

  Scenario: Get movie by title and plot short
    Given I query movie by 'Madagascar' and 'short'
    When I make the rest call
    Then response should contain:
      """
      {
      "Title":"Madagascar",
      "Year":"2005",
      "Genre":"Animation, Adventure, Comedy",
      "Plot":"Spoiled by their upbringing with no idea what wild life is really like, four animals from New York Central Zoo escape, unwittingly assisted by four absconding penguins, and find themselves in Madagascar, among a bunch of merry lemurs"
      }
      """

  Scenario: Get movie by title and plot full
    Given I query movie by 'Madagascar' and 'full'
    When I make the rest call
    Then response should contain:
      """
      {
      "Title":"Madagascar",
      "Year":"2005",
      "Genre":"Animation, Adventure, Comedy",
      "Plot":"At New York's Central Park Zoo, a lion, a zebra, a giraffe, and a hippo are best friends and stars of the show. But when one of the animals goes missing from their cage, the other three break free to look for him, only to find themselves reunited ... on a ship en route to Africa. When their vessel is hijacked, however, the friends, who have all been raised in captivity, learn first-hand what life can be like in the wild."
      }
      """

  Scenario: Get series by ID as JSON
    Given a query with movie id "tt2575988"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Title":"Silicon Valley",
      "Genre":"Comedy",
      "Plot":"In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. A comedy partially inspired by Mike Judge's own ..."
      }
      """

  Scenario: Get series by ID as JSON with full plot
    Given a query with movie id "tt2575988" and "full"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Title":"Silicon Valley",
      "Genre":"Comedy",
      "Plot":"In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. A comedy partially inspired by Mike Judge's own experiences as a Silicon Valley engineer in the late 1980s."
      }
      """

  Scenario: Get series by ID as JSON with short plot
    Given a query with movie id "tt2575988" and "short"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Title":"Silicon Valley",
      "Genre":"Comedy",
      "Plot":"In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. A comedy partially inspired by Mike Judge's own ..."
      }
      """

  Scenario: Get movie by ID as JSON
    Given a query with movie id "tt0111161"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Title": "The Shawshank Redemption",
      "Genre": "Crime, Drama",
      "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      }
      """

  Scenario: Get movie by ID as JSON with full plot
    Given a query with movie id "tt0111161" and "full"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Title": "The Shawshank Redemption",
      "Genre": "Crime, Drama",
      "Plot": "Andy Dufresne is a young and successful banker whose life changes drastically when he is convicted and sentenced to life imprisonment for the murder of his wife and her lover. Set in the 1940s, the film shows how Andy, with the help of his friend Red, the prison entrepreneur, turns out to be a most unconventional prisoner.",
      }
      """

  Scenario: Get movie by ID as JSON with short plot
    Given a query with movie id "tt0111161" and "short"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Title": "The Shawshank Redemption",
      "Genre": "Crime, Drama",
      "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      }
      """

  Scenario: Get movie by ID as JSON with short plot
    Given a query with movie id "tt0111161" and "short"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Title": "The Shawshank Redemption",
      "Genre": "Crime, Drama",
      "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      }
      """