module.exports = {
    plugins: {
        tailwindcss: {},
        'postcss-logical': {
            preserve: true,
        },
        'postcss-dir-pseudo-class': {
            preserve: true,
        },
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
};
