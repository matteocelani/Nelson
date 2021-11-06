const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('Nelson');
    const gameContract = await gameContractFactory.deploy(
        ["Bart", "Milhouse", "Ralph"],       // Names
        ["https://i.imgur.com/qoGyY8B.gif", // Images
            "https://i.imgur.com/Oucy6nF.gif",
            "https://i.imgur.com/lOG5TTX.gif"],
        [500, 300, 200],                    // HP values
        [100, 75, 125]                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");
  
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2");
  
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");
  
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #4");
  
    console.log("Done deploying and minting!");
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