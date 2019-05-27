const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
bg:{backgroundColor: '#a9343a',padding: '18%' },
imageLogo: {width:270,height: 30,marginBottom: 30,alignSelf: "center",},
regItem:{marginBottom: 10,backgroundColor: 'rgba(256,256,256,0.3)', borderRightWidth: 0, borderBottomWidth: 0, borderTopWidth: 0, borderLeftWidth: 0},
password:{alignItems: 'flex-end', marginRight: '10%', marginBottom: 8},
buttonman:{width: '80%',alignSelf: 'center'},
buttontext:{fontWeight: 'bold', fontSize: 20 }
};