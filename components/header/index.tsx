import React from 'react'
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Header() {
  return (
    <>
    <div className='header'>
        <div>Logo</div>
        <div className='had_link'>
        <Link href="/search">
            <a>Search</a>
        </Link>
        <Link href="/history">
            <a>History</a>
        </Link>
        </div>
    </div>
   
    </>
  )
}
