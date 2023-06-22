import { offersList } from "../../data/data";
import { SingleOffer } from "../SingleOffer";

const Offers = () => {
  return (
    <section id="offer" className="offer">
      <div className="container">
        <h2 className="offer-h2">Czym zajmuje się nasza firma?</h2>
        <div className="container-grid">
          {offersList.map((item) => (
            <SingleOffer item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Offers;
