const { Builder, By, Key, util } = require("selenium-webdriver");

async function kuis2() {
  let driver = await new Builder().forBrowser("firefox").build();
  let assert = require("assert");

  try{
    await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
    await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms");
    await driver.findElement(By.name("Submit")).click();
    const Test = await driver.findElement(By.xpath("//li")).getText();
    assert.equal(Test, "Welcome Admin", "Tes Gagal");
    console.log("Test Berhasil");
  }
  catch(error){
    console.log("Test Gagal");
  }

  //await driver.findElement(By.xpath('//li')).sendKeys("Welcome Admin");
  //console.log("Test sukses");
  
  //await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
}
kuis2();