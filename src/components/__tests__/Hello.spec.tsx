import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Hello from '../Hello';

it('SubjectToBeTested renders correctly', () => {
  const props = {
    compiler: 'newCompiler',
    framework: 'react',
  };
  const tree = renderer.create(<Hello {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
