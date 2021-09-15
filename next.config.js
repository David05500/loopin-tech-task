/** @type {import('next').NextConfig} */
const withImages = require("next-images");

module.exports = withImages({
    images: {
        domains: ['via.placeholder.com']
    },
    reactStrictMode: true,

    webpack(config, options) {
        return config;
    }
});
