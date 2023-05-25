import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const store = mockStore({
  menu: {
    menuOn: false,
    colorOn: true,
  },
  completeProject: {
    id: "1234",
    project: false,
  },
});

export { store };
