import ContractABI from './Blockbnb.json'
import Web3 from 'web3'

export const address = '0xa3EADb74983504c8e17A11a146D7f0f4Ec0B9761' //deployed to Sepolia

export const createContract = () => {
    const { ethereum } = window
    if(ethereum) {
        const web3 = new Web3(ethereum)
        const contract = new web3.eth.Contract(ContractABI, address) // .abi?
        return contract
    }
}


export const modalStyles = {
    content: {
        height: '300px',
        width: '400px',
        margin: 'auto',
        marginTop: '150px',
        display: 'flex',
    },
    overlay: {
        backgroundColor: 'rgba(0 0 0 / 90%)',
    }
}