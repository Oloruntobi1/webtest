import React from 'react';
import renderer from 'react-test-renderer';
import ButtonIcon from '../../components/Common/Button/Icon';

it('renders correctly', () => {
  const tree = renderer
    .create(<ButtonIcon src="/assets/svg/icons/phone.svg" name="phone" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
