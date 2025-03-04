// Import ethers.js
const { ethers } = require('ethers');

// Function to generate a random Ethereum address
function generateRandomAddress() {
    // Create a random wallet
    const wallet = ethers.Wallet.createRandom();
    console.log("Address:", wallet.address);
    console.log("Private Key:", wallet.privateKey);
    console.log("Mnemonic:", wallet.mnemonic.phrase); // Optional, for recovery purposes
    console.log("----------------------");
}

// Generate multiple random addresses
function generateMultipleAddresses(count) {
    for (let i = 0; i < count; i++) {
        generateRandomAddress();
    }
}

// Example: Generate 5 random addresses
generateMultipleAddresses(5);
