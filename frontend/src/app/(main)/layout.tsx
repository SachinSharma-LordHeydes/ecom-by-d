import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const mainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=''>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default mainLayout
