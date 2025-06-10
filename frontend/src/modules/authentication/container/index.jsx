import Header from '../../../components/header'
import React from 'react'
import SignUp from '../components/SignUp'
import AdvCards from '../components/AdvCards'

const Landing = () => {

    const currentStep = 0;
  return (
    <div className='h-[100vh]'>
        <Header />
        <div className='grid grid-cols-2'>
            <div className='bg-amber-200 h-[100vh]'>
                <AdvCards />
            </div>
            <div className='bg-gray-300 h-[100vh]'>
                <SignUp currentStep={currentStep} />
            </div>
        </div>
    </div>
  )
}

export default Landing  