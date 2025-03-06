const Web3 = require('web3'); 

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// Replace with your contract's ABI present in hadhatdeployment\artifacts\contracts\SimpleStorage.sol\SimpleStorage.json
//**************The CONTRACT ABI is in folder hadhatdeployment\artifacts\contracts\SimpleStorage.sol\SimpleStorage.json***************
//*************************THERE ARE TWO CONTRACTS SO NEED TO INITIALIZE 2 CONTRACTS ************************************/
// Replace with your deployed contract's address
const Registration_contractABI = [{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "insuranceCompany",
      "type": "address"
    }
  ],
  "name": "InsuranceCompanyRegistered",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "patient",
      "type": "address"
    }
  ],
  "name": "PatientRegistered",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "pharmacy",
      "type": "address"
    }
  ],
  "name": "PharmacyRegistered",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "physician",
      "type": "address"
    }
  ],
  "name": "PhysicianRegistered",
  "type": "event"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "_insuranceCompany",
      "type": "address"
    }
  ],
  "name": "InsuranceCompanyRegistration",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "_patient",
      "type": "address"
    }
  ],
  "name": "PatientRegistration",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "_pharmacy",
      "type": "address"
    }
  ],
  "name": "PharmacyRegistration",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "_Physician",
      "type": "address"
    }
  ],
  "name": "PhysicianRegistration",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "name": "insuranceCompanies",
  "outputs": [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "name": "patients",
  "outputs": [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "name": "pharmacies",
  "outputs": [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "name": "physicians",
  "outputs": [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "regulatory_authority",
  "outputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "stateMutability": "view",
  "type": "function"
}]; 
const Registration_contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const Approval_contractABI=[{
  "inputs": [
    {
      "internalType": "address",
      "name": "_reg_contract_address",
      "type": "address"
    }
  ],
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "internalType": "address",
      "name": "Insurance_Company",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "medicationinvoiceID",
      "type": "uint256"
    }
  ],
  "name": "ClaimPaid",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "internalType": "address",
      "name": "_pharmacy",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "medicationinvoiceID",
      "type": "uint256"
    }
  ],
  "name": "PaymentRequested",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "pharmacy",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "status",
      "type": "uint256"
    }
  ],
  "name": "PharmacyApprovalStateChanged",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "patient",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "selectionCount",
      "type": "uint256"
    }
  ],
  "name": "PharmacySelected",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "Physician",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "PatientID",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "bytes32",
      "name": "_IPFShash",
      "type": "bytes32"
    }
  ],
  "name": "PrescriptionCreated",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "internalType": "address",
      "name": "Insurance_Company",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "insuranceApprovalstatus",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "PatientID",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "_Pharmacyaddress",
      "type": "address"
    }
  ],
  "name": "RequestApproval",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "internalType": "address",
      "name": "_pharmacy",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "PatientID",
      "type": "uint256"
    }
  ],
  "name": "RequestInsuranceApprovalStateChanged",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "internalType": "address",
      "name": "Insurance_Company",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "insuranceApprovalstatus",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "PatientID",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "_Pharmacyaddress",
      "type": "address"
    }
  ],
  "name": "RequestRejection",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "internalType": "address",
      "name": "Patient",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "PatientID",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "bytes32",
      "name": "_IPFShash",
      "type": "bytes32"
    }
  ],
  "name": "medicationcollected",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "internalType": "address",
      "name": "_pharmacy",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "PatientID",
      "type": "uint256"
    }
  ],
  "name": "medicationisprepread",
  "type": "event"
},
{
  "inputs": [],
  "name": "ApprovalState",
  "outputs": [
    {
      "internalType": "enum Approval.ApprovalRequestState",
      "name": "",
      "type": "uint8"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "_medicationinvoiceID",
      "type": "uint256"
    }
  ],
  "name": "ClaimPayment",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
},
{
  "inputs": [],
  "name": "Drug1CRN",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "Drug2CRN",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "Drug3CRN",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "DrugTotalCost",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "IPFShash",
  "outputs": [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "enum Approval.InsuranceApprovalState",
      "name": "_insApproval",
      "type": "uint8"
    },
    {
      "internalType": "address",
      "name": "_Pharmacy",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "patient_",
      "type": "uint256"
    }
  ],
  "name": "InsuranceApproval",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "InsuranceApprovalstate",
  "outputs": [
    {
      "internalType": "enum Approval.InsuranceApprovalState",
      "name": "",
      "type": "uint8"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "patient_",
      "type": "uint256"
    }
  ],
  "name": "MedicationCollection",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "MedicationInvoice_ID",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "patient_",
      "type": "uint256"
    }
  ],
  "name": "MedicationPreparation",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "MedicineCollectionstate",
  "outputs": [
    {
      "internalType": "enum Approval.MedicineCollectionState",
      "name": "",
      "type": "uint8"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "PaidAmount",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "Patient_ID",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "MedicationInvoiceId_",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "Drugtotalcost",
      "type": "uint256"
    }
  ],
  "name": "PaymentRequest",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "name": "Paymentstate",
  "outputs": [
    {
      "internalType": "enum Approval.PaymentState",
      "name": "",
      "type": "uint8"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "name": "PharmaciesSelection",
  "outputs": [
    {
      "internalType": "address",
      "name": "registeredPharmacy",
      "type": "address"
    },
    {
      "internalType": "bool",
      "name": "isSelected",
      "type": "bool"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "Pharmacy_",
      "type": "address"
    }
  ],
  "name": "Pharmacies_Selection",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "Patient_",
      "type": "address"
    }
  ],
  "name": "PharmacyApproval",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "Patient_Id",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "Drug1CRN_",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "Drug2CRN_",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "Drug3CRN_",
      "type": "uint256"
    },
    {
      "internalType": "string",
      "name": "IPFShash_",
      "type": "string"
    }
  ],
  "name": "PrescriptionCreation",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "Patient_",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "Drug1CRN_",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "Drug2CRN_",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "Drug3CRN_",
      "type": "uint256"
    }
  ],
  "name": "RequestInsuranceApproval",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "name": "selectionCounter",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
    }
  ];
