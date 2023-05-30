export const checkImageUrl = (url) => {
    if (!url) return false;
    else {
        // const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', '1');
        const pattern = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
        return pattern.test(url)
    }
}