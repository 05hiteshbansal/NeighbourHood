"use client"
import React from 'react'
import {NextUIProvider} from "@nextui-org/react";
const Uiprovider = ({children}) => {
  return (
    <div>
     <NextUIProvider>
    {children}
    </NextUIProvider>
    </div>
  )
}

export default Uiprovider