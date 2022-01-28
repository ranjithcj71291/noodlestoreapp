import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  /* Layout */
  layout: {
    flex: 1
  },
  layoutFx: {
    flexGrow: 1,
    backgroundColor: COLOR.default
  },

  /* Header */
  nav: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15,
    backgroundColor: COLOR.default
  },

  navLeft: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navMiddle: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navRight: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navRightIcon: {
    fontSize: SIZE.huge,
    color: COLOR.light
  },

  headerLight: {
    backgroundColor: COLOR.primary,
    elevation: 0,
    borderBottomWidth: 0
  },
  headerDark: {
    backgroundColor: COLOR.default,
    elevation: 0,
    borderBottomWidth: 0
  },
  headerTransparent: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0
  },

  /* Colors */
  dark: {
    color: COLOR.dark
  },
  light: {
    color: COLOR.light
  },

  /* Sizes */
  tiny: {
    fontSize: SIZE.tiny
  },
  small: {
    fontSize: SIZE.small
  },
  medium: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium
  },
  large: {
    fontSize: SIZE.large
  },
  huge: {
    fontSize: SIZE.huge
  },

  bold: {
    fontFamily: FAMILY.bold
  },
  regular: {
    fontFamily: FAMILY.regular
  },

  /* Footer */
  footerCol: {
    flexDirection: 'row'
  },
  footerBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  footerBtnIcon: {
    fontSize: SIZE.large,
    color: COLOR.grey,
    marginRight: 5
  },
  footerBtnText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.grey
  }
}