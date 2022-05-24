import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const OptionTabs = ({type, setHistory}) => {
  return (
    <>
      {type === 'banks' ? (
        <View style={styles.optionTabsContainer}>
          <View style={styles.optionTabs}>
            <TouchableOpacity>
              <Text style={styles.optionTabActive}>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.optionTabsText}>Approved</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.optionTabsText}>Pending</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.optionTabsText}>Inactive</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View
          style={[
            styles.optionTabsContainer,
            {
              paddingTop: SIZES.padding * 2,
            },
          ]}>
          <View style={styles.optionTabs}>
            <TouchableOpacity onPress={() => setHistory(0)}>
              <Text style={styles.optionTabsText}>Transaction History</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setHistory(1)}>
              <Text style={styles.optionTabsText}>Registered Devices</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default OptionTabs;

const styles = StyleSheet.create({
  optionTabsContainer: {
    paddingHorizontal: SIZES.padding * 2,
    backgroundColor: COLORS.transparent,
  },

  optionTabs: {
    backgroundColor: '#123D51',
    borderRadius: 8,
    borderColor: 'rgba(244, 244, 244, 0.4)',
    borderWidth: 0.3,
    borderStyle: 'solid',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: SIZES.padding * 1.5,
    marginBottom: SIZES.padding * 1.5,
  },

  optionTabsText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.textColorTwo,
  },

  optionTabActive: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.grayColor,
  },
});
