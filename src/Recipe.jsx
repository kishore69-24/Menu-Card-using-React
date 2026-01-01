export default function RecipeCard(props) {
  return (
    <div className="recipe-container">
      <header className="recipe-header">
        <h2>{props.item.name}</h2>
        <p>{props.item.time}</p>
      </header>

      <section className="recipe-details">
        <div>
          <p>{props.item.info1}</p>
          <p>{props.item.info2}</p>
          <p>{props.item.info3}</p>
        </div>
        <img
          className="foodimg"
          src={props.item.img}
          alt="recipe image"
        />
      </section>
    </div>
  );
}
