import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="p-2 my-2 bg-white md:p-5 lg:p-7 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link href="https://myblogit.vercel.app" className="mr-4 hover:underline md:mr-6">Blog</Link>
                    </li>
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6">FAQs</Link>
                    </li>
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6">Contact</Link>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="#" className="hover:underline">BlogTitle</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
