/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { SideBar } from ".";
import { renderTheme } from "../../utils/renderTheme";
import configureStore from "redux-mock-store";
import { describe, it } from "vitest";

const mockStore = configureStore([]);

describe("<SideBar />", () => {
  const store = mockStore({
    menu: {
      menuOn: true,
      colorOn: false,
    },
    completeProject: {
      id: "1234",
      project: false,
    },
  });

  it("should a render Sidebar", () => {
    renderTheme(<SideBar />, store);

    const conteinerSidebar = screen.getByRole("navigation");
    const heading = screen.getByRole("heading", {
      name: "Bem Vindo ao meu Protifólio!",
    });
    const nav = screen.getByRole("list");
    const links = screen.getAllByRole("listitem");

    expect(conteinerSidebar).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(links.length).toBe(4);
  });

  it("should click the link", () => {
    renderTheme(<SideBar />, store);

    const links = screen.getAllByRole("listitem");

    expect(links.length).toBe(4);

    fireEvent.click(links[0].firstChild as any);
  });

  it("should not render", () => {
    renderTheme(<SideBar />);

    const conteinerSidebar = screen.queryByRole("navigation");

    expect(conteinerSidebar).not.toBeInTheDocument();
  });

  it("should to match snapshot", () => {
    renderTheme(<SideBar />, store);

    const conteinerSidebar = screen.getByRole("navigation");

    expect(conteinerSidebar).toMatchSnapshot();
  });
});
