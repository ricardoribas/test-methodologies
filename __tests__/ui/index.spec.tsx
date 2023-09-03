/**
 * @jest-environment jsdom
 */
import React, { MouseEventHandler } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserEvent from "@testing-library/user-event";
import { Button } from "../../src/ui/button";

describe("Button Component", () => {
  it("Should load correctly", async () => {
    const output = render(<Button onClick={jest.fn()} />);

    expect(output).toMatchSnapshot();
  });

  it("Should click button", async () => {
    const onClickSpyFn = jest.fn();

    render(<Button onClick={onClickSpyFn} />);

    await UserEvent.click(screen.getByText("Click Me!"));

    expect(onClickSpyFn).toHaveBeenCalled();
  });
});
