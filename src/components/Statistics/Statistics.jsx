import PropTypes from 'prop-types';
import {StatisticsList, Item} from './Statistics.styled'

const Statistics = ({ good, bad, neutral, total, positiveFeedback }) => {
    return (
        <StatisticsList>
            <Item><b>Neutral:</b>{neutral}</Item>
            <Item><b>Bad:</b>{bad}</Item>
            <Item><b>Total:</b>{total}</Item>
            <Item><b>Positive feedback:</b>{total ? positiveFeedback : 0}%</Item>
            <Item><b>Good:</b>{good}</Item>
        </StatisticsList>)}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired
}