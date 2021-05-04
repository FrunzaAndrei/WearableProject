import React from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../colors';
import MyCalendar from '../../components/Calendar';

const deviceHeight = Dimensions.get('window').height;
const isSmallScreen = () => {
  return deviceHeight <= 700;
};

const CalendarScreen = () => {
  const handleOnSelectDay = date => {
    console.log('Data aleasa:', date);
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
        translucent={false}
        showHideTransition={'slide'}
      />
      <KeyboardAvoidingView
        style={{flexGrow: 1}}
        contentContainerStyle={{flex: 1}}>
        <ScrollView
          style={styles.containerScroll}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <View style={styles.containerCalendars}>
              <MyCalendar onSelectDay={handleOnSelectDay} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  containerCalendars: {
    marginHorizontal: isSmallScreen() ? 8 : 24,
  },
});
