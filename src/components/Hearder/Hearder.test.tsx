import React from "react";
import { Hearder } from ".";
import { renderTheme } from "../../utils/renderTheme";
import { act, screen } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

vi.useFakeTimers();

describe("<Hearder />", () => {
  const store = mockStore({
    menu: {
      menuOn: true,
      colorOn: true,
    },
    completeProject: {
      id: "1234",
      project: true,
    },
  });

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mock("react-type-animation", () => ({
      TypeAnimation: vi.fn(({ sequence, ...props }) => (
        <h2 {...props}>{sequence.join("")}</h2>
      )),
    }));
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should render initial text with color black", async () => {
    await act(async () => renderTheme(<Hearder />, store));

    const conteineHeader = screen.getByLabelText("Conteiner Hearder");
    const initialText = screen.getByRole("heading");

    expect(conteineHeader).toBeInTheDocument();
    expect(initialText).toHaveTextContent("Olá, Sou o");

    const conteinerText = screen.getByLabelText("Conteiner Text");

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    act(() => {
      vi.advanceTimersByTime(2000);
    });
  });

  it("should render initial text with color with", async () => {
    vi.mock("react-type-animation", () => ({
      TypeAnimation: vi.fn(({ sequence, ...props }) => (
        <h2 {...props}>{sequence.join("")}</h2>
      )),
    }));
    await act(async () => renderTheme(<Hearder />));
  });
});
