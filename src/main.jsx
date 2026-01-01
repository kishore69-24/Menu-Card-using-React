import { createRoot } from "react-dom/client";
import RecipeCard from "./Recipe";
import Data from "./components/Data"

const root = createRoot(document.getElementById("root"));

function RecipeCards() {
  return (
    <>
      <header className="mainhead">RECIPE MENU CARD</header>
      <div className="mainParent">
        {Data.map((item, idx) => (
          <RecipeCard
            key={item.name + idx}
            item={item}
          />
        ))}
      </div>
    </>
  );
}

root.render(<RecipeCards />);