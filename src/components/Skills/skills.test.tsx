import React from "react";
import { screen } from "@testing-library/react";
import { Skills } from ".";
import { renderTheme } from "../../utils/renderTheme";
import { describe, it } from "vitest";

describe("<Skills />", () => {
  it("should a render skills component", () => {
    renderTheme(
      <Skills text="test">
        <div aria-label="icon">test</div>
      </Skills>
    );

    const conteinerSkil = screen.getByLabelText("Conteiner Skill");
    const heading = screen.getByRole("heading", { name: "test" });
    const icon = screen.getByLabelText("icon");

    expect(conteinerSkil).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(icon).toBeInTheDocument();

    expect(conteinerSkil).toMatchSnapshot();
  });
});
