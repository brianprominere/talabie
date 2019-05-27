const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
headline: { marginBottom: '2%', marginRight: 10},
textnote: {alignSelf: 'center', marginBottom: '1%', color: '#959595'},
textview: { fontSize: 18, color: '#959595', marginTop: 5, marginBottom: 5},
buttonview: {backgroundColor: '#81B864', width: '50%', marginBottom: 25, marginLeft: 15 },
logo: {width: '80%', height: 25,},
iconsview:{ fontSize: 25, marginRight: 10},
menuview: { flexDirection: 'row', alignItems: 'center' },
badgeview: {position: 'absolute', marginLeft: 30},
};