'use client'
import React from 'react'
import { profile,token,logout } from '@/Appwrite/Auth'
import Link from 'next/link';

function page() {
    const details = async () => {
        await profile();
    }
    const session= async ()=>{
        await token();
    }
    const handleLogout = async ()=>{
        await logout();
    }
    return (
        <div onClick={details}>Welcome
            <button onClick={session}> click me</button>
            <button onClick={
                handleLogout
                }> Logout </button>
        </div>
    )
}

export default page