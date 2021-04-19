// const Migrations = artifacts.require("Migrations");
const PrivacyToken = artifacts.require("PrivacyToken");

module.exports = async function (deployer) {
  // await deployer.deploy(Migrations);

  await deployer.deploy(PrivacyToken);


};
