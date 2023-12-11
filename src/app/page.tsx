/* eslint-disable @next/next/no-async-client-component */
"use client";

import { options } from './api/auth/[...nextauth]/option';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import {NextUIProvider} from "@nextui-org/react";
import Navigationbar from '../../components/Navigationbar';

export default async function Home() {
  const session = await getServerSession(options)

  // if(!session) {
  //   redirect('/api/auth/signin?callbackUrl=/server')
  // }
  return (
    
    <NextUIProvider>
      <Navigationbar />
    <main className="dark text-foreground bg-background flex min-h-screen flex-col items-center justify-between p-24">
      {session ? <span>Welcome to ACME</span> : <div>
      <h1>You Must Login</h1>
        </div>}
    </main>
    </NextUIProvider>
  )
}
