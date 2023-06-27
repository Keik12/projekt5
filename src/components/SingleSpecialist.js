export const SingleSpecialist = ({ item }) => {
  return (
    <div className="specialist-details">
      <div
        className="circle"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="text-wrapper">
        <p className="person">{`${item.fullname} [${item.department}]`}</p>
        <p className="description">{item.description}</p>
      </div>
    </div>
  );
};
