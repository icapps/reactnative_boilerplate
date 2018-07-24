import { shallow } from 'enzyme';  // eslint-disable-line

const renderWrapper = component => shallow(component);

const shallowTester = (component) => {
  it('should render without crashing', () => {
    renderWrapper(component);
  });

  it('should match the snapshot', () => {
    const wrapper = renderWrapper(component);
    expect(wrapper).toMatchSnapshot();
  });
};

export default shallowTester;
