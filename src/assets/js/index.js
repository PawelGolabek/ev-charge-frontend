
const abi = [
  {
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
        "name": "clientAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "chargerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "demand",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isAuthorized",
        "type": "bool"
      }
    ],
    "name": "ChargingAuthorized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "clientAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "totalCost",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "chargerOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "chargerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "demand",
        "type": "uint32"
      }
    ],
    "name": "ChargingCompleted",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_chargerAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_pricePerKWh",
        "type": "uint256"
      }
    ],
    "name": "addCharger",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      },
      {
        "internalType": "enum EVCharge.Role",
        "name": "_role",
        "type": "uint8"
      },
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "addUser",
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
    "name": "chargers",
    "outputs": [
      {
        "internalType": "address",
        "name": "chargerAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "pricePerKWh",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "chargingSessions",
    "outputs": [
      {
        "internalType": "address",
        "name": "clientAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "chargerAddress",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "totalCost",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "demand",
        "type": "uint32"
      },
      {
        "internalType": "bool",
        "name": "isCompleted",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "chargerOwner",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "checkMyBalance",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "checkMyContribution",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_clientAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_chargerAddress",
        "type": "address"
      }
    ],
    "name": "completeCharging",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "conversionRate",
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
    "name": "getAllChargingSessions",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "clientAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "chargerAddress",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "totalCost",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "demand",
            "type": "uint32"
          },
          {
            "internalType": "bool",
            "name": "isCompleted",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "chargerOwner",
            "type": "address"
          }
        ],
        "internalType": "struct EVCharge.ChargingSession[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllUsers",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      },
      {
        "internalType": "uint8[]",
        "name": "",
        "type": "uint8[]"
      },
      {
        "internalType": "int256[]",
        "name": "",
        "type": "int256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_client",
        "type": "address"
      }
    ],
    "name": "getClientNonce",
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
    "name": "getServerNonce",
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
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getUserNonce",
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
    "name": "increaseBalance",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "initialAdmin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "hash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "isAdminSignatureValid",
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
        "name": "_clientAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_chargerAddress",
        "type": "address"
      }
    ],
    "name": "isChargingSessionActive",
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
    "name": "serverNonces",
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
        "name": "_newRate",
        "type": "uint256"
      }
    ],
    "name": "setConversionRate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "userAddresses",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
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
    "name": "userNonces",
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
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      },
      {
        "internalType": "enum EVCharge.Role",
        "name": "role",
        "type": "uint8"
      },
      {
        "internalType": "int256",
        "name": "balance",
        "type": "int256"
      },
      {
        "internalType": "uint32",
        "name": "contribution",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_clientAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_chargerAddress",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_demand",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "_clientNonce",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_serverNonce",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_clientSignature",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "_serverSignature",
        "type": "bytes"
      }
    ],
    "name": "validateClient",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

let web3;
let contract;
const contractAddress2 = '0x5fbdb2315678afecb367f032d93f642f64180aa3'; // Zastąp adresem swojego kontraktu
let provider;
let signer;

async function Connect() {
  if (window.ethereum) {
      try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          provider = new ethers.providers.Web3Provider(window.ethereum);
          signer = provider.getSigner();
          contract = new ethers.Contract(contractAddress2, abi, signer);
          console.log("Połączono z kontraktem");
    //      document.getElementById("resultOutput").textContent = "Połączono z kontraktem";
          const button = document.getElementById("connect");
          button.disabled = true;
          button.style.pointerEvents = "none";
          button.style.backgroundColor = "#d3d3d3";  // Grey out the button
          button.style.color = "#a9a9a9";  // Change text color to a lighter grey
          
      } catch (error) {
          console.error("Błąd połączenia:", error);
      //    document.getElementById("resultOutput").textContent = "Błąd połączenia";
      }
  } else {
      alert("MetaMask nie został wykryty.");
  }
}


async function signAndSendUserFromInput() {
  const userAddress = document.getElementById("userAddress").value;
  const role = parseInt(document.getElementById("role").value, 10);
  if (!userAddress || isNaN(role)) {
      console.error("Nieprawidłowe dane wejściowe");
      document.getElementById("resultOutput").textContent = "Nieprawidłowe dane wejściowe";
      return;
  }
  const messageHash = ethers.utils.solidityKeccak256(['address', 'uint8'], [userAddress, role]);
  const signature = await signer.signMessage(ethers.utils.arrayify(messageHash));
  try {
      const tx = await contract.addUser(userAddress, role, signature);
      await tx.wait();
      console.log("Użytkownik dodany pomyślnie");
      document.getElementById("resultOutput").textContent = "Użytkownik dodany pomyślnie";
  } catch (error) {
      console.error("Błąd przy dodawaniu użytkownika:", error);
      document.getElementById("resultOutput").textContent = "Błąd przy dodawaniu użytkownika";
  }
}

async function addChargerTestFromInput() {
  const chargerAddress = document.getElementById("chargerAddress").value;
  const pricePerKWh = parseFloat(document.getElementById("pricePerKWh").value);
  if (!chargerAddress || isNaN(pricePerKWh)) {
      console.error("Nieprawidłowe dane wejściowe");
      document.getElementById("resultOutput").textContent = "Nieprawidłowe dane wejściowe";
      return;
  }
  try {
      const tx = await contract.addCharger(chargerAddress, pricePerKWh);
      await tx.wait();
      console.log("Ładowarka dodana pomyślnie");
      document.getElementById("resultOutput").textContent = "Ładowarka dodana pomyślnie";
  } catch (error) {
      console.error("Błąd przy dodawaniu ładowarki:", error);
      document.getElementById("resultOutput").textContent = "Błąd przy dodawaniu ładowarki";
  }
}

