import { Product } from "../data/types";
import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import RemoveFromCartBtn from "./RemFromCartBtn";

const ProductCard = ({
  product,
  context,
  inCart = false,
}: {
  product: Product;
  context: "shop" | "cart";
  inCart?: boolean;
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
    <div
      className={`product-card m-4 p-4 grid grid-cols-2 items-center ${
        inCart ? "in-cart" : ""
      }`}
    >
      {" "}
      {/* Add conditional class */}
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
          <AddToCartBtn id={product.id} />
        ) : (
          <RemoveFromCartBtn id={product.id} />
        )}
        <div className="product-card__status text-yellow-500 italic h-5">
          {inCart && "Added to Cart"}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
