import PropTypes from "prop-types";

export default function Button({ clickHandler, txt, bgColor }) {
  return (
    <button
      type="button"
      onClick={clickHandler}
      className={`rounded px-4 py-2 text-white bg-${bgColor}-500`}
    >
      {txt}
    </button>
  );
}

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  txt: PropTypes.string.isRequired,
};

Button.defaultProps = {
  bgColor: "blue",
};
