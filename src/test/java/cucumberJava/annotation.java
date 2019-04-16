package cucumberJava;

 
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
 
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
 
public class annotation {
   WebDriver driver = null;
     
   @Given("^I have open the browser$")
   public void openBrowser() {
	   System.setProperty("webdriver.chrome.driver", "chromedriver");
      driver = new ChromeDriver();
   }
     
   @When("^I open NetSuite website$")
   public void goToFacebook() {
      driver.navigate().to("https://system.netsuite.com");
   }
     
   @Then("^Login button should exits$")
   public void loginButton() {
      if(driver.findElement(By.id("submitButton")).isEnabled()) {
         System.out.println("Test 1 Pass");
      } else {
         System.out.println("Test 1 Fail");
      }
      driver.close();
   }
}