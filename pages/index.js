import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FilterMenu from '../components/FilterMenu'
import Listings from '../components/Listings/Listings'
import NewListingModal from '../components/Listings/NewListingModal'
import BookingModal from '../components/Listings/BookingModal'
import { useBlockbnb } from '../hooks/useBlockbnb'

export default function Home() {
  const [showReservedListing, setShowReservedListing] = useState(false)
  const [showNewListingModal, setShowNewListingModal] = useState(false)
  const [showReserveListingModal, setShowReserveListingModal] = useState(false)

  const { userAddress } = useBlockbnb()

  return (
    <div>
      <Head>
        {/* add favicon */}
        <link rel='icon' href='/favicon.svg' />
        <title>Blockbnb</title>
      </Head>

      <Header />

      <main className='pt-10 pb-20'>
        <FilterMenu />
        {userAddress && (
          <div className='px-20 pb-10 flex justify-end space-x-4'>
            <button
              onClick={() => setShowNewListingModal(true)}
              className='border rounded-lg p-4 text-xs font-medium bg-[#356eff] text-white'
            >
              Add Listing
            </button>
          </div>
        )}

        <Listings setShowReserveListingModal={setShowReserveListingModal} />

        <NewListingModal
          showNewListingModal={showNewListingModal}
          setShowNewListingModal={setShowNewListingModal}
        />

        <BookingModal
          showReserveListingModal={showReserveListingModal}
          setShowReserveListingModal={setShowReserveListingModal}
        />
      </main>

      <Footer />
    </div>
  )
}
