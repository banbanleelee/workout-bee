'use client';

import { useRouter } from 'next/navigation';

export default function Footer() {
    const router = useRouter();
  
    return (
      <button
        className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        option
      </button>
    );
  }