import React from 'react';
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import { OptionsList, Button } from '../FeedbackOptions/FeedbackOptions.styled.js';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  const capitalizeFirstLetter = word => { return word.charAt(0).toUpperCase() + word.slice(1);
  };

   return (
    <div>
      <OptionsList>
        {options.map(option => (
          <li key={nanoid()}>
            <Button
              type='button'
              onClick={() => onLeaveFeedback(option)}>
              {capitalizeFirstLetter(option)}
            </Button>
          </li>
        ))}
      </OptionsList>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;