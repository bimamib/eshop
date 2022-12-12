import useSwr from 'swr';
import { ProductTypeList } from '../../../types';
import ProductItem from '../../product-item';
import ProductsLoading from './loading/index';

const ProductsContent = () =>{
    const fetcher = (url: string) => fetch(url).then((res)=> res.json());
    const { data,error } = useSwr('api/products', fetcher);

    if(error) return <div>failed to load</div>;
    return (
        <>
          {!data && 
            <ProductsLoading />
          }
    
          {data &&
            <section className="products-list">
              {data.map((item: ProductTypeList)  => (
                <ProductItem 
                  id={item.id} 
                  name={item.name}
                  price={item.price}
                  color={item.color}
                  currentPrice={item.currentPrice}
                  key={item.id}
                  images={item.images} 
                />
              ))}
            </section>
          }
        </>
      );
};

export default ProductsContent