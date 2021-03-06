package com.clearqa.test;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import org.json.JSONException;
import org.json.JSONObject;
import org.skyscreamer.jsonassert.JSONAssert;
import org.skyscreamer.jsonassert.JSONCompareMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import cucumber.api.java.en.*;

public class ImdbSteps {

	final Logger logger = LoggerFactory.getLogger(ImdbSteps.class);
	private String imdb_url;
	private JSONObject json_response;

	@Given("^I query movie by \"(.*)?\"$")
	public void I_query_movie_by_title(String key) throws UnsupportedEncodingException {
		imdb_url = "http://www.omdbapi.com/?t=" + URLEncoder.encode(key, "UTF-8") + "&y=&plot=short&r=json";
		System.out.println("++++++++"+imdb_url+"++++++++");
		logger.info("http query = " + imdb_url);
	}

	@Given("^I query movie by year \"(.*)?\"$")
	public void I_query_movie_by_year(String year) throws UnsupportedEncodingException {
		imdb_url = "http://www.omdbapi.com/?t=&y="+ URLEncoder.encode(year, "UTF-8") +"&plot=short&r=json";
		System.out.println("++++++++"+imdb_url+"++++++++");
		logger.info("http query = " + imdb_url);
	}

	@Given("^I query movie by '(.+)' and year '(.+)'")
  public void I_query_movie_by_title_and_year(String key, String year) throws UnsupportedEncodingException {
    imdb_url = "http://www.omdbapi.com/?t=" + URLEncoder.encode(key, "UTF-8") + "&y=" + URLEncoder.encode(year, "UTF-8") + "&plot=short&r=json";
    System.out.println("++++++++"+imdb_url+"++++++++");
    logger.info("http query = " + imdb_url);
  }

  @Given("^I query movie by '(.+)' and '(.+)'")
  public void I_query_movie_by_title_and_plot(String key1, String key2) throws UnsupportedEncodingException {
    imdb_url = "http://www.omdbapi.com/?t=" + URLEncoder.encode(key1, "UTF-8") + "&y=&plot=" + URLEncoder.encode(key2, "UTF-8") + "&r=json";
    System.out.println("++++++++"+imdb_url+"++++++++");
    logger.info("http query = " + imdb_url);
  }

  @Given("^I query movie by '(.+)' and type '(.+)'")
	public void I_query_movie_by_Star_Wars_and_type_movie(String key1, String key2) throws Throwable {
    imdb_url = "http://www.omdbapi.com/?t=" + URLEncoder.encode(key1, "UTF-8") + "&type="+ URLEncoder.encode(key2, "UTF-8") +"&y=&plot=" + URLEncoder.encode(key2, "UTF-8") + "&r=json";
    System.out.println("++++++++"+imdb_url+"++++++++");
    logger.info("http query = " + imdb_url);
	}

	@Given("^a query with movie id \"([^\"]*)\"$")
	public void a_query_with_movie_id(String id) throws Throwable {
		imdb_url = "http://www.omdbapi.com/?i=" + URLEncoder.encode(id, "UTF-8") + "&r=json";
		System.out.println("++++++++"+imdb_url+"++++++++");
		logger.info("http query = " + imdb_url);
	}

	@Given("^a query with movie id \"([^\"]*)\" and \"([^\"]*)\"$")
	public void a_query_with_movie_id_and(String id, String plotSize) throws Throwable {
		imdb_url = "http://www.omdbapi.com/?i=" + URLEncoder.encode(id, "UTF-8") + "&plot=" + URLEncoder.encode(plotSize, "UTF-8") + "&r=json";
		System.out.println("++++++++"+imdb_url+"++++++++");
		logger.info("http query = " + imdb_url);
	}

	@Given("^a query with series id \"([^\"]*)\"$")
	public void a_query_with_series_id(String id) throws Throwable {
		imdb_url = "http://www.omdbapi.com/?i=" + URLEncoder.encode(id, "UTF-8") + "&r=json";
		System.out.println("++++++++"+imdb_url+"++++++++");
		logger.info("http query = " + imdb_url);
	}

