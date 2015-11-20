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
  "duration": 223613996,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 159924924,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 16799943,
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
  "duration": 322652,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 75178343,
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
  "duration": 335989,
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
  "duration": 355994,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 59475109,
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
  "duration": 360611,
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
  "duration": 412420,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 50969212,
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
  "duration": 443197,
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
  "duration": 528862,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 56293733,
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
  "duration": 493468,
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
  "duration": 297517,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 51597587,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "duration": 689418,
  "status": "passed"
});
});