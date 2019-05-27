const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
iconsview:{ fontSize: 25, marginRight: 10},
menuview: { flexDirection: 'row', alignItems: 'center' },
logo: {width: '80%', height: 25,},
badgeview: {position: 'absolute', marginLeft: 30},
};