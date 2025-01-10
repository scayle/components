export default {
    pageSize: {
        type: Number,
        required: true,
        default: 1,
        validation: (value: number) => value >= 1,
    },

    total: {
        type: Number,
        required: true,
        default: 1,
        validation: (value: number) => value >= 0,
    },

    currentPage: {
        type: Number,
        default: 1,
        validation: (value: number) => value >= 1,
    },

    disableCollapsedPages: {
        type: Boolean,
        default: false,
    },
};
