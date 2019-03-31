import React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = ({ compiler, framework }: HelloProps): React.ReactElement => (
  <h1>
    Hello from {compiler} and {framework}!
  </h1>
);

export default Hello;
