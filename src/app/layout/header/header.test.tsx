import { shallow } from "enzyme";
import { Header } from "./Header";

describe("Pruebas en header", () => {
  test("Debe de mostrar el componente correctamente ", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});

export {};
