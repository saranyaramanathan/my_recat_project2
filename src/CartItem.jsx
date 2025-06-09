import { useState } from "react"

function CartItem({item,removeItem}){
    console.log("cartITEM...",)
    const [counter,setCounter]=useState(1);
    const total=parseInt(item.price) * parseInt(counter)
    const discount_price= total-(total/100 *10)
    return <div className="w-1/2  mx-auto my-8  flex flex-col justify-center rounded flex-wrap ">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>

                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price(10% Discount)
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody >
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                            {item.title}
                        </th>

                        <td class="px-6 py-4">
                            {item.category}
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex">
                                <button id="decrement-btn"disabled={counter<=1} onClick={() => { setCounter(counter - 1) }}
                                    class="flex justify-center items-center w-5 h-5 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                                    </svg>
                                </button>
                                <span id="counter" class="text-xl font-bold mx-4 mb-2">{counter}</span>
                                <button id="increment-btn" onClick={() => { setCounter(counter + 1) }}
                                    class="flex justify-center items-center w-5 h-5 rounded-full text-white focus:outline-none bg-indigo-500 hover:bg-indigo-600">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12M6 12h12"></path>
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <td class="px-6 py-4">
                            ${discount_price}
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex ">
                                <button type="button" class="font-medium text-indigo-600  hover:text-indigo-500" onClick={() => {
                                    removeItem(item)
                                }}>Remove</button>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>     
            
       

}
export default CartItem