async function completeChargingTestFromInput() {
  const clientAddress = document.getElementById("clientAddress").value;
  const chargerAddress = document.getElementById("chargerAddressComplete").value;
  if (!clientAddress || !chargerAddress) {
      console.error("Nieprawidłowe dane wejściowe");
      document.getElementById("resultOutput").textContent = "Nieprawidłowe dane wejściowe";
      return;
  }
  try {
      const tx = await contract.completeCharging(clientAddress, chargerAddress);
      await tx.wait();
      console.log("Ładowanie zakończone");
      document.getElementById("resultOutput").textContent = "Ładowanie zakończone";
  } catch (error) {
      console.error("Błąd przy kończeniu ładowania:", error);
      document.getElementById("resultOutput").textContent = "Błąd przy kończeniu ładowania";
  }
}

async function validateClientTestFromInput() {
  const clientAddress = document.getElementById("clientAddressValidate").value;
  const chargerAddress = document.getElementById("chargerAddressValidate").value;
  const demand = parseFloat(document.getElementById("demandValidate").value);
  if (!clientAddress || !chargerAddress || isNaN(demand)) {
      console.error("Nieprawidłowe dane wejściowe");
      document.getElementById("resultOutput").textContent = "Nieprawidłowe dane wejściowe";
      return;
  }
  try {
      const result = await contract.validateClient(clientAddress, chargerAddress, demand);
      console.log(result ? "Klient zweryfikowany" : "Weryfikacja nieudana");
      document.getElementById("resultOutput").textContent = result ? "Klient zweryfikowany" : "Weryfikacja nieudana";
  } catch (error) {
      console.error("Błąd przy weryfikacji klienta:", error);
      document.getElementById("resultOutput").textContent = "Błąd przy weryfikacji klienta";
  }
  }

  async function listUsers() {
  try {
    const [userAddrs, userRoles, userBalances] = await contract.getAllUsers();

    if (!userAddrs || userAddrs.length === 0) {
      throw new Error("Brak użytkowników.");
    }

    const result = userAddrs.map((userAddr, index) => {
      return `Address: ${userAddr}, Role: ${userRoles[index]}, Balance: ${userBalances[index]}`;
    }).join('\n');

    document.getElementById("resultOutput").textContent = result;
  } catch (error) {
    console.error("Błąd przy pobieraniu użytkowników:", error);
    document.getElementById("resultOutput").textContent = "Błąd przy pobieraniu użytkowników.";
  }
}

async function listTransactions() {
  try {
    const transactions = await contract.getAllChargingSessions();

    if (!transactions || !Array.isArray(transactions) || transactions.length === 0) {
        throw new Error("Brak transakcji.");
    }

    const formatted = transactions.map((session, index) => {
      if (!session.clientAddress || !session.chargerAddress || session.demand === undefined || session.isCompleted === undefined) {
        return { error: "Brakujące dane transakcji" };
      }

      const totalCost = parseInt(session.totalCost.toString(), 10);
      const demand = parseInt(session.demand.toString(), 10);

      return {
        client: session.clientAddress,
        charger: session.chargerAddress,
        demand: isNaN(demand) ? "duży" : demand,
        totalCost: isNaN(totalCost) ? "duży" : totalCost,
        isCompleted: session.isCompleted ? 'Zakończone' : 'W toku',
        chargerOwner: session.chargerOwner
      };
    });

    document.getElementById("resultOutput").textContent = JSON.stringify(formatted, null, 2);
  } catch (error) {
    console.error("Błąd przy pobieraniu transakcji:", error);
    document.getElementById("resultOutput").textContent = "Błąd przy pobieraniu transakcji.";
  }
}

async function checkBalance() {
  if (!clientAddress) {
      console.error("Nieprawidłowy adres klienta");
      document.getElementById("resultOutput").textContent = "Nieprawidłowy adres klienta";
      return;
  }
  try {
      const balance = await contract.checkMyBalance();
      console.log("Saldo: ", balance.toString());
      document.getElementById("resultOutput").textContent = `Saldo: ${balance.toString()}`;
  } catch (error) {
      console.error("Błąd przy pobieraniu salda:", error);
      document.getElementById("resultOutput").textContent = "Błąd przy pobieraniu salda.";
  }
}

async function increaseBalance() {
  const ethAmount = parseFloat(document.getElementById("ethAmountIncrease").value);
  if (isNaN(ethAmount) || ethAmount <= 0) {
      console.error("Nieprawidłowa kwota ETH");
      document.getElementById("resultOutput").textContent = "Nieprawidłowa kwota ETH.";
      return;
  }

  try {
      const options = { value: ethers.utils.parseEther(ethAmount.toString()) };
      const transaction = await contract.increaseBalance(options);
      console.log("Transakcja wysłana:", transaction);
      const receipt = await transaction.wait();
      console.log("Transakcja potwierdzona:", receipt);
      document.getElementById("resultOutput").textContent = `Saldo zostało zwiększone o ${ethAmount} ETH.`;
  } catch (error) {
      console.error("Błąd przy zwiększaniu salda:", error);
      document.getElementById("resultOutput").textContent = "Błąd przy zwiększaniu salda.";
  }
}

async function checkContribution() {
  if (!clientAddress) {
      console.error("Nieprawidłowy adres klienta");
      document.getElementById("resultOutput").textContent = "Nieprawidłowy adres klienta";
      return;
  }
  try {
      const contribution = await contract.checkMyContribution();
      console.log("Wkład: ", contribution.toString());
      document.getElementById("resultOutput").textContent = `Wkład: ${contribution.toString()}`;
  } catch (error) {
      console.error("Błąd przy pobieraniu wkładu:", error);
      document.getElementById("resultOutput").textContent = "Klienci i administratorzy nie mają wkładu. Tylko sprzedawcy.";
  }
}
