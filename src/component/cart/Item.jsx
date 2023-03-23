import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDishToCart } from "../../store/feature/product/product.slice";

function DishItem({ dish }) {
  const dispatch = useDispatch();

  const handleAddDishCart = (id) => {
    dispatch(addDishToCart(id));
  };

  return (
    <div className="col-xl-3 col-6" key={dish.id}>
      <div className="pd-x-30">
        <div className="pointer overflow-hidden position-relative dish-item">
          <Link className="click-decs" to={`/productsByPage/${dish.id}`}>
            <img src={dish.img} alt="" />
          </Link>
          <button
            className="add-cart-btn font-nor"
            onClick={() => handleAddDishCart(dish.id)}
          >
            ADD TO CART
          </button>
        </div>
        <div className=" font-16 font-nor mg-t-10">
          <div className>
            <div className="name-dish">{dish.title}</div>
            <div className="d-flex  justify-content-between align-items-center">
              <div className="d-flex">
                <div className="unit">$</div>
                <div className="price">{dish.price}</div>
              </div>
              <button className=" add-cart-mobile-btn font-50 pimary-color font-nor">
                <i className="bx bxs-cart-add"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishItem;
