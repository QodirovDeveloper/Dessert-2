import Desserts from "./components/Desserts";
import YourCart from "./components/YourCart";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, error, loading } = useFetch(
    "https://json-api.uz/api/project/dessertss/desserts"
  );
  return (
    <div className="m">
      <div className=" flex gap-8 lg:pl-20 lg:pr-20 sm:pl-10 sm:pr-10 pr-2 pl-2 max-[900px]:flex-col pt-10">
        {loading && (
          <div style={{ width: "75%" }}>
            <p className="">Loading...</p>
          </div>
        )}
        {data && <Desserts desserts={data.data} />}
        <YourCart />
      </div>
    </div>
  );
}

export default App;
