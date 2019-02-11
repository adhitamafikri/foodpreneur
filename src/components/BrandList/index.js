const { Avatar } = antd;

const CardList = ({ robots }) => {
  const cardsArray = robots.map(robot => {
    return (
      <Row>
      </Row>
    );
  });

  return (
    <div>
      {cardsArray}
    </div>
  );
};