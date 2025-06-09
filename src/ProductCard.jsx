import {useState } from "react";
function ProductCard({product,addItem,cartitems}){
  {console.log("productdetails....",product.title)}
    const [isExpanded, setIsExpanded] = useState(false);
     
  const maxLength=100;
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const isDisabled = cartitems.some(obj => obj.title == product.title)?true:false;
  return(    
 <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-64">
  <div class="relative h-32 m-2.5 overflow-hidden text-white rounded-md">
    <img className="object-contain h-42 w-full" src={product.image} alt="card-image" />
  </div>
  <div class="p-4">
    <h3 class="mb-2 text-slate-800 text-xl font-semibold">
    {product.title}
    </h3>
    {/* <p class="text-slate-600 leading-normal font-light">
       {isExpanded ? product.description : product.description.slice(0, maxLength)}
          {product.description.length > maxLength && (
            <span class="text-blue-700 mx-2" onClick={toggleReadMore}>
              {isExpanded ? 'show less' : '...read more'}
            </span>
          )}
    </p> */}
   
     <p className="text-2xl text-slate-500">Price: ${product.price}</p>
  
  </div>
 
  <div class="px-4 pb-4 pt-0 mt-auto">
     
    <button class="rounded-md  bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
   onClick={() => {
            
            if (isDisabled == true) {
              alert('Item already added to the cart');
              
            }
            else{
              addItem(product)
               //alert('Item added..Click cart to view the Item');
            }
          }}
          
        >
          Add to Cart
    </button>
  </div>
</div>  

    // <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    //   <a href="#">
    //     <img
    //       src={product.image}
    //       className="p-4 w-full h-52 object-contain"
    //       alt=""
    //     />
    //   </a>
    //   <div class="flex flex-col p-5">
    //     <a href="#">
    //       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-wrap dark:text-white">{product.title}</h5>
    //     </a>
       
    //     <p className="text-2xl flex-grow">Price: ${product.price}</p>
    //     {/* <button className="w-full mt-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  text-white font-medium py-3 rounded-lg transition-colors" */}
    //     <div class=" pb-4 pt-0 mt-2">
    //       <button class="rounded-md bg-blue-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
    //         onClick={() => {

    //           if (isDisabled == true) {
    //             alert('Item already added to the cart');

    //           }
    //           else {
    //             addItem(product)
    //             //alert('Item added..Click cart to view the Item');
    //           }
    //         }}

    //       >
    //         Add to Cart
    //       </button>
    //     </div>
    //   </div>

    // </div>
) 




 
}
export default ProductCard;