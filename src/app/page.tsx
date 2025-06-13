"use client";

import { ConnectMongoDB } from "@/config/db-config";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  ConnectMongoDB()


  return (
    <div className='flex items-center justify-center h-screen'>
      <UserButton />
      
      This is Khandker Mohyet's work station
      
    </div>
  );
}
