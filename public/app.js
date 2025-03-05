const Web3 = require('web3'); 

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// Replace with your contract's ABI present in hadhatdeployment\artifacts\contracts\SimpleStorage.sol\SimpleStorage.json
//**************The CONTRACT ABI is in folder hadhatdeployment\artifacts\contracts\SimpleStorage.sol\SimpleStorage.json***************
const contractABI = []; 
//*************************THERE ARE TWO CONTRACTS SO NEED TO INITIALIZE 2 CONTRACTS ************************************/
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

async function PresciptionCreation(patientid,drug1,drug2,drug3) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.PresciptionCreation(patientid,drug1,drug2,drug3).send({ from: accounts[1] });
}

async function PharmacySelection(value) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.Pharmacies_Selection(value).send({ from: accounts[1] });
}

async function PharmacyApproval(value) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.PharmacyApproval(value).send({ from: accounts[1] });
}

async function InsuranceApprovalRequest(value) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.RequestInsuranceApproval(value).send({ from: accounts[1] });
}

async function InsuranceApproval(pharmacyid,patientid) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.RequestInsuranceApproval(pending,pharmacyid,patientid).send({ from: accounts[1] });
}

async function medicine_preparation(value) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.MedicationPreparetion(value).send({ from: accounts[1] });
}

async function medicine_collection(value) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.MedicationCollection(value).send({ from: accounts[1] });
}

async function requestpayment(invoiceid,totalcost) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.PaymentRequest(invoiceid,totalcost).send({ from: accounts[1] });
}

async function Claimpayment(value) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.ClaimPayment(value).send({ from: accounts[1] });
}

//FOR CONTRACT REGISTRATION
document.getElementById('Physician_Registration').addEventListener('click', PhysiciansRegistration);
document.getElementById('Patient_Registration').addEventListener('click', PatientsRegistration);
document.getElementById('InsuranceCompanyRegistration').addEventListener('click', InsuranceCompaniesRegistration);
document.getElementById('Pharmacy_Registration').addEventListener('click', PharmaciesRegistration);

//FOR CONTRACT APPROVAL
document.getElementById('createpresciption').addEventListener('click', () => {
  let patientID=document.getElementById('Patient_id').value;
  let drug1=document.getElementById('Drug1').value;
  let drug2=document.getElementById('Drug2').value;
  let drug3=document.getElementById('Drug3').value;
  PresciptionCreation(patientID,drug1,drug2,drug3) });

  //pharmacy selection********************************

  //document.getElementById('Pharmacy_Registration').addEventListener('click', PharmaciesRegistration);

  //pharmacy approval
  document.getElementById('approvepharmacy').addEventListener('click',PharmacyApproval);

  //request insurance approval
  document.getElementById('requestapproval').addEventListener('click', () => {
    patientID=document.getElementById('Patient_id_').value;
    drug1=document.getElementById('Drug1_').value;
    drug2=document.getElementById('Drug2_').value;
    drug3=document.getElementById('Drug3_').value;
    InsuranceApprovalRequest(patientID,drug1,drug2,drug3) });

// insurance approval
document.getElementById('approval').addEventListener('click', () => {
  let pharmacyid=document.getElementById('pharmacy_ID').value;
  patientID=document.getElementById('patientID').value; 
  InsuranceApproval(pharmacyid,patientID) });

// medicine preparation
document.getElementById('preparemedicine').addEventListener('click',medicine_preparation);

//medicine collection
document.getElementById('medicinecollect').addEventListener('click',medicine_collection);

//request payment
document.getElementById('requestpayment').addEventListener('click',()=>{
  let invoiceid=document.getElementById('medicineinvoiceid').value;
  let totalcost=document.getElementById('medicinecost').value;
  requestpayment(invoiceid,totalcost) });

//claim payment
document.getElementById('paymentclaim').addEventListener('click',Claimpayment);



/*// Event listeners for buttons
//this is for puting(sending) value
document.getElementById('getButton').addEventListener('click', getString);

//this is for geting(receiving) and displaying value
document.getElementById('putButton').addEventListener('click', () => {
const value = document.getElementById('inputString').value;
  setString(value);
});*/