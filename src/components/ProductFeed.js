function ProductFeed({ products }) {
  return (
    <div>
      <h1>Products here...</h1>
      {products.map(({ id, title, price, description, category, image }) => (
        <div>
          <p>#{id}</p>
          <p>#{title}</p>
          <p># {description}</p>
          .........
        </div>
      ))}
    </div>
  );
}

export default ProductFeed;
