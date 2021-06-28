import React,{useState} from 'react';
import './navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Avatar from '@material-ui/core/Avatar';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../features/products/productsSlice';

function Navbar() {

    const [open, setopen] = useState(false);
    const [Nav, setNav] = useState(false);
    const [input_value, setinputvalue] = useState("");


    const cart = useSelector(selectCart);

        const handleOpen = () =>{
            setopen(!open);

            if(open){
                document.querySelector('.body').classList.remove('active');
            }
            else{
                document.querySelector('.body').classList.add('active');
            }
        }


         // ***************   Filter name  ******************

        // useEffect(() => {
        //     const filterarray = allClients.filter(clients => clients.name.toLowerCase().indexOf(input_value) != -1);
        //     setnamearray(filterarray );
        // }, [input_value])

   

    return (
           <>
            <div className={Nav ? "nav active" : "nav" }>
                <div className="container">
                    <div className="logo-block">
                        <NavLink to="/">
                           <img src="image/logo.jpg" className="logo" alt="" />
                         </NavLink>
                    </div>

                
                    {/* ****************  Search Bar start  ******************  */}

                    <div className="search-input-container">
                        <input type="text" className="search-input small" value={input_value} onChange={(e)=> setinputvalue(e.target.value.toLocaleLowerCase())} placeholder="Search for Products, brands and more" />
                        <SearchIcon className="searchbar-icon" />
                    </div>


            
                    <div className="side-menu">
                        <ul className={ open ? "nav-list active" : "nav-list"}>
                            
                            <NavLink to="/wishlist">
                                <li className="nav-link">
                                     <FavoriteBorderIcon className="nav-link-icon" />
                                     <span>Wishlist</span> 
                                </li>
                            </NavLink>

                            <NavLink to="/cart">
                                <li className="nav-link">
                                     <ShoppingCartIcon className="nav-link-icon" />
                                     <span>Cart</span>
                                     {cart.length > 0 && <h6>{cart.length}</h6>}
                                </li>
                            </NavLink>

                            {/* <NavLink to="/">
                                <li className="nav-link">
                                    <Avatar alt="Ashish" src="" className="nav-link-icon" />
                                </li>
                            </NavLink> */}
                        </ul>
                    </div>  
                    
                    <div className="hamburger" onClick={handleOpen} >
                        <span className={open ? "span1 active" : "span1"}></span>
                        <span className={open ? "span2 active" : "span2"}></span>
                    </div>

                </div>
            </div>
        </>    
    )
}

export default Navbar
