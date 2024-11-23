export const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export const formatNumber = (number) => {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'm';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'k';
    }
    return number.toString();
}