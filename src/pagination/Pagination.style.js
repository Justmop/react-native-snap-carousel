import { StyleSheet } from 'react-native';

const DEFAULT_DOT_SIZE = 7;
const DEFAULT_DOT_COLOR = 'rgba(0, 0, 0, 0.75)';

export default StyleSheet.create({
    sliderPagination: {
    },
    sliderPaginationDotContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    sliderPaginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#c4d4da",
        marginLeft:16
    },
    sliderPaginationActiveDot: {
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: "#8ca0b3",
        marginLeft:16
    }
});
