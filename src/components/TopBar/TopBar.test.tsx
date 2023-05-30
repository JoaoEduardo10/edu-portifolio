import React from "react";
import { TopBar } from ".";
import { renderTheme } from "../../utils/renderTheme";
import { fireEvent, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("<TopBar />", () => {
  const store = mockStore({
    menu: {
      menuOn: true,
      colorOn: false,
    },
    completeProject: {
      id: "1234",
      project: true,
    },
  });

  it("should a render TopBar", () => {
    renderTheme(<TopBar />);

    const conteinerTopBar = screen.getByLabelText("Conteiner TopBar");
    const openMenuButton = screen.getByLabelText("Abrir Menu");
    const heading = screen.getByRole("heading", { name: "Portifólio" });
    const backgroundButton = screen.getByLabelText(
      "Botão de Alteração de Fundo"
    );

    expect(conteinerTopBar).toBeInTheDocument();
    expect(openMenuButton).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(backgroundButton).toBeInTheDocument();
    expect(backgroundButton).toHaveAttribute(
      "class",
      "sc-fFGjHI gJMYiZ round-left"
    );

    fireEvent.click(backgroundButton);

    expect(conteinerTopBar).toMatchSnapshot();
  });

  it("should show the menu", () => {
    renderTheme(<TopBar />);

    const openMenuButton = screen.getByLabelText("Abrir Menu");
    const invisibleCloseMenuButton = screen.queryByLabelText("Fechar menu");

    expect(openMenuButton).toBeInTheDocument();
    expect(invisibleCloseMenuButton).not.toBeInTheDocument();

    fireEvent.click(openMenuButton);
  });

  it("should close the menu", () => {
    renderTheme(<TopBar />, store);

    const invisibleOpenMenuButton = screen.queryByLabelText("Abrir Menu");
    const closeMenuButton = screen.getByLabelText("Fechar menu");

    expect(closeMenuButton).toBeInTheDocument();
    expect(invisibleOpenMenuButton).not.toBeInTheDocument();

    fireEvent.click(closeMenuButton);
  });

  it("should change the background color", () => {
    renderTheme(<TopBar />, store);

    const backgroundButton = screen.getByLabelText(
      "Botão de Alteração de Fundo"
    );

    expect(backgroundButton).toBeInTheDocument();
    expect(backgroundButton).toHaveAttribute(
      "class",
      "sc-fFGjHI gJMYiZ round-right"
    );

    fireEvent.click(backgroundButton);
  });
});
