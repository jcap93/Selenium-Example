$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava\cucumberJava.feature');
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login functionality exists",
  "description": "",
  "id": "cucumberjava;login-functionality-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I open NetSuite website",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Login button should exits",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.openBrowser()"
});
formatter.result({
  "duration": 6956916300,
  "status": "passed"
});
formatter.match({
  "location": "annotation.goToFacebook()"
});
formatter.result({
  "duration": 4306379700,
  "status": "passed"
});
formatter.match({
  "location": "annotation.loginButton()"
});
formatter.result({
  "duration": 303771100,
  "status": "passed"
});
});