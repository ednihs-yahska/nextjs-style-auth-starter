import Head from 'next/head'
import { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'


const HomeContainer = styled.div`
  position:absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export default function Home() {
  const router = useRouter()

  useEffect(()=>{
    //do something on page load
  },[])

  return (
    <>
      <HomeContainer className="m-2 flex justify-center items-center">
        <div className="mx-auto text-xl  w-1/2 sm:w-full lg:w-1/2 text-gray-600">
          <div className="text-2xl my-2 self-start">Info:</div>
          This is a nextjs starter project with <span className="text-blue-800">tailwind</span>, 
          <span className="text-pink-800 mx-1">styled components</span> and <span className="text-blue-400">material ui</span> configured. 
          It also comes configured with next-auth with google provider. The project also has a file
          with some predefined helpful <span className="text-green-500">mongo</span> functions. These function/files are commented out. Use them if
          you like or you can delete the <span className="bg-blue-500 text-white mx-1">pages/api/crud.ts</span> and <span className="bg-blue-500 text-white mx-1">pages/api/modules/connections/nosql.ts</span>
          This project is also configured for <span className="text-blue-800">typescript</span>.
          Refer https://next-auth.js.org/warnings#nextauth_url before deploying to production
        </div>
        <div className="mx-auto text-xl  w-1/2 sm:w-full lg:w-1/2 text-gray-600 my-2">
          Also please add <span className="text-green-500 mx-1">GOOGLE_CLIENT_ID</span> and <span className="text-green-500 mx-1">GOOGLE_CLIENT_SECRET</span> 
          environment variables to a <span className="text-blue-500 mx-1">.env.local</span> in the root folder of this repository. You can create the 
          secret and Id on google cloud console.
        </div>
      </HomeContainer>
    </>
  )
}
