import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import App from "./App";

it("renders without crashing", () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it("displays the name and profile whenever we submit the form", () => {
  const nameInput = "John Doe";

  render(<App />);

  const h1 = screen.getByRole("heading", { level: 1 });
  const input = screen.getByLabelText(/name/i);
  const submitBtn = screen.getByRole("button", { name: /submit/i });

  userEvent.type(input, nameInput);
  userEvent.click(submitBtn);

  // Be sure to look for this ONLY after we have submitted the form.
  const h2 = screen.getByRole("heading", { level: 2 });
  screen.getByAltText(nameInput);

  expect(h1.textContent).toContain(nameInput);
  expect(h2.textContent).toContain(nameInput);
});
