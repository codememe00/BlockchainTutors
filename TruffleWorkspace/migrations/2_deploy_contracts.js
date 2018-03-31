var RegisterUsername = artifacts.require("RegisterUsername.sol");
var CreateTutor = artifacts.require("CreateTutor.sol");
var CreateStudent = artifacts.require("CreateStudent.sol");
var InvoiceGenerator = artifacts.require("InvoiceGenerator.sol");
var BlockAppsData = artifacts.require("BlockAppsData.sol");
var CreateTutor2 = artifacts.require("CreateTutor2.sol");

module.exports = function (deployer) {
  deployer.deploy(RegisterUsername, "Username TEST");
  deployer.deploy(CreateTutor);
  deployer.deploy(CreateStudent);
  deployer.deploy(InvoiceGenerator);
  
  //You may want to change these to and address you control 
  deployer.deploy(BlockAppsData, "0x2e874B4997D5074c6E39729cD27d20166CEB1bf7");
  deployer.deploy(CreateTutor2, "0x2e874B4997D5074c6E39729cD27d20166CEB1bf7");
};