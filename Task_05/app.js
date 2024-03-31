const express = require('express');
const Web3 = require('web3');

// Initialize Express app
const app = express();

// Initialize Web3 with a provider
const web3 = new Web3(`https://mainnet.infura.io/v3/your_infura_project_id/${process.env.INFURA_PROJECT_ID}`);

// Define API route to retrieve Ethereum account balance
app.get('/balance/:address', async (req, res) => {
  try {
    const address = req.params.address;
    
    // Check if the address is valid
    if (!web3.utils.isAddress(address)) {
      return res.status(400).json({ error: 'Invalid Ethereum address' });
    }

    // Retrieve balance for the specified address
    const balance = await web3.eth.getBalance(address);
    
    // Convert balance from wei to ether
    const balanceInEther = web3.utils.fromWei(balance, 'ether');

    res.json({ balance: balanceInEther });
  } catch (error) {
    console.error('Error retrieving balance:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
