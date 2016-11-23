import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    var pTable = this;
    this.props.products.forEach(function(product){
      console.log(product);
      if (pTable.props.inStockOnly && !product.stocked){
        return
      }
      if(!product.name.toLowerCase().includes(
            pTable.props.filterText.toLowerCase()
          )
        ){
        return
      }
      if (product.category !== lastCategory){
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        lastCategory = product.category;
      }
        rows.push(<ProductRow product={product} key={product.name}  />);
    });
    return (
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
