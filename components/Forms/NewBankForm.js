import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {COLORS, SIZES, icons, FONTS} from '../../constants';

import {
  globalStyles,
  formStyles,
  buttonStyles,
  typographyStyles,
} from '../../assets/styles';

const NewBankForm = () => {
  const [areaCode, setAreaCode] = React.useState([]);
  const [selectedAreaCode, setSelectedAreaCode] = React.useState('');
  const [selectedTeam, setSelectedTeam] = React.useState({});
  const [selectedTeams, setSelectedTeams] = React.useState([]);

  React.useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(response => response.json())
      .then(data => {
        const areaCodeData = data.map(item => {
          return {
            code: item.cca2,
            name: item.name.common,
            flag: item.flags[1],
            dialCode: [item.idd.root, (item.idd.suffixes || [])[0]].join(''),
          };
        });

        setAreaCode(areaCodeData);
        if (areaCodeData.length > 0) {
          let defaultAreaData = areaCodeData.filter(a => a.code === 'NG');
          if (defaultAreaData.length > 0) {
            setSelectedAreaCode(defaultAreaData[0]);
            // console.log(selectedAreaCode);
          }
        }
      })
      .catch(err => {
        console.error('Request failed', err);
      });
  }, []);

  function onMultiChange() {
    return item => setSelectedTeams(xorBy(selectedTeams, [item], 'id'));
  }

  function onChange() {
    return val => setSelectedTeam(val);
  }

  return (
    <>
      <View
        style={[
          formStyles.formWrapper,
          {
            marginBottom: SIZES.padding * 1,
          },
        ]}>
        {/* Select Country */}
        <View style={{marginTop: SIZES.padding * 1}}>
          <SelectBox
            label="Select Country"
            options={areaCode}
            value={selectedTeam}
            onChange={onChange()}
            hideInputFilter={false}
          />
        </View>

        {/* Select available Banks */}
        <View style={{marginTop: SIZES.padding * 1}}>
          <SelectBox
            label="Select Bank(s)"
            options={areaCode}
            selectedValues={selectedTeams}
            onMultiSelect={onMultiChange()}
            onTapClose={onMultiChange()}
            isMulti
          />
        </View>
      </View>
    </>
  );
};

export default NewBankForm;
