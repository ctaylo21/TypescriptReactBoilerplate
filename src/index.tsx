import React from 'react';
import Title from './components/Title';
import './styles/app.scss';
import Smile from './images/smiley.svg';
export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = ({ compiler, framework }: HelloProps): React.ReactElement => (
  <h2>
    <Title /> from {compiler} and {framework}!
    <Smile />
  </h2>
);

export default Hello;
