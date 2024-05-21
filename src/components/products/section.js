import Item from "../../Arrange/Pics";
import "../../App.css";
import "../../Styles/Homepage.css";

const Section = ({section}) => {
    const {products, category} = section
    console.log(section)
  return (
    <section className="P_items">
        <h1>{category.toUpperCase()}</h1>
      <hr />
      <section style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
        {products?.map((product, i) => (
          <Item
            product={product}
            key={product.id}
          />
        ))}
      </section>
    </section>
  );
};

export default Section
