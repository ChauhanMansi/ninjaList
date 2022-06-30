import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const NotFound = () => {

    const route = new useRouter();

    useEffect(() => {
        setTimeout(() => {
            route.push('/')
        }, 3000)
    }, []);

    return ( 
        <div className="not-found">
            <h1>OOPS!</h1>
            <h2>That page cannot be found!</h2>
            <p>Go back to home page <Link href='/'><a>HomePage</a></Link></p>
        </div>
     );
}
 
export default NotFound;