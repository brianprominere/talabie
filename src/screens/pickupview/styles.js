const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
headline: { marginBottom: '2%', marginRight: 10},
textnote: {alignSelf: 'center', marginBottom: '1%', color: '#959595'},
buttonview: {backgroundColor: '#81B864', width: '50%', alignSelf: 'center', marginBottom: 25 },
textviewt: { fontSize: 20, marginRight: 15, color: '#AF3A40'},
textviewb: { fontSize: 18, color: '#000000', marginRight: 15, marginTop: 5, marginBottom: 5},
textview: { fontSize: 18, color: '#959595', marginTop: 5, marginBottom: 5},
textview2: { fontSize: 18, color: '#959595', marginTop: 5, marginBottom: 5, alignSelf: 'center'},
logo: {width: '80%', height: 25,},
iconsview:{ fontSize: 25, marginRight: 10},
menuview: { flexDirection: 'row', alignItems: 'center' },
badgeview: {position: 'absolute', marginLeft: 30},
};