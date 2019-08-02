import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Hello from '../';

it('Hello renders correctly', (): void => {
  const props = {
    compiler: 'newCompiler',
    framework: 'react',
  };
  const tree = renderer.create(<Hello {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
