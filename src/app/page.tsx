import React from 'react';
import Link from 'next/link';

/* eslint-disable @typescript-eslint/no-unused-vars */
const Home = () => {
 return (
 <>
 <div className="flex flex-col items-center justify-center h-screen bg-gray-100"
 style={{ backgroundImage: "url('/Background1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
 <h1 className="text-4xl font-bold text-black text-center mb-4">Welcome to My Coffee Shop!</h1>
 <p className="text-lg text-black text-center mb-8">Enjoy the best coffee in town, brewed with love.</p>
 <Link href="/Menu"> {/* Change here from /Menu to /menu */}
 <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
 View Menu
 </button>
 </Link>
 </div>
 </>
 ); 
}

export default Home;