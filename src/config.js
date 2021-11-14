"use strict";

const description = "Open Emojis on the blockchain";
const baseUri = "ipfs://QmeW3ePhHEeaWSgG8ydxTo3zi57LaA2j7kknjoEK2mkbYR";

const layerConfigurations = [
	// White BG
	{
		growEditionSizeTo: 34,
		layersOrder: [{ name: "background_white" }, { name: "face" }],
	},
	{
		growEditionSizeTo: 43, // 9
		layersOrder: [{ name: "background_white" }, { name: "face" }, { name: "lady_hat" }],
	},
	{
		growEditionSizeTo: 48, // 5
		layersOrder: [{ name: "background_white" }, { name: "face" }, { name: "glasses" }],
	},
	{
		growEditionSizeTo: 49, // 1
		layersOrder: [{ name: "background_white" }, { name: "face" }, { name: "top_hat" }],
	},
	// Red BG
	{
		growEditionSizeTo: 68, // 19
		layersOrder: [{ name: "background_red" }, { name: "face" }],
	},
	{
		growEditionSizeTo: 73, // 5
		layersOrder: [{ name: "background_red" }, { name: "face" }, { name: "lady_hat" }],
	},
	{
		growEditionSizeTo: 75, // 2
		layersOrder: [{ name: "background_red" }, { name: "face" }, { name: "glasses" }],
	},
	{
		growEditionSizeTo: 76, // 1
		layersOrder: [{ name: "background_red" }, { name: "face" }, { name: "top_hat" }],
	},
	// Green BG
	{
		growEditionSizeTo: 95, // 19
		layersOrder: [{ name: "background_green" }, { name: "face" }],
	},
	{
		growEditionSizeTo: 100, // 5
		layersOrder: [{ name: "background_green" }, { name: "face" }, { name: "lady_hat" }],
	},
	{
		growEditionSizeTo: 102, // 2
		layersOrder: [{ name: "background_green" }, { name: "face" }, { name: "glasses" }],
	},
	{
		growEditionSizeTo: 103, // 1
		layersOrder: [{ name: "background_green" }, { name: "face" }, { name: "top_hat" }],
	},
	// Blue BG
	{
		growEditionSizeTo: 122, // 19
		layersOrder: [{ name: "background_blue" }, { name: "face" }],
	},
	{
		growEditionSizeTo: 127, // 5
		layersOrder: [{ name: "background_blue" }, { name: "face" }, { name: "lady_hat" }],
	},
	{
		growEditionSizeTo: 129, // 2
		layersOrder: [{ name: "background_blue" }, { name: "face" }, { name: "glasses" }],
	},
	{
		growEditionSizeTo: 130, // 1
		layersOrder: [{ name: "background_blue" }, { name: "face" }, { name: "top_hat" }],
	},
	// Rainbow BG
	{
		growEditionSizeTo: 131, // 9
		layersOrder: [{ name: "background_rainbow" }, { name: "face" }],
	},
	{
		growEditionSizeTo: 135, // 4
		layersOrder: [{ name: "background_rainbow" }, { name: "face" }, { name: "lady_hat" }],
	},
	{
		growEditionSizeTo: 137, // 2
		layersOrder: [{ name: "background_rainbow" }, { name: "face" }, { name: "glasses" }],
	},
	{
		growEditionSizeTo: 138, // 1
		layersOrder: [{ name: "background_rainbow" }, { name: "face" }, { name: "top_hat" }],
	},
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
	width: 512,
	height: 512,
};

const background = {
	generate: true,
	brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
	thumbPerRow: 5,
	thumbWidth: 50,
	imageRatio: format.width / format.height,
	imageName: "preview.png",
};

module.exports = {
	format,
	baseUri,
	description,
	background,
	uniqueDnaTorrance,
	layerConfigurations,
	rarityDelimiter,
	preview,
	shuffleLayerConfigurations,
	debugLogs,
	extraMetadata,
};
