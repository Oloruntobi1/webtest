import React from 'react';
import renderer from 'react-test-renderer';
import CountryCodesSelect from '../../components/Form/Fields/CountryCodesSelect';

it('renders correctly', () => {
  const tree = renderer
    .create(<CountryCodesSelect value="+1" onChange={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
