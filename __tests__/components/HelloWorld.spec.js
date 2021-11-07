import React from 'react';
import renderer from 'react-test-renderer';

import { HelloWorld } from '../../components/HelloWorld';

const style = {
  color: 'red',
  fontSize: '14px',
};

it('renders correctly', () => {
  const tree = renderer
    .create(<HelloWorld style={style} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
