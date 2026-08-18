import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  ...(isGitHubPagesBuild
    ? {
        output: "export",
        basePath: "/javier-ai-data-portfolio",
        assetPrefix: "/javier-ai-data-portfolio",
        trailingSlash: true,
        images: { unoptimized: true },
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
