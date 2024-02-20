import {StyleSheet} from 'react-native'

import theme from '../themes/theme'
import {screen_height, screen_width} from '../utils/Dimensions'

export const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
  },
  p20: {
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screen_width * 0.15,
  },
  title: {
    color: theme.colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: theme.colors.black,
  },
  descriptionInput: {
    height: screen_height / 2,
    textAlignVertical: 'top',
  },
  bold: {
    fontWeight: 'bold',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: theme.colors.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 15,
  },
  floatingButtonText: {
    color: theme.colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dateInputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  dateInput: {
    marginLeft: 36,
  },
  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0,
  },
  buttonTitle: {
    color: theme.colors.white,
    fontWeight: 'bold',
  },
})
