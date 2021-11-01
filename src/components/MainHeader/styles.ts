import { linkColor, primaryColor } from 'consts';

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
    // alignSelf: 'center',
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
