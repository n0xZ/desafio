module.exports = {
    purge: {
        enabled: true,
        content: ['./pages/**/*.tsx', './components/**/*.tsx'],
        options: {
            safelist: ['dark'],
        },
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                roboto: 'Roboto ',
                ubuntu: 'Ubuntu',
     
            },
            colors: {
                mint: '#63FFC7',
                darkPurple: '#24243e',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
