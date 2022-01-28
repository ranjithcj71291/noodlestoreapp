
import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  img: {
    width: '100%',
    height: 350
  },
  content: {
    marginHorizontal: 15,
    marginVertical: 20
  },
  contentCol: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  title: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.large,
    color: COLOR.light
  },
  top: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  },
  desc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.light,
    opacity: 0.7,
    marginBottom: 10
  },
  contentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10
  },
  country: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  },
  contentInfoCol: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30
  },
  stars: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.light,
    marginRight: 5
  },
  starCol: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7
  },
  starIcon: {
    fontSize: SIZE.large,
    color: COLOR.primary,
    marginRight: 3
  },
  style: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark
  }
}