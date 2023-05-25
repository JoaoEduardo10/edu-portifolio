import React from "react";
import { screen } from "@testing-library/react";
import { AboutMe } from ".";
import { renderTheme } from "../../utils/renderTheme";
import { it, describe, expect } from "vitest";

describe("<AboutMe />", () => {
  it("should a render Aboutme", () => {
    renderTheme(<AboutMe />);

    const aboutMeConteiner = screen.getByLabelText("Conteiner AboutMe");

    expect(aboutMeConteiner).toBeInTheDocument();
  });
});
