import ListItem from './ListItem';

export default function ListSection({ data }) {
  const { positions, positionsCount: numberOfPositions } = data;

  return (
    /* prettier-ignore */
    <div className="my-7">
      <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
        <h5 className="text-muted my-0 font-weight-normal text-uppercase">
          {data.category}
        </h5>
        <small className="text-muted">{`${numberOfPositions} Open Position`}</small>
      </div>
      {positions
        && positions.map((position) => (
          <ListItem data={position} key={position.id} />
        ))}
    </div>
  );
}
