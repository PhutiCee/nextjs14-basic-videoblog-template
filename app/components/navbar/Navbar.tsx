import React from 'react'
import { NavItems } from './navItems'

export default function Navbar() {
    return (
        <div className='bg-gray-900 p-2 shadow-lg'>
            <nav className='mx-auto max-w-5xl'>
                <ul className='flex justify-center'>
                    {NavItems.map((item) => (
                        <li key={item.id} className='p-3 text-white rounded-lg hover:bg-gray-400 hover:text-gray-900'>{item.name}</li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
