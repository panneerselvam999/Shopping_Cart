// import React, { useState, useRef, useEffect } from 'react';

// // Handler hook for when Outside click dropdown close
// let useClickOutside = (handler) => {
//     let domNode = useRef();

//     useEffect(() => {
//         let maybeHandler = (event) => {
//             if (!domNode.current.contains(event.target)) {
//                 handler();
//             }
//         };

//         document.addEventListener("mousedown", maybeHandler);

//         return () => {
//             document.removeEventListener("mousedown", maybeHandler);
//         };
//     });

//     return domNode;
// };
// //

// const AddToCart = () => {

//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState(null);

//     const options = ['Option 1', 'Option 2', 'Option 3'];

//     const toggleDropdown = () => setIsOpen(!isOpen);

//     const handleOptionClick = (option) => {
//         setSelectedOption(option);
//         setIsOpen(false);
//     };

//     let domNode = useClickOutside(() => {
//         setDropdownOpen(false);
//     });

//     return (
//         <div className="relative inline-block text-left  bg-red-500" ref={domNode}>
//             <div>
//                 <button
//                     type="button"
//                     className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
//                     onClick={toggleDropdown}
//                 >
//                     {selectedOption ? selectedOption : 'Select an option'}
//                     <svg
//                         className="ml-2 -mr-1 h-5 w-5"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                         aria-hidden="true"
//                     >
//                         <path
//                             fillRule="evenodd"
//                             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                             clipRule="evenodd"
//                         />
//                     </svg>
//                 </button>
//             </div>

//             {isOpen && (
//                 <div  className="origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                     <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                         {options.map((option) => (
//                             // <button
//                             //     key={option}
//                             //     onClick={() => handleOptionClick(option)}
//                             //     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                             //     role="menuitem"
//                             // >
//                             //     {option}
//                             // </button>
//                             <div>
//                                 <div className='h-12 w-12 bg-green-600 m-1'></div>
//                                 <div>
//                                     lorem
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AddToCart;

// import React, { useState } from 'react';

// const AddToCart = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const options = ['Option 1', 'Option 2', 'Option 3'];

//     const toggleDropdown = () => setIsOpen(!isOpen);

//     return (
//         <div className="relative inline-block text-left">
//             <div>
//                 <button
//                     type="button"
//                     className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     onClick={toggleDropdown}
//                 >
//                    Select an option
//                     <svg
//                         className="ml-2 -mr-1 h-5 w-5"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                         aria-hidden="true"
//                     >
//                         <path
//                             fillRule="evenodd"
//                             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                             clipRule="evenodd"
//                         />
//                     </svg>
//                 </button>
//             </div>

//             {isOpen && (
//                 <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                     <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                         {options.map((option) => (
//                             <button
//                                 key={option}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                                 role="menuitem"
//                             >
//                                 {option}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AddToCart;

import React, { useState, useRef, useEffect } from "react";

// Handler hook for when Outside click dropdown close
let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let maybeHandler = (event) => {
            if (domNode.current && !domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    }, [handler]);

    return domNode;
};
// Handler hook for when Outside click dropdown close End Code====>>

const AddToCart = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [selectedOption, setSelectedOption] = useState(null);

    const options = ["Option 1", "Option 2", "Option 3"];

    let domNode = useClickOutside(() => {
        setIsOpen(false);
    });

    const toggleDropdown = () => setIsOpen(!isOpen);

    // const handleOptionClick = (option) => {
    //      setSelectedOption(option);
    //     setIsOpen(false);
    // };

    return (
        <div ref={domNode} className="relative inline-block w-fit text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={toggleDropdown}
                >
                    <img src="icon/cart.svg" alt="" className="mr-2 h-6 w-6" />
                    <span>Cart</span>
                    <span>10</span>
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-fit origin-top-right rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5">
                    <div
                        className="w-fit py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {options.map((option) => (
                            // <button
                            //     key={option}
                            //     // onClick={() => handleOptionClick(option)}
                            //     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            //     role="menuitem"
                            // >
                            //     {option}
                            // </button>
                            <div key={option} className="flex w-96">
                                <div className="m-1 h-14 w-14 bg-red-500"></div>
                                <div>Lorem ipsum dolor sit amet consectetur.</div>
                            </div>
                        ))}
                        <div className="px-5">
                            <button
                                type="submit"
                                className="inline-flex w-full justify-center rounded border border-transparent bg-green-600 px-4 py-1 text-xl font-medium text-white transition-colors hover:bg-green-700"
                            >
                                Go to Cart
                            </button>{" "}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddToCart;
