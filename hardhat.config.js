require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// hardhat.config.js
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {},
    ropsten: {
      url: "YOUR_INFURA_ROPSTEN_URL", // Infura veya Alchemy gibi bir Ethereum node sağlayıcısının URL'sini kullanın
      accounts: ["YOUR_PRIVATE_KEY"], // Kontratı yayınlamak için kullanılacak özel anahtar
    },
  },
};
