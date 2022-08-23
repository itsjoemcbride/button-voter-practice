import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Button from "./Button";

it("renders without crashing", () => {
  const rendered = renderer
    .create(<Button changeHandler={() => {}} txt="Click Me!" />)
    .toJSON();
  expect(rendered).toMatchSnapshot();
});

it("calls the change handler whenever the button is clicked", () => {
  const mockChangeHandler = jest.fn();

  render(<Button changeHandler={mockChangeHandler} txt="" />);

  userEvent.click(screen.getByRole("button"));

  expect(mockChangeHandler).toHaveBeenCalled();
});