	@Given("^a query with series id \"([^\"]*)\" and \"([^\"]*)\"$")
	public void a_query_with_series_id_and(String id, String plotSize) throws Throwable {
		imdb_url = "http://www.omdbapi.com/?i=" + URLEncoder.encode(id, "UTF-8") + "&plot=" + URLEncoder.encode(plotSize, "UTF-8") + "&r=json";
		System.out.println("++++++++"+imdb_url+"++++++++");
		logger.info("http query = " + imdb_url);
	}

	@Given("^a query with wrong id \"([^\"]*)\"$")
	public void a_query_with_wrong_id(String id) throws Throwable {
		imdb_url = "http://www.omdbapi.com/?i=" + URLEncoder.encode(id, "UTF-8") + "&r=json";
		System.out.println("++++++++"+imdb_url+"++++++++");
		logger.info("http query = " + imdb_url);
	}

	@Given("^a query with title \"([^\"]*)\"$")
	public void a_query_with_title(String param) throws Throwable {
		imdb_url = "http://www.omdbapi.com/?s=" + URLEncoder.encode(param, "UTF-8") + "&r=json";
		System.out.println("++++++++"+imdb_url+"++++++++");
		logger.info("http query = " + imdb_url);
	}

	@Given("^a query with title \"([^\"]*)\" and type \"([^\"]*)\"$")
	public void a_query_with_title_and_type(String param, String type) throws Throwable {
		imdb_url = "http://www.omdbapi.com/?s=" + URLEncoder.encode(param, "UTF-8") + "&type=" + URLEncoder.encode(type, "UTF-8") + "&r=json";
		System.out.println("++++++++"+imdb_url+"++++++++");
		logger.info("http query = " + imdb_url);
	}

	@Given("^a query with title \"([^\"]*)\" and type \"([^\"]*)\" and year \"([^\"]*)\"$")
	public void a_query_with_title_and_type_and_year(String param, String type, String year) throws Throwable {
		imdb_url = "http://www.omdbapi.com/?s=" + URLEncoder.encode(param, "UTF-8") + "&type=" + URLEncoder.encode(type, "UTF-8") + "&y="+ URLEncoder.encode(year, "UTF-8") + "&r=json";
		System.out.println("++++++++"+imdb_url+"++++++++");
		logger.info("http query = " + imdb_url);
	}

	@Given("^a query with series id \"([^\"]*)\" and type \"([^\"]*)\"$")
	public void a_query_with_series_id_and_type(String id, String type) throws Throwable {
		imdb_url = "http://www.omdbapi.com/?i=" + URLEncoder.encode(id, "UTF-8") + "&type=" + URLEncoder.encode(type, "UTF-8") + "&r=json";
		System.out.println("++++++++"+imdb_url+"++++++++");
		logger.info("http query = " + imdb_url);
	}

	@Given("^a query with movie id \"([^\"]*)\" and tomatoes \"([^\"]*)\"$")
	public void a_query_with_movie_id_and_tomatoes(String id, String tomatoes) throws Throwable {
		imdb_url = "http://www.omdbapi.com/?i=" + URLEncoder.encode(id, "UTF-8") + "&tomatoes=" + URLEncoder.encode(tomatoes, "UTF-8") + "&r=json";
		System.out.println("++++++++"+imdb_url+"++++++++");
		logger.info("http query = " + imdb_url);
	}

	@When("^I make the rest call$")
	public void I_make_the_rest_call() throws IOException, JSONException {
		json_response = JsonReader.readJsonFromUrl(imdb_url);
		logger.info("Response = " + json_response.toString());
	}

	@Then("^response should contain:$")
	public void response_should_contain_JSON(String expected_json_str) throws JSONException {
		logger.info("Comparing reponse with" + expected_json_str);
		JSONObject expected_json = new JSONObject(expected_json_str);
		JSONAssert.assertEquals(expected_json, json_response, JSONCompareMode.LENIENT);
	}

	@Then("^response should contain \"(.+)\"")
	public void response_should_contain(String expecgted_json_str) throws JSONException {
		response_should_contain_JSON(expecgted_json_str);
	}

	@Then("^the response should contain:$")
	public void the_response_should_contain(String expected_json_str) throws Throwable {
		JSONObject expected_json = new JSONObject(expected_json_str);
		JSONAssert.assertEquals(expected_json, json_response, JSONCompareMode.LENIENT);
	}

}