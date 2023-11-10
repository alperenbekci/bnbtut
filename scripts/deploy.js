// scripts/deploy.js
async function main() {
  const SecretKeyStorage = await ethers.getContractFactory("SecretKeyStorage");
  const secretKeyStorage = await SecretKeyStorage.deploy();
  await secretKeyStorage.deployed();

  console.log("SecretKeyStorage deployed to:", secretKeyStorage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
