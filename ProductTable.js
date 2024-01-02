import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable({products, filterText, inStockOnly}) {
    const rows = [];
    let lastCategory = null;

    const myFilter = products.filter(el => {
        let output = (el.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) &&
        (inStockOnly && el.stocked) || 
        (el.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) &&
        (!inStockOnly)
        return output
    })

    console.log(myFilter)

    return (
        <table className="product-table">
        <thead>
            <tr>
            <th>Name</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
        </table>
    )
}


// import React from 'react'
// import ProductCategoryRow from './ProductCategoryRow'
// import ProductRow from './ProductRow'

// function ProductTable(props) {
//   const {products,filterText,inStockOnly} = props
//   console.log(products)
//   const rows = [];
//   let lastCategory = null;
  
//   products.forEach((product) => {

//     if (
//         product.name.toLowerCase().indexOf(
//           filterText.toLowerCase()
//         ) === -1
//       ) {
//         return;
//       }
//       if (inStockOnly && !product.stocked) {
//         return;
//       }
//     if (product.category !== lastCategory) {
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category} />
//       );
//     }
//     rows.push(
//       <ProductRow
//         product={product}
//         key={product.name} />
//     );
//     lastCategory = product.category;
//   });

//   return (
//     <table className="product-table">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>
//           {rows}
//       </tbody>
//     </table>
//   )
// }

// export default ProductTable




// import React from "react";
// import ProductCategoryRow from "./ProductCategoryRow";
// import ProductRow from "./ProductRow";

//  function ProductTable(props) {
//     const {products} = props
//     console.log(products)
//     const rows = [];
//   let lastCategory = null;

//     products.forEach((product) => {
//         if (product.category !== lastCategory) {
//           rows.push(
//             <ProductCategoryRow
//               category={product.category}
//               key={product.category} />
//           );
//         }
//         rows.push(
//           <ProductRow
//             product={product}
//             key={product.name} />
//         );
//         lastCategory = product.category;
//       });
    
//     return(
//         <table className="product-Table">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>
//         <ProductCategoryRow />
//         <ProductRow />
//         <ProductRow />
//         <ProductCategoryRow />
//         <ProductRow />
//         <ProductRow />
//       </tbody>
//     </table>
//     )
//  }

//  export default ProductTable

 