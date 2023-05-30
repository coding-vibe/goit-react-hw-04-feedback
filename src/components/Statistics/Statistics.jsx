import React from 'react';
import PropTypes from "prop-types";
import { Title, Data, Percentage } from '../Statistics/Statistics.styled.js';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
        <Title>Statistics</Title>
                <Data>Good: {good}</Data>
                <Data>Neutral: {neutral}</Data>
                <Data>Bad: {bad}</Data>
                <Data>Total: {total}</Data>
                <Data>Positive feedback: <Percentage>{positivePercentage}%</Percentage> </Data>
    </div>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;