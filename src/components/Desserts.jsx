import Cart from "./Cart";

function Desserts({ desserts }) {
  return (
    <div className="w-full min-[900px]:max-w-[75%] ">
      <p>Desserts</p> 
      <div className="grid gap-6 md:grid-cols-3 min-[440px]:grid-cols-2 ">
        {desserts.map((dessert) => {
          return <Cart key={dessert.id} dessert={dessert} />;
        })}
      </div>
    </div>
  );
}

export default Desserts;
