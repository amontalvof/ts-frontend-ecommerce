// * Env Variables
export const baseUrl = process.env.REACT_APP_API_URL;
export const reCaptchaKey = process.env.REACT_APP_RECAPTCHA_KEY;
export const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

//? Routes
export const relevantRoutes = ['free', 'sales', 'views'];
export const otherCategoriesRoutes = ['products', 'search'];
export const privateRoutes = ['profile', 'cart'];

// ! Colors
export const yellowStar = '#fdcc0d';
export const grayStar = '#e4e5e9';
export const gray = '#808080';
export const redError = '#cc0000';
export const white = '#ffffff';
export const lightBlack = '#333333';
export const defaultBrand = '#47bac1';

export const modalCustomStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
