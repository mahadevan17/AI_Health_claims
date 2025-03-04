let web3;
let contract;
const contractABI =[]

const contractAddress = "";
const connectButton = document.getElementById("connectButton");
const setGreetingButton = document.getElementById("setGreetingButton");
const getGreetingButton = document.getElementById("getGreetingButton");
const connectedAddress = document.getElementById("connectedAddress");
const currentGreeting = document.getElementById("currentGreeting");
const status = document.getElementById("status");
const newGreetingInput = document.getElementById("newGreeting");
// Connect MetaMask
connectButton.addEventListener("click", async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            const accounts = await window.ethereum.request({ method:
"eth_requestAccounts" });
            connectedAddress.innerText = `Connected Account: ${accounts[0]}`;
            contract = new web3.eth.Contract(contractABI, contractAddress);
            status.innerText = "Connected to MetaMask!";
        } catch (error) {
            status.innerText = "Error connecting to MetaMask: " +
error.message;
        }
    } else {
        status.innerText = "MetaMask is not installed!";
    }
});
// For Ganache, you can also connect directly without MetaMask:
// Get Greeting
getGreetingButton.addEventListener("click", async () => {
    if (contract) {
        try {

            const greeting = await contract.methods.getGreetings().call();
            currentGreeting.innerText = `Current Greeting: ${greeting}`;
        } catch (error) {
            status.innerText = "Error fetching greeting: " + error.message;
        }
    } else {
        status.innerText = "Please connect MetaMask first.";
    }
});
// Set Greeting
setGreetingButton.addEventListener("click", async () => {
    const newGreeting = newGreetingInput.value;
    if (contract && newGreeting !== "") {
        try {
            const accounts = await web3.eth.getAccounts();
            await contract.methods.setGreetings(newGreeting).send({
from:address[0] , gas: 3000000 });
            status.innerText = "Greeting updated successfully!";
        } catch (error) {
            status.innerText = "Error setting greeting: " + error.message;
        }
    } else {
        status.innerText = "Please connect MetaMask and enter a new greeting.";
    }
});