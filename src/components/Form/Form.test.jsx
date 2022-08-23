import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Form from "./Form";

it("renders without crashing", () => {
  const rendered = renderer.create(<Form setName={() => {}} />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it("calls the submit handler whenever the form is submitted", () => {
  // Arrange - create a mock function to track the calls to the submit handler.
  const handleSubmit = jest.fn();

  // Act - render the form component with the mock submit handler.
  render(<Form setName={handleSubmit} />);

  // Get the form submit button in an accessible way as per RTL docs.
  // (https://testing-library.com/docs/queries/about/#priority)
  const submitBtn = screen.getByRole("button", { name: /submit/i });

  userEvent.click(submitBtn);

  // Assert - check that the submit handler was called.
  expect(handleSubmit).toHaveBeenCalled();
});