const Approval_contractAddress='xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'



// Create Registration contract instance
const RegistrationContract = new web3.eth.Contract(Registration_contractABI, Registration_contractAddress);
// Create  Approval contract instance
const ApprovalContract = new web3.eth.Contract(Approval_contractABI, Approval_contractAddress);

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
    await RegistrationContract.methods.PhysicianRegistration(value).send({ from: accounts[0] });
}

async function InsuranceCompaniesRegistration(value) {
    const accounts = await web3.eth.getAccounts();
    await RegistrationContract.methods.InsuranceCompanyRegistration(value).send({ from: accounts[0] });
}
async function PharmaciesRegistration(value) {
    const accounts = await web3.eth.getAccounts();
    await RegistrationContract.methods.PharmacyRegistration(value).send({ from: accounts[0] });
}

async function PatientsRegistration(value) {
    const accounts = await web3.eth.getAccounts();
    await RegistrationContract.PatientRegisteration(value).send({ from: accounts[0] });
}


//APPROVAL************************************************
async function PresciptionCreation(patientid,drug1,drug2,drug3) {
  const accounts = await web3.eth.getAccounts();
  await ApprovalContract.methods.PresciptionCreation(patientid,drug1,drug2,drug3).send({ from: accounts[1] });
}

async function PharmacySelection(value) {
  const accounts = await web3.eth.getAccounts();
  await ApprovalContract.methods.Pharmacies_Selection(value).send({ from: accounts[1] });
}

async function PharmacyApproval(value) {
  const accounts = await web3.eth.getAccounts();
  await ApprovalContract.methods.PharmacyApproval(value).send({ from: accounts[1] });
}

async function InsuranceApprovalRequest(value) {
  const accounts = await web3.eth.getAccounts();
  await ApprovalContract.methods.RequestInsuranceApproval(value).send({ from: accounts[1] });
}

async function InsuranceApproval(pharmacyid,patientid) {
  const accounts = await web3.eth.getAccounts();
  await ApprovalContract.methods.RequestInsuranceApproval(pending,pharmacyid,patientid).send({ from: accounts[1] });
}

async function medicine_preparation(value) {
  const accounts = await web3.eth.getAccounts();
  await ApprovalContract.methods.MedicationPreparetion(value).send({ from: accounts[1] });
}

async function medicine_collection(value) {
  const accounts = await web3.eth.getAccounts();
  await ApprovalContract.methods.MedicationCollection(value).send({ from: accounts[1] });
}

async function requestpayment(invoiceid,totalcost) {
  const accounts = await web3.eth.getAccounts();
  await ApprovalContract.methods.PaymentRequest(invoiceid,totalcost).send({ from: accounts[1] });
}

async function Claimpayment(value) {
  const accounts = await web3.eth.getAccounts();
  await ApprovalContract.methods.ClaimPayment(value).send({ from: accounts[1] });
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
