/* eslint-disable */
export default {
	displayName: 'react-cookie-service',
	preset: '../../jest.preset.js',
	transform: {
		'^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	coverageDirectory: '../../coverage/libs/react-cookie-service',
};
