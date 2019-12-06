const { Builder, By, Key, util } = require("selenium-webdriver");
var assert = require('assert');

async function kuis2() {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
  await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
  await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms");
  await driver.findElement(By.name("Submit")).click();

  let getValue = await driver.findElement(By.xpath('//li')).getText();
  console.log(getValue);
  assert.equal(50, 70, 'error');

  //await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
}
kuis2();