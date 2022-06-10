import Snackbar from 'react-native-snackbar';

export const SnackAlert = {
  show: (text) => {
    Snackbar.show({
      text,
      duration: Snackbar.LENGTH_INDEFINITE,
      action: {
        text: 'DISMISS',
        textColor: 'orange',
        onPress: () => { },
      },
    });
  },

  hide: () => {
    Snackbar.dismiss();
  },
};