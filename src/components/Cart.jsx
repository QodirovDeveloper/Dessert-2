import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function Cart({ dessert }) {
  let isAdded = true;
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
        {isAdded && (
          <button
            className="flex gap-1 cursor-pointer items-center justify-center absolute -bottom-[21px]  rounded-full
             bg-white py-3 border border-[#AD8A85] left-24 right-24 min-[439px]:left-9 min-[439px]:right-9 sm:left-9 sm:right-9 xl:left-18 xl:right-18 text-sm font-semibold"
          >
            <img src="./images/icon-add-to-cart.svg" alt="" />
            Add to Cart
          </button>
        )}
        {!isAdded && (
          <div
            className="text-white bg-[#C73B0F] flex gap-1 items-center justify-around absolute -bottom-[21px]  rounded-full
              py-2.5 border border-[#C73B0F] left-24 right-24 min-[439px]:left-9 min-[439px]:right-9 sm:left-9 sm:right-9 xl:left-18 xl:right-18 text-sm font-semibold"
          >
            <button className="text-2xl rounded-full cursor-pointer active:bg-white active:text-[#C73B0F]">
              <CiCircleMinus />
            </button>
            4
            <button className="text-2xl rounded-full cursor-pointer active:bg-white active:text-[#C73B0F]">
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
