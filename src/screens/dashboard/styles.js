const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
cardsview: { flexDirection: 'row' },
iconsview:{ fontSize: 25, marginRight: 10},
menuview: { flexDirection: 'row', alignItems: 'center' },
cardspace: {marginRight: '2%', marginBottom: '2%'},
seccardspace: {marginBottom: '2%'},
headline: { marginBottom: '2%'},
cardtitle: { fontSize: 22, fontWeight: 'bold'},
textdec: {fontSize: 18, fontWeight: 'bold'},
textdec1: {alignSelf: 'center', fontSize: 18, fontWeight: 'bold'},
badgeview: {position: 'absolute', marginLeft: 30},
logo: {width: '80%',height: 20, alignSelf: 'center'},
};
