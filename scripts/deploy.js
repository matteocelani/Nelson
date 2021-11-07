const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('Nelson');
    const gameContract = await gameContractFactory.deploy(
        ["Bart", "Milhouse", "Ralph"],       // Names
        ["https://i.imgur.com/qoGyY8B.gif", // Images
            "https://i.imgur.com/Oucy6nF.gif",
            "https://i.imgur.com/lOG5TTX.gif"],
        [500, 300, 200],                    // HP values
        [100, 75, 125],                     // Attack damage values
        "Nelson Muntz",                     // Boss name
        "https://i.imgur.com/yYWsyUS.gif",  // Boss image
        10000,                              // Boss hp
        50                                  // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();