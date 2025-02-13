import { CircleCheckBig, House } from 'lucide-react'
import React from 'react'

function ThankYou() {
  return (
    <>

      <div className="bg-white shadow-lg shadow-gray-300 rounded-lg p-6 md:p-8 w-full max-w-md text-center relative">

        <div className="flex justify-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-900/30">
            <CircleCheckBig size={43} className="text-primary" />
          </div>
        </div>
        <h2 className="text-2xl text-gray-900 font-bold mt-4">Thank You</h2>
        <p className="text-gray-600 text-base mt-2">
          Our team will contact you shortly to assist you further.
        </p>
        <p className="text-gray-500 mt-2 text-sm">
          Redirecting to home page in <span className="font-bold">10</span> seconds...
        </p>

        <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 mx-auto mt-4 text-sm">
          <House size={16} /> Back to Home
        </button>

        <div className="mt-6 border-t pt-4 text-gray-600 text-sm p-3 bg-gray-100">
          <p>For immediate assistance, contact us at</p>
          <p className="text-primary font-bold text-lg">+91 96190 95795</p>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default ThankYou