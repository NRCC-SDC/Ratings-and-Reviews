import React from 'react';
import Ratings from '../src/components/Ratings';
import renderer from 'react-test-renderer';

import { configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Displaying metadata', () => {
  let wrapper;
  let data = {
    product_id: '3',
    ratings: {
      4: 2,
      5: 1
    },
    recommended: {},
    characteristics: {
      Fit:{ id: 6, value: null },
      Length:{ id: 7, value: null },
      Comfort:{ id: 8, value: null },
      Quality:{ id: 9, value: null }
    }
  }

  beforeEach(() => {
    
    wrapper = shallow(<Ratings meta={data} />);
  });

  test('Should render an overview', () => {
    expect(wrapper.exists('#overview')).toBe(true);
  });

  test('Should calculate rating', () => {
    // Props not being passed properly. Skipping for now
    expect(wrapper.find('#rating-number').text()).toBe('4.3');
  })

  test('Should render a breakdown', () => {
    expect(wrapper.exists('#breakdown')).toBe(true);
  });

  test('Should render characteristics', () => {
    expect(wrapper.exists('#characteristics')).toBe(true);
  })
})