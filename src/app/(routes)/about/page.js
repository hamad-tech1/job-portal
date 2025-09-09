import React from 'react'
import About from "../../about/about.js"
import ProtectedRoute from "../../component/ProtectedRoute.js";
const page = () => {
  return (
    <>
    {/* <ProtectedRoute>
      <About/>
    </ProtectedRoute> */}
    <About/>
    </>
  )
}

export default page