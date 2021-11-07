import countryCodes from '../../../lib/country/codes';

export default function CountryCodesSelect(props) {
  const { value, onChange } = props;

  // prettier-ignore
  return (
    <select
      className="form-control custom-select"
      value={value}
      onChange={onChange}
    >
      {countryCodes.map((item) => (
        <option value={item.dial_code} key={item.code}>
          {`${item.code}(${item.dial_code})`}
        </option>
      ))}
    </select>
  );
}
