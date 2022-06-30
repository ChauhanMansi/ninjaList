import Link from 'next/link';
import Image from 'next/Image';

const Navbar = () => {
    return ( 
        <nav>
            <div><Image src='/logo.png' width={128} height={77}/></div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/listing"><a>Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;