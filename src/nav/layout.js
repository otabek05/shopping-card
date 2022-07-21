import {Link,Outlet} from 'react-router-dom'
import {FaShoppingCart} from "react-icons/fa"
import { X } from '../App'
import {useContext} from 'react'



function Layout(){
   const [count,setCount]=useContext(X)

    return(
        <>
         <nav>
            <Link  to='/' >Market</Link>
            <input type={'text'} placeholder='Search' />
            <Link className='savat' to='contact' >
                Contact
            </Link>
        </nav>
        <Outlet />
        </>
        
    )
}

export default Layout