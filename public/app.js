const Web3 = require('web3'); 

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
    connectionStatus.innerText = 'Error connecting to ethereum node. Please ensure it is running.';
    connectionStatus.style.color = 'red';
  });

// All registration functions

async function PhysiciansRegistration(value) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.PhysicianRegistration(value).send({ from: accounts[0] });
}

async function InsuranceCompaniesRegistration(value) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.InsuranceCompanyRegistration(value).send({ from: accounts[0] });
}
async function PharmaciesRegistration(value) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.PharmacyRegistration(value).send({ from: accounts[0] });
}

async function PatientsRegistration(value) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.PatientRegisteration(value).send({ from: accounts[0] });
}


document.getElementById('Physician_Registration').addEventListener('click', PhysiciansRegistration);
document.getElementById('Patient_Registration').addEventListener('click', PatientsRegistration);
document.getElementById('InsuranceCompanyRegistration').addEventListener('click', InsuranceCompaniesRegistration);
document.getElementById('Pharmacy_Registration').addEventListener('click', PharmaciesRegistration);
// Event listeners for buttons
//this is for puting(sending) value
document.getElementById('getButton').addEventListener('click', getString);

//this is for geting(receiving) and displaying value
document.getElementById('putButton').addEventListener('click', () => {
const value = document.getElementById('inputString').value;
  setString(value);
});