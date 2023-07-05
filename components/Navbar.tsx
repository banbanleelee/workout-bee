'use client';

import Link from 'next/link'

export default function Navbar() {
  
    return (
        <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/workouts">Workouts</Link>
          </li>
      </ul>
      
    );
  }