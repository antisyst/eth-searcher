import Web3 from 'web3';

const web3 = new Web3('https://mainnet.infura.io/v3/461c5deae37d4a1f9cd1b9a71cc649c1');

export async function getBalance(address: string): Promise<string> {
  const balanceWei = await web3.eth.getBalance(address);
  const balanceEther = Web3.utils.fromWei(balanceWei, 'ether');
  return balanceEther;
}
