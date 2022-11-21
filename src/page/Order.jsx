import { useLoaderData } from "react-router-dom";

function Order() {
  const menus = [
    {
      id: 1,
      img: "/image-order/dish-1-1.svg",
      title: "Purple Tostada",
      price: 36,
    },

    {
      id: 2,
      img: "/image-order/dish-1-2.svg",
      title: "Bruno's Scribble",
      price: 30,
    },

    {
      id: 3,
      img: "/image-order/dish-1-3.svg",
      title: "Fresh Oysters ",
      price: 59,
    },

    {
      id: 4,
      img: "/image-order/dish-1-4.svg",
      title: "Wild Mushroom ",
      price: 18,
    },

    {
      id: 5,
      img: "/image-order/dish-2-1.svg",
      title: "Ebony Fillet Steak",
      price: 58,
    },

    {
      id: 6,
      img: "/image-order/dish-2-2.svg",
      title: "Flank Steak",
      price: 30,
    },

    {
      id: 7,
      img: "/image-order/dish-2-3.svg",
      title: "Crispy Chicken",
      price: 29,
    },

    {
      id: 8,
      img: "/image-order/dish-2-4.svg",
      title: "Pan  Barramundi",
      price: 38,
    },

    {
      id: 9,
      img: "/image-order/dish-3-1.svg",
      title: "Beer Battered Fish",
      price: 42,
    },

    {
      id: 10,
      img: "/image-order/dish-3-2.svg",
      title: "Blue Eyed Cod",
      price: 18,
    },

    {
      id: 11,
      img: "/image-order/dish-3-3.svg",
      title: "Blueberry Beef",
      price: 25,
    },

    {
      id: 12,
      img: "/image-order/dish-3-4.svg",
      title: "Peach Salad",
      price: 15,
    },

    {
      id: 13,
      img: "/image-order/dish-4-1.svg",
      title: "Prickly Pear Tonic",
      price: 12,
    },

    {
      id: 14,
      img: "/image-order/dish-4-2.svg",
      title: "Chicha Morada",
      price: 12,
    },

    {
      id: 15,
      img: "/image-order/dish-4-3.svg",
      title: "Better Boy",
      price: 16,
    },

    {
      id: 16,
      img: "/image-order/dish-4-4.svg",
      title: "Tommy's Margarita",
      price: 10,
    },
  ];

  const { products, categories } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="container">
      <div className="row color-white">
        {menus.map((item) => (
          <div class="col-xl-3 col-6" id={item.id}>
            <div class="pd-x-30">
              <div class="pointer overflow-hidden position-relative dish-item">
                <div class="click-decs">
                  <img src={item.img} alt="" />
                </div>
                <button class="add-cart-btn font-nor">ADD TO CART</button>
              </div>
              <div class="font-16 font-nor mg-t-10">
                <div class="name-dish">{item.title}</div>
                <div class="d-flex">
                  <div class="unit">$</div>
                  <div class="price">{item.price}</div>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button class="add-cart-mobile-btn font-14 pimary-color font-nor">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
