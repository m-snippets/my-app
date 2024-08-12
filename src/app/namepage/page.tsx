'use client';

import { useRouter } from 'next/navigation';

export default function GiveName() {
  const router = useRouter();
    return (
      <div>
            My name is Taha.
            <br/>
            <button type="button" onClick={() => router.push('/namepage/address')}>
              Get Address
            </button>
      
      </div>
    )
  }