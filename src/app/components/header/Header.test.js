import HeaderDefault, { Header, StyledHeader } from './Header';

describe('Header', () => {
  it('should render StyledHeader', () => {
    mount(<StyledHeader />);
  });

  it('should render default export', () => {
    mount(<HeaderDefault />);
  });

  it('should render Header', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find(StyledHeader).length).toBe(1);
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('Link').length).toBe(3);
  });
});
