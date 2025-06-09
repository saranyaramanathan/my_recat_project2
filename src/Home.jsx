import ProductCard from "./ProductCard";
import CartItem from "./CartItem";
import { useState,useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import Cart from "./Cart";
function Home()
{
     const [allProducts, setAllProducts] = useState([]);
  const [cartitems, setCartItems] = useState([]);
  const [isVisible,setVisible] = useState(false);
    const [total, setTotal] = useState(0);
   
  const getAllProducts = async () => {
    try {
          const productData = await fetch('https://fakestoreapi.com/products');
      const productRes = await  productData.json()
     // const productDetails= await productRes.data
      setAllProducts(productRes)

      console.log(productRes)
    } catch (error) {
      console.log(error);
    }
  };  
    const addItem = (item) => {
    setCartItems([...cartitems, item]);
    setTotal(total + item.price);
  };

  const removeItem = (item) => {
    let index = cartitems.findIndex((obj) => obj.title == item.title);
    console.log(index);
    cartitems.splice(index, 1);
    setCartItems([...cartitems]);
    if(cartitems.length == 0){
      setVisible(false)
    }
    setTotal(total - item.price)
  };
  useEffect(() => {
    getAllProducts();
    
  }, []);

  return (
  <div className="bg-slate-600 max-w-7xl">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Ebuy</title>
               
            </Helmet>
      <nav className='sticky shadow-md bg-slate-600 '>
        <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
        
        <a href="/" class="relative flex items-center inline-block h-5 h-full font-black leading-none">
                <svg class="w-auto h-6 text-indigo-600 fill-current" viewBox="0 0 194 116" xmlns="http://www.w3.org/2000/svg">
                    <g fill-rule="evenodd">
                        <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z"></path>
                        <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z"></path>
                    </g>
                </svg>
                <span class="ml-3 text-xl text-white">Ebuy<span class="text-pink-500">.</span></span>
            </a>
      
             <Link to={cartitems.length>0?"/cart":""} state={{ myArray: cartitems}}>
          <div className="relative py-2 ">
            <div className="t-0 absolute left-4">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartitems.length}</p>
            </div>
           
            <svg xmlns="http://www.w3.org/2000/svg"   fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="file: mt-4 h-8 w-8">
              <path stroke-linecap="round"  stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"  />
            </svg>
          </div>
          </Link>
        </div>
        
      </nav>
      

      {/* <div class="relative">
  <img src="/src/assets/my_banner.png" class="w-full h-[300px] object-cover rounded-lg shadow-lg transition-all hover:opacity-80" alt="Banner Image"/>
  
</div> */}


                
       <h1 className="text-4xl text-center text-white m-4">Products</h1>
        <div className="flex gap-2 justify-center flex-wrap ">
         {allProducts.map((product) => {
              return <ProductCard product={product} addItem={addItem} cartitems={cartitems} />;
            })}
         
      </div>
     
  </div>
  )
}
export default Home;