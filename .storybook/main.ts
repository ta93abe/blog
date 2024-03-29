import type { StorybookConfig } from "@storybook/nextjs";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	webpackFinal(config, options) {
		config.plugins?.push(
			new VanillaExtractPlugin(),
			new MiniCssExtractPlugin(),
		);

		config.module?.rules?.forEach((rule) => {
			if (
				rule &&
				typeof rule !== "string" &&
				"test" in rule &&
				rule.test instanceof RegExp &&
				typeof rule.exclude === "undefined" &&
				rule.test.test(".css")
			) {
				rule.exclude = /\.vanilla\.css$/i;
			}
		});

		config.module?.rules?.push({
			test: /\.vanilla\.css$/i,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: require.resolve("css-loader"),
					options: {
						url: false,
					},
				},
			],
		});

		return config;
	},
};
export default config;
