import React from 'react';
import renderer from 'react-test-renderer';

import * as nextRouter from 'next/router';

import NavBar from '../../../components/Navigation/NavBar';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

it('renders correctly', () => {
  const tree = renderer
    .create(<NavBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
