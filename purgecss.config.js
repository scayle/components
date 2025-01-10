module.exports = {
    content: ['src/**/*.{ts,js,vue}'],
    defaultExtractor: content => {
        // Use a custom extractor which recognizes : and / as valid selector characters
        return content.match(/[A-Za-z0-9-_:/]+/g) || [];
    },
};
