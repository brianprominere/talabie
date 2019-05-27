const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
container: { flex: 1, padding: 16, backgroundColor: '#fff' },
head: { height: 40, backgroundColor: '#AF3A40' },
text: { alignSelf: 'center', color: '#959595', padding: 8 },
text1: { alignSelf: 'center', color: '#fff' },
row: { flexDirection: 'row', backgroundColor: '#fff' },
btn: { alignSelf: 'center', backgroundColor: '#81B864', paddingTop: 2, paddingBottom: 2, paddingRight: 25, paddingLeft: 25},
btnText: { textAlign: 'center', color: '#fff' },
headline: { marginBottom: '2%'},
logo: {width: '80%', height: 25,},
iconsview:{ fontSize: 25, marginRight: 10},
menuview: { flexDirection: 'row', alignItems: 'center' },
badgeview: {position: 'absolute', marginLeft: 30},
};