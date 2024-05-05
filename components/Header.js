import {
  GlobeAmericasIcon,
  Bars3Icon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'

import {ConnectButton} from '@rainbow-me/rainbowkit'

const Header = ({
  publicKey,
  initializeUser,
  initialized,
  transactionPending,
}) => {
  return (
    <header className='sticky top-0 transition-all md:grid md:grid-cols-3 items-center px-10 xl:px-20 py-4 z-50 bg-white border-b'>
      <div>
        <img src='./blockbnb-logo.jpg' alt='logo' className='h-14' />        
      </div>

      <div className='flex-1 flex xl:justify-center px-6 transition-all duration-300'>
        <button className='flex-1 flex items-center justify-between border rounded-full p-2 w-[300px] shadow-sm hover:shadow-md transition-all'>
          <div className='flex items-center divide-x'>
            <p
              className='text-gray-800 bg-transparent text-sm font-medium px-4'
              type='text'
            >
              Anywhere
            </p>
            <p
              className='text-gray-800 bg-transparent text-sm font-medium px-4'
              type='text'
            >
              Any week
            </p>
            <p className='text-gray-600 bg-transparent text-sm font-light px-4'>
              Add guests
            </p>
          </div>
          <MagnifyingGlassIcon className='h-8 w-8 bg-[#356fff] text-white stroke-[3.5px] p-2 rounded-full' />
        </button>
      </div>

      <div className='flex items-center justify-end'>
        <div className='border border-transparent cursor-pointer hover:bg-gray-100 rounded-full px-3 py-2'>
          <a
            className='text-sm font-medium transition-all duration-300 text-gray-800'
            href='#'
          >
            Become a Host
          </a>
        </div>

        <div className='border border-transparent cursor-pointer hover:bg-gray-100 rounded-full p-3'>
          <GlobeAmericasIcon className='h-5 w-5 transition-all duration-300 text-[#356fff]' />
        </div>
        <ConnectButton />
      </div>
    </header>
  )
}

export default Header
