'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link href="/ContactUs" className="flex text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>ContactUs</Link>
            </li>
            <li>
              <Link href="/AboutUs" className="flex text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>About us</Link>
            </li>
            <li>
              <Link href="/FAQs" className="flex text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>FAQs</Link>
            </li>
            <li>
              <Link href="/WhyUs" className="flex text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Why Us</Link>
            </li>
            <li className="py-2 my-2 border-t border-b border-gray-200">
              <span className="flex text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Services</span>
              <ul className="pl-4">
                <li>
                  <Link href="/StudyInAustralia" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Study In Australia </Link>
                </li>
                <li>
                  <Link href="/Migration" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Migration Services </Link>
                </li>
                <li>
                  <Link href="/PostLanding" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Post-Landing Services</Link>
                </li>
                <li>
                  <Link href="/ImportExport" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileNavOpen(false)}>Import/Export</Link>
                </li>
              </ul>
            </li>
          </ul>          
        </Transition>
      </div>
    </div>
  )
}
