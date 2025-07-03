import { FakeProductType } from '../definitions';

export default function Product({ product }: { product: FakeProductType }) {
  return (
    <div>
      <p>{product.name}</p>
    </div>
  );
}
