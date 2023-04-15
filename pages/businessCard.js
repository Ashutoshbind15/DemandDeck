import React from 'react'

export default function businessCard() {
  return (
    <div className="card md:card-side bg-base-100 shadow-xl w-[600px] mx-auto my-8">
    <div className="bg-red-500 md:w-1/5 px-4 text-center rounded-l-2xl flex justify-center items-center"><h1 className="text-2xl font-bold">Amul Milk Services</h1></div>
    <div className="card-body text-white">
      <h2 className="card-title">900Rs/Month</h2>
      <p>I am very hardworking person please select me, I have many guys.</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Vote</button>
      </div>
    </div>
  </div>
  )
}
