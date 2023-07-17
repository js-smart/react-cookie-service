/* eslint-disable */
export default {
	displayName: 'js-cookie-service',
	preset: '../../jest.preset.js',
	transform: {
		'^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	coverageDirectory: '../../coverage/libs/js-cookie-service',
};
