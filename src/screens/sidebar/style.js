const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  logoContainer: {backgroundColor: '#AF3A40', height: 50, justifyContent: 'center'},
  logo: {width: '80%',height: 20, alignSelf: 'center'},
  menutitle: {marginLeft: 20, fontSize: 18, fontWeight: 'bold' },
  righticon: {alignSelf: 'flex-end', flex: 1},
};
