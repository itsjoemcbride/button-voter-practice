import renderer from "react-test-renderer";
import Products from "./Products";

// Test this component with dummy/mock data
const products = [
  {
    price: "$49.99",
    name: "Test 1",
  },
];

it("renders without crashing", () => {
  const rendered = renderer.create(<Products products={products} />).toJSON();
  expect(rendered).toMatchSnapshot();
});
