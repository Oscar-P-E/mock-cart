import { Product } from "../types";
import { useState } from "react";

const ProductCard = ({
  product,
  context,
}: {
  product: Product;
  context: "shop" | "cart";
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const chars = 300;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedDescription =
    !isExpanded && product.description.length >= chars
      ? product.description.substring(0, chars) + "..."
      : product.description;

  return (
    <div className="product-card m-4 p-4 grid grid-cols-2 items-center">
      <div className="product-card__image">
        <img
          className="object-contain w-52 mx-auto m-4"
          src={product.image}
          alt={`${product.title} image`}
        />
      </div>

      <div className="product-card__info flex flex-col gap-4 mb-auto">
        <div className="product-card__name text-lg font-bold">
          {product.title}
        </div>
        <div className="product-card__description">
          {displayedDescription}
          {product.description.length >= chars && (
            <button onClick={toggleExpanded} className="text-blue-500">
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
        <div className="product-card__price font-mono">{`$ ${product.price}`}</div>

        <div className="product-card__buying">
          <span className="mr-2">Quantity:</span>
          <input
            className="w-12 border"
            type="number"
            defaultValue={1}
            min={1}
            max={99}
          />
        </div>
        {context === "shop" ? (
          <button className="mx-4 product-card__button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        ) : (
          <button className="product-card__button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
