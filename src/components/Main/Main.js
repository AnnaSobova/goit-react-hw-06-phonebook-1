import React from 'react';
import MainPage from './Main.styled';
import PropTypes from 'prop-types';

const Main = ({ title, children }) => (
  <MainPage>
    <h1>{title}</h1>
    {children}
  </MainPage>
);

export default Main;

Main.propTypes = {
  title: PropTypes.string.isRequired,
};
