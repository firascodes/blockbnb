import ListingItem from './ListingItem'
import { useBlockbnb } from '../../hooks/useBlockbnb'

const Listings = ({ setShowReserveListingModal }) => {
  const { properties } = useBlockbnb()

  return (
    <div className='px-20 flex'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {properties.length > 0 &&
          properties.map((item, index) => (
            <ListingItem
              key={index}
              item={item}
              setShowReserveListingModal={setShowReserveListingModal}
            />
          ))}

        {properties.length === 0 && (
          <div className='text-center'>
            <h1 className='text-2xl font-bold'>No Listings Found</h1>
            <h2 className='text-lg font-semibold'>Please connect wallet</h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default Listings
