



    const PrivacySwap = artifacts.require("PrivacySwap");
    const MasterChef = artifacts.require("MasterChef");
    
    let devAddress = "0x8b9CcC481ACf318843b0AE4a61014658Efa43EBF"
    let divFeeAddress = devAddress;
    let rewardPerBlock = web3.utils.toWei('10000');
    let startBlockTime = 6658440;



    module.exports = async function(deployer) {
  

        //DEV1 
      await deployer.deploy(PrivacySwap);
      const prvInstance = await PrivacySwap.deployed();
      await prvInstance.mint(devAddress, web3.utils.toWei('10000'));

      
      await deployer.deploy(MasterChef,prvInstance.address,
        devAddress,
        divFeeAddress,
        rewardPerBlock,
        startBlockTime);
    

      // const MasterChefInstance = await MasterChef.deployed()    
      // await deployer.deploy(LotteryNFT);
      // const LotteryNFTInstance = await LotteryNFT.deployed()    


      // await deployer.deploy(Lottery,
      //   prvInstance.address,
      //   LotteryNFTInstance.address,
      //   lotteryPrice,
      //   maxNumber,
      //   devAddress

      //   );


        // await LotteryNFTInstance.transferOwnership(Lottery.address)



      

      await prvInstance.transferOwnership(MasterChef.address);



    
    
    
    
    
    };
