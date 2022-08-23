import PropTypes from "prop-types";

export default function Results({ results }) {
  return (
    <>
      <h3>Results</h3>
      <ul>
        {Object.entries(results).map((result) => (
          <li key={result[0]}>
            {result[0]} - {result[1]}
          </li>
        ))}
      </ul>
    </>
  );
}

Results.propTypes = {
  results: PropTypes.shape({
    [PropTypes.string]: PropTypes.number,
  }).isRequired,
};
