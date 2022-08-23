import PropTypes from "prop-types";

function createProductLIs(productsData) {
  return productsData.map((product) => (
    <li key={product.name}>
      {product.name} - {product.price}
    </li>
  ));
}

export default function Products({ products }) {
  return <ul>{createProductLIs(products)}</ul>;
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};
