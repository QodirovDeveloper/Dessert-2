import { useSelector, useDispatch } from "react-redux";
import {
  removeDessert,
  incrementDessert,
  decrementAmount,
  clearDessert,
} from "../app/features/dessertsSlice";
import { CiCircleRemove, CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function YourCart() {
  const dispatch = useDispatch();
  const { desserts, totalPrice, totalAmount } = useSelector(
    (store) => store.desserts
  );

  return (
    <div className="w-full min-[900px]:max-w-[25%]">
      <div className="p-6 bg-white rounded-2xl">
        <p className="text-[#C73B0F] pb-6 w-[156px] font-bold text-2xl">
          Your Cart ({totalAmount})
        </p>

        {desserts.length === 0 ? (
          <div className="flex items-center justify-center flex-col">
            <img
              className="py-4"
              src="./images/illustration-empty-cart.svg"
              alt="empty-cart"
            />
            <p className="text-sm text-[#87635A]">
              Your added items will appear here
            </p>
          </div>
        ) : (
          <>
            <ul className="space-y-4">
              {desserts.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm py-2">{item.name}</p>
                    <div className="flex gap-2 text-sm text-[#AD8A85] items-center">
                      <p>{item.amount}x</p>
                      <p>@ ${item.price.toFixed(2)}</p>
                      <p className="font-semibold text-black">
                        ${(item.amount * item.price).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    className="p-1 cursor-pointer hover:text-red-500 text-[#AD8A85]"
                    onClick={() => dispatch(removeDessert(item.id))}
                  >
                    <CiCircleRemove size={20} />
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between py-6 text-[#AD8A85] font-medium">
              <p>Order Total</p>
              <p className="text-black font-semibold text-lg">
                ${totalPrice.toFixed(2)}
              </p>
            </div>

            <div className="py-4 flex items-center justify-center gap-2 bg-[#FCF8F6] rounded-md">
              <img
                className="w-6 h-6"
                src="./images/icon-carbon-neutral.svg"
                alt="carbon"
              />
              <p className="text-sm text-[#87635A]">
                This is a carbon-neutral delivery
              </p>
            </div>

            <button
              className="bg-[#C73B0F] cursor-pointer py-4 w-full mt-6 rounded-full text-[16px] text-white"
              onClick={() => alert("Order confirmed!")}
            >
              Confirm Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default YourCart;
