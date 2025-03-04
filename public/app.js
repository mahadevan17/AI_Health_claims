const Web3 = require('web3'); 

// Connect to Ganache
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// Replace with your contract's ABI present in hadhatdeployment\artifacts\contracts\SimpleStorage.sol\SimpleStorage.json
//**************The CONTRACT ABI is in folder hadhatdeployment\artifacts\contracts\SimpleStorage.sol\SimpleStorage.json***************
const contractABI = []; 

// Replace with your deployed contract's address
const contractAddress = '';

// Create contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Connection status element
const connectionStatus = document.getElementById('connection-status');

// Check if connected to Ganache
web3.eth.getAccounts()
  .then(accounts => {
    if (accounts.length > 0) {
      connectionStatus.innerText = `Connected to Ganache: ${accounts.length} account(s) found.`;
      connectionStatus.style.color = 'green';
    } else {
      connectionStatus.innerText = 'No accounts found. Please check Ganache.';
      connectionStatus.style.color = 'red';
    }
  })
  .catch(error => {
    console.error('Error connecting to Ganache:', error);
    connectionStatus.innerText = 'Error connecting to Ganache. Please ensure it is running.';
    connectionStatus.style.color = 'red';
  });

// Function to store a string
async function setString(value) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.set(value).send({ from: accounts[0] });
}

// Function to retrieve a string
async function getString() {
  const result = await contract.methods.get().call();
  console.log('Retrieved string:', result);
  document.getElementById('output').innerText = result;
}

// Event listeners for buttons
document.getElementById('getButton').addEventListener('click', getString);
document.getElementById('putButton').addEventListener('click', () => {
  const value = document.getElementById('inputString').value;
  setString(value);
});