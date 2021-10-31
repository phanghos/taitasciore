import { linkColor, primaryColor } from 'consts';

const profileSize = 80;

const paddingVertical = 48;

export default {
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: paddingVertical,
    paddingBottom: paddingVertical,
    letterSpacing: 2,
  },
  textContainer: {
    color: primaryColor,
    display: 'flex',
    flexDirection: 'column',
  },
  profileImage: {
    width: profileSize,
    height: profileSize,
    borderRadius: profileSize / 2,
    marginRight: 32,
    alignSelf: 'center',
  },
  name: { color: primaryColor, textDecoration: 'none' },
  linkContainer: { flexDirection: 'row' },
  link: {
    textDecoration: 'none',
    color: linkColor,
    fontWeight: 'bold',
    marginRight: 16,
  },
};
