import React from "react";
import { describe, it } from "vitest";
import { ButtoDownload } from ".";
import { renderTheme } from "../../utils/renderTheme";
import { screen } from "@testing-library/react";

describe("<ButtoDownload />", () => {
  it("should a render ButtoDownload component", () => {
    renderTheme(<ButtoDownload link="https://test" text="test" />);

    const button = screen.getByRole("button");
    const link = screen.getByRole("link", { name: "test" });

    expect(button).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://test");
  });

  it("should to match snapshot", () => {
    renderTheme(<ButtoDownload link="https://test" text="test" />);

    const button = screen.getByRole("button");

    expect(button).toMatchSnapshot();
  });
});
