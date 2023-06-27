import { specialistList } from "../../data/data";
import { SingleSpecialist } from "../SingleSpecialist";

const Specialists = () => {
  return (
    <section id="specialist" className="specialist">
      <div className="container">
        <h2 className="specialist-h2">Nasi specjaliści</h2>
        {specialistList.map((item) => (
          <SingleSpecialist item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Specialists;
