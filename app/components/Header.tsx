import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header>
      <nav>
        <ul className='flex  bg-black  p-5 justify-end shadow-xl shadow-slate-200 '>
          <li className='mr-12  hover:bg-green-300 p-2 rounded text-white'><Link href="/">Home</Link></li>
          <li className='mr-12 hover:bg-green-300 p-2 rounded text-white'><Link href="##">AboutUS</Link></li>
          <li className='mr-12 hover:bg-green-300 p-2 rounded text-white'><Link href="##">Contact</Link></li>
        </ul>
      </nav>
      </header>
    </div>
  )
}

export default Header