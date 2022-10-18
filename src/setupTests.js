import { h } from 'preact';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';

configure({ adapter: new Adapter() });

global.h = h;
global.mount = mount;
global.shallow = shallow;
