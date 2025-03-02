import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	assetPrefix: isProd ? "/qr_scanner/" : "",
	basePath: isProd ? "/qr_scanner" : "",
	output: "export",
};

export default nextConfig;
