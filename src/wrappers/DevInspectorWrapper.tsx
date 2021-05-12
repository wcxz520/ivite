import React, { Fragment, FC } from 'react';
import { Inspector } from 'react-dev-inspector';

console.log(import.meta)

const InspectorWrapper = import.meta.env.MODE === 'development' ? Inspector : Fragment;

const DevInspectorWrapper: FC = ({ children }) => <InspectorWrapper keys={['control', 'shift', 'a']}>{children}</InspectorWrapper>

export default DevInspectorWrapper;