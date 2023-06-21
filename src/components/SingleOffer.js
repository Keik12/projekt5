export const SingleOffer = ({ item }) => {
  return (
    <div className={"box" + (item.isNew ? " new-offer" : "")}>
      <p>{item.name}</p>
      {item.isNew && <div className="dot-new"></div>}
    </div>
  );
};
