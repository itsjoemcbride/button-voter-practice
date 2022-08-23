import PropTypes from "prop-types";

export default function Profile({ name, imgUrl }) {
  return (
    <section className="mx-auto w-48 flex-col items-center">
      <h2> Photo of {name}</h2>
      <img
        className=""
        src={imgUrl}
        alt={name}
        style={{ width: 200, height: 200 }}
      />
    </section>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
