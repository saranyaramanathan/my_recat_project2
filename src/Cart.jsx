import { useEffect,useState } from "react";
import CartItem from "./CartItem";
import { useLocation } from "react-router";
import TopBar from "./TopBar";
import { Link } from "react-router";
function Cart()
{
            const location = useLocation();
        const myArray = location.state?.myArray; 
    console.log("test..",myArray)
      const [cartitems, setCartItems] = useState([]);
         const [total, setTotal] = useState(0);
      const getCartItems = async () => {
    try {
          //const cartData = await fetch('https://fakestoreapi.com/products');
      //const cartRes = await  cartData.json()
     // const productDetails= await productRes.data
      setCartItems(myArray)

      console.log(myArray)
    } catch (error) {
      console.log(error);
    }
  }; 
  const removeItem = (item) => {
    let index = cartitems.findIndex((obj) => obj.title == item.title);
    console.log('iii',index);
    cartitems.splice(index, 1);
    setCartItems([...cartitems]);
   
    setTotal(total - item.price)
  }; 
  useEffect(()=>{
    getCartItems();
  },[])
    
    return (
        
        <div className="bg-slate-600 h-lvh">
            
   {cartitems.length==0 && 
     <nav className='sticky shadow-md bg-slate-600'>
        <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
   <Link
            to="/">
            <a href="/" class="relative flex items-center inline-block h-5 h-full font-black leading-none">
                <svg class="w-auto h-6 text-indigo-600 fill-current" viewBox="0 0 194 116" xmlns="http://www.w3.org/2000/svg">
                    <g fill-rule="evenodd">
                        <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z"></path>
                        <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z"></path>
                    </g>
                </svg>
                <span class="ml-3 text-xl text-white">Ebuy<span class="text-pink-500">.</span></span>
            </a>
          </Link>
          </div>
          </nav>}
              <h1 className="text-4xl text-center text-white p-8">Cart List</h1>
              {cartitems.map((item) => {

                return <CartItem removeItem={removeItem} item={item}/>
            })}
            {cartitems.length==0 && <div className="flex item-center justify-center  h-lvh " >
                <div className="w-80 h-24 content-center rounded-lg border border-white p-4">
                    <p className=" text-white">Cart is empty click logo to add products</p></div></div>}
        </div>
    )
}
export default Cart;