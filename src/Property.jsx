import PropTypes from "prop-types";

export default function Property({ property }) {
  const style = {
    backgroundColor: 'darkslategrey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: "2px dashed grey",
    flexBasis: "18rem",
    padding: '1em 2em'
  };
  return (
    <>
      <div style={style}>
        <h2>{property.name}</h2>
        <h3>${property.price} / night</h3>
        <h4>{property.rating} ⭐</h4>
      </div>
    </>
  );
}

Property.propTypes = {
  property: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number
  })
};