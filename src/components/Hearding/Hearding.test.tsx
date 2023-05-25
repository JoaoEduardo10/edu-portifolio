import React from "react";
import { screen } from "@testing-library/react";
import { Hearding } from ".";
import { renderTheme } from "../../utils/renderTheme";
import { describe, it } from "vitest";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("<Hearding />", () => {
  const store = mockStore({
    menu: {
      menuOn: false,
      colorOn: false,
    },
    completeProject: {
      id: "1234",
      project: false,
    },
  });

  it("should a render Heading with color white", () => {
    renderTheme(<Hearding text="Um test" />);

    const heading = screen.getByRole("heading", { name: "Um test" });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      color: "#fff",
    });
    expect(heading).toMatchSnapshot();
  });

  it("should a render Heading with color Black", () => {
    renderTheme(<Hearding text="Um test" />, store);

    const heading = screen.getByRole("heading", { name: "Um test" });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      color: "#000",
    });
    expect(heading).toMatchSnapshot();
  });
});
