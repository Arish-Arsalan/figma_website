

import Link from 'next/link';
const Header = () => {
 return (
 <nav className="bg-slate-900 p-4">
 <div className="flex items-center justify-between">
 <div className="flex items-center">
 <h1 className="text-white text-lg font-bold"> Arish Coffee Shop</h1>
 </div>
 <div>
 <Link href="/" className="text-white px-4">Home</Link>
 <Link href="/Menu" className="text-white px-4">Menu</Link>
 <Link href="/Contact" className="text-white px-4">Contact</Link>
 </div>
 </div>
 </nav>
 );
};

export default Header;