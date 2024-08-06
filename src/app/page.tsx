'use client'
import Link from 'next/link';
import {loginGoogle} from '../Appwrite/Auth'
// import {Login as Page} from '../app/login/page'


export default function Home() {

  const handleLogin = async ()=>{
    await loginGoogle()
  }
  


  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <button onClick={handleLogin}>Login with google</button>
      <Link href={"/login"}>
        Login
      </Link>
    </main>
  );
}
