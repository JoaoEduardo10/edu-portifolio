import React from "react";
import { screen } from "@testing-library/react";
import { AboutMe } from ".";
import { renderTheme } from "../../utils/renderTheme";
import { it, describe, expect } from "vitest";

describe("<AboutMe />", () => {
  it("should a render Aboutme", () => {
    renderTheme(<AboutMe />);

    const aboutMeConteiner = screen.getByLabelText("Conteiner AboutMe");
    const heading = screen.getByRole("heading", { name: "Sobre mim" });
    const subHeading = screen.getByRole("heading", { name: "Teresina, PI" });
    const text = screen.getAllByLabelText("Texto");

    expect(aboutMeConteiner).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
    expect(text.length).toBe(2);
  });

  it("should to match snapshot", () => {
    renderTheme(<AboutMe />);

    const aboutMeConteiner = screen.getByLabelText("Conteiner AboutMe");

    expect(aboutMeConteiner).toMatchSnapshot();
  });
});
