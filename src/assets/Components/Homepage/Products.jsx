import ProductCard from './ProductCard';

const Products = ({products, selected, setSelected}) => {
    // console.log(products);
    return (
        <div className="w-[95%] md:max-w-300 mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                products.map((product) => 
                    (<ProductCard product={product} key={product.id} selected={selected} setSelected={setSelected}/>)
                )
            }
        </div>
    );
};

export default Products;