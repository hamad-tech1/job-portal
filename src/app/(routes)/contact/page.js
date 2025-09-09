import React from 'react'
import Contact from "../../contact/contact.js"
import ProtectedRoute from "../../component/ProtectedRoute.js";

const page = () => {
  return (
    <>
    {/* <ProtectedRoute>
      <Contact/>
    </ProtectedRoute> */}
     <Contact/>
    </>
  )
}

export default page