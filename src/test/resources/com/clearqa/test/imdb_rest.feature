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

  Scenario: Get movie by title and type
    Given I query movie by 'Star Wars' and type 'movie'
    When I make the rest call
    Then the response should contain:
      """
      {
      "Title":"Star Wars: Episode IV - A New Hope",
      "Year":"1977",
      "Genre":"Action, Adventure, Fantasy",
      "Type":"movie"
      }
      """

  Scenario: Get movie by title and tomatoes
    Given I query movie by 'Star Wars' and tomatoes 'true'
    When I make the rest call
    Then the response should contain:
      """
      {
      "Title":"Star Wars: Episode IV - A New Hope",
      "Year":"1983",
      "Genre":"Action, Adventure, Sci-Fi",
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
    Given a query with series id "tt2575988"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Title":"Silicon Valley",
      "Genre":"Comedy",
      "Plot":"In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. A comedy partially inspired by Mike Judge's own ..."
      }
      """

  Scenario: Get series episode by ID as JSON
    Given a query with series id "tt4185454" and type "episode"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Title": "Binding Arbitration",
      "Year": "2015",
      "Plot": "Erlich demands to be put on stand as Pied Piper and Hooli enter Arbitration. Richard faces a moral dilemma now that he realizes that Hooli's claim may have successful potential. Meanwhile ...",
      }
      """

  Scenario: Get series by ID as JSON with full plot
    Given a query with series id "tt2575988" and "full"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Title":"Silicon Valley",
      "Genre":"Comedy",
      "Plot":"In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. A comedy partially inspired by Mike Judge's own experiences as a Silicon Valley engineer in the late 1980s."
      }
      """

  Scenario: Get movie by ID with tomatoes data
    Given a query with movie id "tt0068646" and tomatoes "true"
    When I make the rest call
    Then the response should contain:
    """
    {
    "Title": "The Godfather",
    "Year": "1972",
    "Rated": "R",
    "Released": "24 Mar 1972",
    "Runtime": "175 min",
    "Metascore": "100",
    "imdbRating": "9.2",
    "imdbVotes": "1,061,364",
    "imdbID": "tt0068646",
    "tomatoMeter": "99",
    "tomatoImage": "certified",
    "tomatoRating": "9.2",
    "tomatoReviews": "84",
    "tomatoFresh": "83",
    "tomatoRotten": "1",
    "tomatoConsensus": "One of Hollywood's greatest critical and commercial successes, The Godfather gets everything right; not only did the movie transcend expectations, it established new benchmarks for American cinema.",
    "tomatoUserMeter": "98",
    "tomatoUserRating": "4.4",
    "tomatoUserReviews": "725999",
    "DVD": "09 Oct 2001",
    "Production": "Paramount Pictures",
    "Response": "True"
    }
    """

  Scenario: Get series by ID as JSON with short plot
    Given a query with series id "tt2575988" and "short"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Title":"Silicon Valley",
      "Genre":"Comedy",
      "Plot":"In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. A comedy partially inspired by Mike Judge's own ..."
      }
      """

  Scenario: Get wrong message
    Given a query with wrong id "somethingwrong"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Response": "False",
      "Error": "Incorrect IMDb ID"
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
# search using the 's' parameter

  Scenario: Get array of results
    Given a query with title "shawshank"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Search": [
      {
      "Title": "The Shawshank Redemption",
      "Year": "1994",
      "imdbID": "tt0111161",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
      },
      {
      "Title": "The Shawshank Redemption",
      "Year": "1994",
      "imdbID": "tt0111161",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
      },
      {
      "Title": "Shawshank: The Redeeming Feature",
      "Year": "2001",
      "imdbID": "tt0293927",
      "Type": "movie",
      "Poster": "N/A"
      },
      {
      "Title": "Hope Springs Eternal: A Look Back at 'The Shawshank Redemption'",
      "Year": "2004",
      "imdbID": "tt0443041",
      "Type": "movie",
      "Poster": "N/A"
      },
      {
      "Title": "The Shawshank Reflection",
      "Year": "2015",
      "imdbID": "tt3882670",
      "Type": "movie",
      "Poster": "N/A"
      },
      {
      "Title": "The Shawshank Redemption (Scene)",
      "Year": "2012",
      "imdbID": "tt2477746",
      "Type": "movie",
      "Poster": "N/A"
      }
      ]
      }
      """

  Scenario: Get movie not found response
    Given a query with title "aksjdhasljdask"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Response": "False",
      "Error": "Movie not found!"
      }
      """

  Scenario: Get array of movies
    Given a query with title "silicon" and type "movie"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Search": [
      {
      "Title": "Pirates of Silicon Valley",
      "Year": "1999",
      "imdbID": "tt0168122",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU1NTE3MjAwNF5BMl5BanBnXkFtZTcwNjEyOTkyMQ@@._V1_SX300.jpg"
      },
      {
      "Title": "Crying... Silicon Tears",
      "Year": "2001",
      "imdbID": "tt0298954",
      "Type": "movie",
      "Poster": "N/A"
      },
      {
      "Title": "Silicon Towers",
      "Year": "1999",
      "imdbID": "tt0186547",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTI4NTE0MDY2NF5BMl5BanBnXkFtZTcwODcyNDAzMQ@@._V1_SX300.jpg"
      },
      {
      "Title": "Bill Maher: CrazyStupidPolitics - Live from Silicon Valley",
      "Year": "2012",
      "imdbID": "tt2266679",
      "Type": "movie",
      "Poster": "N/A"
      },
      {
      "Title": "Doctor Silicon",
      "Year": "2008",
      "imdbID": "tt1672618",
      "Type": "movie",
      "Poster": "N/A"
      },
      {
      "Title": "Silicon Valley Timelapse",
      "Year": "2008",
      "imdbID": "tt1254346",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMyNjgwMTcyMl5BMl5BanBnXkFtZTcwNjAxODc3MQ@@._V1_SX300.jpg"
      },
      {
      "Title": "Secrets of Silicon Valley",
      "Year": "2001",
      "imdbID": "tt0282948",
      "Type": "movie",
      "Poster": "N/A"
      },
      {
      "Title": "Silicon Valley",
      "Year": "2005",
      "imdbID": "tt0403503",
      "Type": "movie",
      "Poster": "N/A"
      },
      {
      "Title": "Silicon Follies",
      "Year": "2001",
      "imdbID": "tt0310152",
      "Type": "movie",
      "Poster": "N/A"
      },
      {
      "Title": "Silicon Sensorium",
      "Year": "2005",
      "imdbID": "tt0499253",
      "Type": "movie",
      "Poster": "N/A"
      }
      ]
      }
      """

  Scenario: Get array of movies
    Given a query with title "silicon" and type "movie" and year "1999"
    When I make the rest call
    Then the response should contain:
      """
      {
      "Search": [
      {
      "Title": "Pirates of Silicon Valley",
      "Year": "1999",
      "imdbID": "tt0168122",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU1NTE3MjAwNF5BMl5BanBnXkFtZTcwNjEyOTkyMQ@@._V1_SX300.jpg"
      },
      {
      "Title": "Silicon Towers",
      "Year": "1999",
      "imdbID": "tt0186547",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTI4NTE0MDY2NF5BMl5BanBnXkFtZTcwODcyNDAzMQ@@._V1_SX300.jpg"
      },
      {
      "Title": "Silicon Valley",
      "Year": "1999",
      "imdbID": "tt2892336",
      "Type": "movie",
      "Poster": "N/A"
      },
      {
      "Title": "Spirit of Silicon Valley",
      "Year": "1999",
      "imdbID": "tt0498934",
      "Type": "movie",
      "Poster": "N/A"
      }
      ]
      }
      """

