/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { auth } from '@/auth';
import Heading from '../../components/Heading';
import Search from '../../components/Search';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SearchParams {
  query: string | null;
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const query = (await searchParams).query ?? null;
  const session = await auth();

  return (
      <div className="container mx-auto ">
        <div className='min-h-dvh'>
          <Navbar />
          <Heading />
        </div>
        <Card className="min-h-dvh pt-2 bg-transparent border-none">
          <CardHeader>
            <h3 className="text-xl font-semibold text-white text-center">
              Discover the Perfect Startup to Ignite Your and Their Journey !!
            </h3>
          </CardHeader>
          <CardContent>
            <Search query={query} />
            <h2 className="mt-6 text-2xl font-semibold text-white">
              {query ? `Search results for "${query}"` : "All Startups"}
            </h2>
          </CardContent>
        </Card>
      </div>
  );
}