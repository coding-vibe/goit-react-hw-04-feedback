import React from 'react';
import PropTypes from "prop-types";
import { SectionBlock } from '../Section/Section.styled.js';

const Section = ({ title, children }) => {
    return (
        <SectionBlock>
            <h1>{title}</h1>
            {children}
        </SectionBlock>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Section;