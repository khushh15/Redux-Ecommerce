import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = ()=>{
    const cart1 = useSelector(store=>store.CartReducer)
    const itemobject = useSelector(store=>store.ItemReducer)
    return(
        <>
            <div className="head1">
                   <div className="logo">Shopee</div>
                          <div className="nav">
                     <Link to="/Additem"><a href="#">Home</a></Link>
                       <Link to="/Cart"><a href="#">Cart  {cart1.cartitems.length}</a></Link> 
                          <Link to="/Items"><a href="#">Items {itemobject.itemsdata.length}</a> </Link>
                      </div>
            </div>
        </>
    )
}
export default Navbar
