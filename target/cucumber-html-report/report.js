$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\clearqa\\test\\imdb_rest.feature");
formatter.feature({
  "id": "imdb-rest-api-gets",
  "description": "",
  "name": "IMDB rest api gets",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "imdb-rest-api-gets;get-movie-by-title",
  "description": "",
  "name": "Get movie by title",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I query movie by \"Finding Nemo\"",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "response should contain:",
  "keyword": "Then ",
  "line": 6,
  "doc_string": {
    "value": "{\r\n\"Title\":\"Finding Nemo\",\r\n\"Genre\":\"Animation, Adventure, Comedy\",\r\n\"Year\":\"2003\"\r\n}",
    "line": 7,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Finding Nemo",
      "offset": 18
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title(String)"
});
formatter.result({
  "duration": 213142437,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 222335700,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 14730150,
  "status": "passed"
});
formatter.scenario({
  "id": "imdb-rest-api-gets;get-many-movies-by-title;no-special-characters-in-movie-titles;2",
  "description": "",
  "name": "Get many movies by title",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "I query movie by \"Finding Nemo\"",
  "keyword": "Given ",
  "line": 16,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "response should contain \"{\"Genre\":\"Animation, Adventure, Comedy\"}\"",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Finding Nemo",
      "offset": 18
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title(String)"
});
formatter.result({
  "duration": 613500,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 54567111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\":\"Animation, Adventure, Comedy\"}",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 326755,
  "status": "passed"
});
formatter.scenario({
  "id": "imdb-rest-api-gets;get-many-movies-by-title;no-special-characters-in-movie-titles;3",
  "description": "",
  "name": "Get many movies by title",
  "keyword": "Scenario Outline",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "I query movie by \"Inception\"",
  "keyword": "Given ",
  "line": 16,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "response should contain \"{\"Genre\":\"Action, Mystery, Sci-Fi\"}\"",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Inception",
      "offset": 18
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title(String)"
});
formatter.result({
  "duration": 506291,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 77173756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\":\"Action, Mystery, Sci-Fi\"}",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 713014,
  "status": "passed"
});
formatter.scenario({
  "id": "imdb-rest-api-gets;get-many-movies-by-title;special-characters-in-movie-titles;2",
  "description": "",
  "name": "Get many movies by title",
  "keyword": "Scenario Outline",
  "line": 28,
  "type": "scenario"
});
formatter.step({
  "name": "I query movie by \"WALL�E\"",
  "keyword": "Given ",
  "line": 16,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "response should contain \"{\"Genre\":\"Animation, Adventure, Family\"}\"",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "WALL�E",
      "offset": 18
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title(String)"
});
formatter.result({
  "duration": 512960,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 56004937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\":\"Animation, Adventure, Family\"}",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 375486,
  "status": "passed"
});
formatter.scenario({
  "id": "imdb-rest-api-gets;get-many-movies-by-title;special-characters-in-movie-titles;3",
  "description": "",
  "name": "Get many movies by title",
  "keyword": "Scenario Outline",
  "line": 29,
  "type": "scenario"
});
formatter.step({
  "name": "I query movie by \"8�\"",
  "keyword": "Given ",
  "line": 16,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "response should contain \"{\"Genre\": \"Mystery, Sci-Fi, Thriller\"}\"",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "8�",
      "offset": 18
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title(String)"
});
formatter.result({
  "duration": 373435,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 54551721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\": \"Mystery, Sci-Fi, Thriller\"}",
      "offset": 25
    }
  ],
  "location": "ImdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 352404,
  "status": "passed"
});
formatter.scenario({
  "id": "imdb-rest-api-gets;get-movie-by-year",
  "description": "",
  "name": "Get movie by year",
  "keyword": "Scenario",
  "line": 31,
  "type": "scenario"
});
formatter.step({
  "name": "I query movie by year \"2015\"",
  "keyword": "Given ",
  "line": 32
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When ",
  "line": 33
});
formatter.step({
  "name": "response should contain:",
  "keyword": "Then ",
  "line": 34,
  "doc_string": {
    "value": "{\r\n\"Response\":\"False\",\r\n\"Error\":\"Something went wrong\"\r\n}",
    "line": 35,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "2015",
      "offset": 23
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_year(String)"
});
formatter.result({
  "duration": 291874,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 52607605,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 586826,
  "status": "passed"
});
formatter.scenario({
  "id": "imdb-rest-api-gets;get-movie-by-title-and-year",
  "description": "",
  "name": "Get movie by title and year",
  "keyword": "Scenario",
  "line": 42,
  "type": "scenario"
});
formatter.step({
  "name": "I query movie by \u0027Star Wars\u0027 and year \u00272011\u0027",
  "keyword": "Given ",
  "line": 43
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When ",
  "line": 44
});
formatter.step({
  "name": "response should contain:",
  "keyword": "Then ",
  "line": 45,
  "doc_string": {
    "value": "{\r\n\"Title\":\"Star Wars: The Old Republic\",\r\n\"Year\":\"2011\",\r\n\"Genre\":\"Action, Adventure, Fantasy\"\r\n}",
    "line": 46,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Star Wars",
      "offset": 18
    },
    {
      "val": "2011",
      "offset": 39
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title_and_year(String,String)"
});
formatter.result({
  "duration": 424218,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 58557424,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 622220,
  "status": "passed"
});
formatter.scenario({
  "id": "imdb-rest-api-gets;get-movie-by-title-and-plot-short",
  "description": "",
  "name": "Get movie by title and plot short",
  "keyword": "Scenario",
  "line": 54,
  "type": "scenario"
});
formatter.step({
  "name": "I query movie by \u0027Madagascar\u0027 and \u0027short\u0027",
  "keyword": "Given ",
  "line": 55
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When ",
  "line": 56
});
formatter.step({
  "name": "response should contain:",
  "keyword": "Then ",
  "line": 57,
  "doc_string": {
    "value": "{\r\n\"Title\":\"Madagascar\",\r\n\"Year\":\"2005\",\r\n\"Genre\":\"Animation, Adventure, Comedy\",\r\n\"Plot\":\"Spoiled by their upbringing with no idea what wild life is really like, four animals from New York Central Zoo escape, unwittingly assisted by four absconding penguins, and find themselves in Madagascar, among a bunch of merry lemurs\"\r\n}",
    "line": 58,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Madagascar",
      "offset": 18
    },
    {
      "val": "short",
      "offset": 35
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title_and_plot(String,String)"
});
formatter.result({
  "duration": 402161,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 50722478,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 603754,
  "status": "passed"
});
formatter.scenario({
  "id": "imdb-rest-api-gets;get-movie-by-title-and-plot-full",
  "description": "",
  "name": "Get movie by title and plot full",
  "keyword": "Scenario",
  "line": 67,
  "type": "scenario"
});
formatter.step({
  "name": "I query movie by \u0027Madagascar\u0027 and \u0027full\u0027",
  "keyword": "Given ",
  "line": 68
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When ",
  "line": 69
});
formatter.step({
  "name": "response should contain:",
  "keyword": "Then ",
  "line": 70,
  "doc_string": {
    "value": "{\r\n\"Title\":\"Madagascar\",\r\n\"Year\":\"2005\",\r\n\"Genre\":\"Animation, Adventure, Comedy\",\r\n\"Plot\":\"At New York\u0027s Central Park Zoo, a lion, a zebra, a giraffe, and a hippo are best friends and stars of the show. But when one of the animals goes missing from their cage, the other three break free to look for him, only to find themselves reunited ... on a ship en route to Africa. When their vessel is hijacked, however, the friends, who have all been raised in captivity, learn first-hand what life can be like in the wild.\"\r\n}",
    "line": 71,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Madagascar",
      "offset": 18
    },
    {
      "val": "full",
      "offset": 35
    }
  ],
  "location": "ImdbSteps.I_query_movie_by_title_and_plot(String,String)"
});
formatter.result({
  "duration": 394466,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 54640464,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 947949,
  "status": "passed"
});
});