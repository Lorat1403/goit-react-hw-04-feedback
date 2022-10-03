import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

export const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <List>
      {Object.entries(options).map(item => (
        <li key={item[0]}>
          <p>
            {item[0].charAt(0).toUpperCase() + item[0].slice(1)}: {item[1]}
          </p>
        </li>
      ))}
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Percent: {positivePercentage}%</p>
      </li>
    </List>
  );
};

Statistics.protoTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
