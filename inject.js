class JoyID_evm_provider {
  constructor() {
	console.log(`JoyID-evm-provider: loaded`);
    // This object will store the Ethereum network and wallet information.
    this.state = {
      network: 'mainnet',
      wallet: null
    };
  }

  // This method is called to get the Ethereum network.
  getNetwork() {
    return this.state.network;
  }

  // This method is called to get the Ethereum wallet.
  getWallet() {
    return this.state.wallet;
  }

  // This method is called to send an Ethereum transaction.
  sendTransaction(transaction) {
    // TODO: Implement this method to send the Ethereum transaction.
  }

  trace(message) {
    console.log(`JoyID-evm-provider: ${message}`);
  }
}

window.ethereum = new JoyID_evm_provider();

console.log(`JoyID-evm-provider: injected`);