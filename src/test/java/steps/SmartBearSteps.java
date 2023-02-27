package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pages.SmartBearBasePage;
import utils.Driver;

public class SmartBearSteps {
    WebDriver driver;
    SmartBearBasePage smartBearBasePage;

    @Before
    public void setup(){
        driver = Driver.getDriver();
        smartBearBasePage = new SmartBearBasePage();
    }

    @Given("user is on {string}")
    public void userIsOn(String url) {
        driver.get(url);
    }


    @When("user enters username as {string}")
    public void userEntersUsernameAs(String userName) {
        smartBearBasePage.userNameInput.sendKeys(userName);
    }

    @And("user enters password as {string}")
    public void userEntersPasswordAs(String password) {
        smartBearBasePage.passwordInput.sendKeys(password);
    }

    @And("user clicks on Login button")
    public void userClicksOnLoginButton() {
        smartBearBasePage.loginButton.click();
    }

    @Then("user should see {string} message")
    public void userShouldSeeMessage(String message) {
        Assert.assertEquals(message, smartBearBasePage.errorMessage.getText());
    }


    @Then("user should be routed to {string}")
    public void userShouldBeRoutedTo(String url) {
        Assert.assertEquals(url, driver.getCurrentUrl());
    }
}
