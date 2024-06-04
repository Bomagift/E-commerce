import React from "react";
import './Productlist.css'
import {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useSearchProductsQuery,
  useGetProductsWithPaginationQuery,
  useGetSortedProductsQuery,
  useGetProductCategoriesQuery,
  useGetProductsByCategoryQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "../features/products/productsApi";
// import "./App.css";

export default function Productlist() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const { data: productById } = useGetProductByIdQuery(1);
  const { data: searchResults } = useSearchProductsQuery("phone");
  const { data: paginatedProducts } = useGetProductsWithPaginationQuery({
    limit: 10,
    skip: 10,
    select: "title,price",
  });
  const { data: sortedProducts } = useGetSortedProductsQuery({
    sortBy: "title",
    order: "asc",
  });
  const { data: categories } = useGetProductCategoriesQuery();
  const { data: productsByCategory } =
    useGetProductsByCategoryQuery("smartphones");
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleAddProduct = async () => {
    const newProduct = { title: "BMW Pencil" /* other product data */ };
    await addProduct(newProduct);
  };

  const handleUpdateProduct = async () => {
    const updatedProduct = { title: "iPhone Galaxy +1" };
    await updateProduct({ id: 1, updatedProduct });
  };

  const handleDeleteProduct = async () => {
    await deleteProduct(1);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


    return (
      <div>
        <div className="App">
          <div className="App-header">
            <h3>BESTSELLER PRODUCTS</h3>
          </div>
          <div className="products-3">
            {products?.products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <div className="prod-price-rate-box">
                  <p className="prod-price">Price: ${product.price}</p>
                  <p className="prod-rating">Rating: {product.rating}</p>
                </div>
              </div>
            ))}
          </div>
          {}
          <button className="product-btn" type="button">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    );
}
