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
  "duration": 229117540,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 136633476,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 17201076,
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
  "duration": 346761,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 64342070,
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
  "duration": 365741,
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
  "duration": 334450,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 51584763,
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
  "duration": 364714,
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
  "duration": 417036,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 50075123,
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
  "duration": 558613,
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
  "duration": 512447,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 53287276,
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
  "duration": 515012,
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
  "duration": 377025,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 48669613,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 298029,
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
  "duration": 405238,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 63271523,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 626836,
  "status": "passed"
});
});