import React from "react";
import { renderTheme } from "../../utils/renderTheme";
import { describe, it } from "vitest";
import { ButtonLinks } from ".";
import { screen } from "@testing-library/react";

describe("<ButtonLinks />", () => {
  it("should a render ButtoDownload component", () => {
    renderTheme(<ButtonLinks link="https://test" text="test" />);

    const button = screen.getByRole("button");
    const link = screen.getByRole("link", { name: "test" });

    expect(button).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://test");
  });

  it("should to match snapshot", () => {
    renderTheme(<ButtonLinks link="https://test" text="test" />);

    const button = screen.getByRole("button");

    expect(button).toMatchSnapshot();
  });
});
