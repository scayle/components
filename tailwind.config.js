// Create a safelist, so we do not omit classes we are using in Notification.vue
const safelist = [];
const colors = ['blue', 'danger', 'warning', 'success'];

colors.forEach(color => {
    safelist.push(`bg-${color}`);
    safelist.push(`shadow-${color}`);
});

module.exports = {
    presets: [require('@scayle/tailwind-base')],
    content: ['./src/**/*.{vue,js,ts}'],
    plugins: [require('tailwindcss-logical')],
    safelist,
};
