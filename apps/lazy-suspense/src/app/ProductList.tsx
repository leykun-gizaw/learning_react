import { products } from '../utils/fakeData';
import Product from './Product';

export default function ProductsList() {
  return products.map((product) => (
    <Product key={product.id} product={product} />
  ));
}
