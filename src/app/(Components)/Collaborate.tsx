import React from 'react'
import { Button } from './Button'

const Collaborate = () => {
  return (
    <div><div className=" p-6 md:mt-36 mt-16">
    <div className="flex flex-col gap-8 items-center justify-center mt-8">
      {" "}
      <h1 className="text-[3.125rem] md:text-[5.75rem] font-bold uppercase text-center">
        Want to collaborate with us?
      </h1>
      <p className=" text-[15px] md:text-[1.25rem] leading-relaxed m-6 text-center">
        We’d be honoured to meet artists, brands, and non-profit
        organizations from around the<br />world and collaborate with them so
        we can all shed some light on our beautiful work. Reach out to us!
      </p>
      <Button>Contact Us</Button>
    </div>
    </div></div>
  )
}

export default Collaborate