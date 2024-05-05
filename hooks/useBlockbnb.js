import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

import { createContract } from '../utils/constants'

export const useBlockbnb = () => {
  const [contract, setContract] = useState(null)
  const [userAddress, setUserAddress] = useState('')
  const [properties, setProperties] = useState([])

  // Hook to get the account from wagmi
  const { address } = useAccount()

  // UseEffect to set the state of userAddress
  useEffect(() => {
    address && setUserAddress(address)
    console.log('User Address:', address)
    setContract(createContract())
  }, [address])


  // UseEffect Get all properties
    useEffect(() => {
      getProperties()
      console.log('Properties get -> ', properties)
    }, [contract])
  
  // Get Properties function
  const getProperties = async () => {
    if(contract){
      try {
        const noOfProperties = await contract.methods.counter().call()
        setProperties([])
        for (let i = 0; i < noOfProperties; i++) {
          console.log('Property ID:', i)
          const property = await contract.methods.properties(i).call()
          const formattedProperty = {
            id: property['id'],
            name: property['name'],
            imgUrl: property['imgUrl'],
            description: property['description'],
            pricePerDay: property['pricePerDay'],
            isBooked: property['isBooked'],
            address: property['propertyAddress'],
          }
          setProperties((prevState) => [...prevState, formattedProperty])
        }
      } catch (error) {
        console.error('Error fetching properties:', error)
      }
    }
  }

  // Add Listing function
  const addListing = async (
    name,
    propertyAddress,
    description,
    imgUrl,
    pricePerDay
  ) => {
    if (contract) {
      try {
        await contract.methods
          .listProperty(name, propertyAddress, description, imgUrl, pricePerDay)
          .send({ from: address, gas: 3000000, gasLimit: null})
        getProperties()
      } catch (error) {
        console.error('Error adding property:', error)
      }
    }
  }

  // Book Listing function
  const bookProperty = async(id, startAt, endAt) => {
    if(contract){
      try {
        console.log('Booking Property:', id, startAt, endAt)
        const duePrice = await contract.methods
          .getDuePrice(id, startAt, endAt)
          .call()

        await contract.methods.bookProperty(id, startAt, endAt).send({
          from: userAddress,
          value: duePrice,
          gas: 3000000,
          gasLimit: null,
        })
        getProperties()
      } catch (error) {
        console.error('Error booking property:', error)
      }
    }
  }

  return { properties, userAddress, addListing, bookProperty }
}
