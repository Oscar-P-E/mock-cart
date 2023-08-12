import "./App.css";
import blackFridaySale from "./img/black-friday-sale.jpg";

function App() {
  return (
    <div>
      <div className="font-extralight text-6xl mb-1 mt-10">Welcome to...</div>
      <div className="italic font-black text-6xl mb-4">The Shoppe</div>
      <div className="image-container w-full h-[65vh] mx-auto overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={blackFridaySale}
          alt="black friday sale"
        />
      </div>
    </div>
  );
}

export default App;
