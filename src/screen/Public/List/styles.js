
import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  /* search */
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.light,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 15,
    marginVertical: 15
  },
  searchInputText: {
    flex: 1,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.compact,
    color: COLOR.dark
  },
  searchIcon: {
    fontSize: SIZE.large,
    color: COLOR.grey,
    padding: 5
  },

  noodleList: {
    margin: 10
  },
  /* item */
  itemBtn: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR.light,
    borderRadius: 5,
    elevation: 7,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: COLOR.dark,
    shadowOpacity: 0.9,
    shadowRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10
  },

  itemBrandCol: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  itemBrand: {
    flex: 1,
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark,
    lineHeight: 18,
    marginRight: 10
  },
  itemTop: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey,
    opacity: 0.3
  },
  itemVariety: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey,
    textAlign: 'center',
    lineHeight: 16,
    marginBottom: 10
  },
  itemCountryCol: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  itemCountry: {
    flex: 1,
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.dark,
    marginRight: 10
  },
  itemStyle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.red
  },

  itemStarRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemStars: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark,
    marginRight: 5
  },
  itemStarCol: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemStarIcon: {
    fontSize: SIZE.small,
    color: COLOR.primary,
    marginRight: 3
  },

  /* modal */
  modalStarContent: {
    width: '80%',
    height: '55%',
    borderRadius: 5,
    padding: 10
  },

  modal: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  modalTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.default,
    marginLeft: 10
  },

  closeBtn: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10
  },
  closeBtnIcon: {
    fontSize: SIZE.large,
    color: COLOR.dark
  },

  checkBtn: {
    marginBottom: 10
  },
  checkBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  checkBtnText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey,
    marginLeft: 5
  },

  modalBrandContent: {
    width: '80%',
    height: 480,
    borderRadius: 5,
    padding: 10
  }
}