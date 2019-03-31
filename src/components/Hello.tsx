import React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = ({ compiler, framework }: HelloProps): React.ReactElement => (
  <h2>
    Hello from {compiler} and {framework}!
  </h2>
);

export default Hello;
