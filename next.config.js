/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/nextblog",
	assetPrefix: "/nextblog",
	output: "export",
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

module.exports = nextConfig;
