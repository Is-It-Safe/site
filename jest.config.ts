import type { Config } from 'jest';

const config: Config = {
	verbose: true,
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.css$': 'jest-transform-css',
	},
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

export default config;
