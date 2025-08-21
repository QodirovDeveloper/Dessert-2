import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import {
  addDessert,
  decrementAmount,
  incrementDessert,
  removeDessert,
} from "../app/features/dessertsSlice";
import { useDispatch, useSelector } from "react-redux";

function Cart({ dessert }) {
  const dispatch = useDispatch();
  const { desserts } = useSelector((store) => store.desserts);

  let isAdded = desserts.find((item) => item.id == dessert.id);
  console.log(desserts);
  return (
    <div>
      <picture className="relative ">
        <source
          media={`(min-width: 996px)`}
          srcSet={`${dessert.image.desktop}`}
          sizes="250px"
        />
        <source
          media={`(min-width: 768px)`}
          srcSet={`${dessert.image.tablet}`}
          sizes="213px"
        />
        <source
          media={`(min-width: 375px)`}
          srcSet={`${dessert.image.mobile}`}
          sizes="327px"
        />
        <img
          src={`${dessert.image.tablet}`}
          className="w-full rounded-md"
          alt="dessert"
        />
        {!isAdded && (
          <button
            onClick={() => dispatch(addDessert(dessert))}
            className="flex gap-1 cursor-pointer items-center justify-center absolute -bottom-[21px]  rounded-full
             bg-white py-3 border border-[#AD8A85] left-24 right-24 min-[439px]:left-9 min-[439px]:right-9 sm:left-9 sm:right-9 xl:left-18 xl:right-18 text-sm font-semibold"
          >
            <img src="./images/icon-add-to-cart.svg" alt="" />
            Add to Cart
          </button>
        )}
        {isAdded && (
          <div
            className="text-white bg-[#C73B0F] flex gap-1 items-center justify-around absolute -bottom-[21px]  rounded-full
              py-2.5 border border-[#C73B0F] left-24 right-24 min-[439px]:left-9 min-[439px]:right-9 sm:left-9 sm:right-9 xl:left-18 xl:right-18 text-sm font-semibold"
          >
            <button
              onClick={() => {
                if (isAdded.amount == 1) {
                  dispatch(removeDessert(isAdded.id));
                } else {
                  dispatch(decrementAmount(isAdded.id));
                }
              }}
              className="text-2xl rounded-full cursor-pointer active:bg-white active:text-[#C73B0F]"
            >
              <CiCircleMinus />
            </button>
            {isAdded.amount}
            <button
              onClick={() => dispatch(incrementDessert(isAdded.id))}
              className="text-2xl rounded-full cursor-pointer active:bg-white active:text-[#C73B0F]"
            >
              <CiCirclePlus />
            </button>
          </div>
        )}
      </picture>
      <div className="pt-9 pb-2">
        <p className="text-[#AD8A85] text-sm">{dessert.category}</p>
        <p className=" text-[18px]">{dessert.name}</p>
        <p className="text-[#C73B0F] text-xl">{dessert.price}</p>
      </div>
    </div>
  );
}

export default Cart;
