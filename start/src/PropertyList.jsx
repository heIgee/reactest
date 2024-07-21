import Property from "./Property";
import PropTypes from 'prop-types';

export default function PropertyList({ properties }) {
  const style = {
    margin: '0',
    width: '100%',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: "3rem"
  };
  return (
    <>
      <article style={style}>
        {properties.map(p => <Property key={p.id} property={p} />)}
      </article>
    </>
  );
}

PropertyList.propTypes = {
  properties: PropTypes.arrayOf({
    property: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      rating: PropTypes.number
    })
  })
};