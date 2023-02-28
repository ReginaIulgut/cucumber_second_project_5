$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/smartbear.feature");
formatter.feature({
  "name": "Validating SmartBear Page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate adding new order",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Adding"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSteps.userEntersUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.userEntersPasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.userClicksOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSteps.userShouldBeRoutedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Order menu item",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearSteps.userClicksOnMenuItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"FamilyAlbum\" as product",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.userSelectsAsProduct(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"2\" as quantity",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.userEntersAsQuantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters all address information",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.userEntersAllAddressInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters all payment information",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.userEntersAllPaymentInformation()"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: Invalid element of type \"input\" provided. Should be \"table\"\n\tat co.boorse.seleniumtable.SeleniumTableImpl.\u003cinit\u003e(SeleniumTableImpl.java:27)\n\tat co.boorse.seleniumtable.SeleniumTable.getInstance(SeleniumTable.java:19)\n\tat utils.TableHandler.getAllRows(TableHandler.java:31)\n\tat utils.TableHandler.getRow(TableHandler.java:36)\n\tat utils.TableHandler.getCells(TableHandler.java:54)\n\tat utils.TableHandler.selectRadioBtnByVisibleText(TableHandler.java:57)\n\tat steps.SmartBearSteps.userEntersAllPaymentInformation(SmartBearSteps.java:126)\n\tat ✽.user enters all payment information(src/test/resources/features/smartbear.feature:46)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Process button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.userClicksOnProcessButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on View all orders menu item",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.userClicksOnViewAllOrdersMenuItem()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see their order displayed in the “List of All Orders” table",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearSteps.userShouldSeeTheirOrderDisplayedInTheListOfAllOrdersTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate all information entered displayed correct with the order",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearSteps.validateAllInformationEnteredDisplayedCorrectWithTheOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});