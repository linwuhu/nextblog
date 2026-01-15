/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: process.env.NEXT_PUBLIC_BASE_PATH,
	output: "export",
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

module.exports = nextConfig;
