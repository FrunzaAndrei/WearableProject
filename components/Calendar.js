import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import {Calendar} from 'react-native-calendars';
import colors from '../colors';

const MyCalendar = ({onSelectDay}) => {
  const today = moment().format('YYYY-MM-DD');
  const thisMonth = moment().format('M');
  const thisYear = moment().format('YYYY');
  const [monthDisplayed, setMonthDisplayed] = useState();
  const [disableRightArrow, setDisableRightArrow] = useState(true);
  const [disableLeftArrow, setDisableLeftArrow] = useState(false);
  const [markedDate, setMarkedDate] = useState();

  useEffect(() => {
    const date = {
      dateString: today,
    };
    handleSelectDate(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      monthDisplayed?.month === +thisMonth &&
      +thisYear === monthDisplayed?.year
    ) {
      setDisableRightArrow(true);
      setDisableLeftArrow(false);
    }
    if (
      monthDisplayed?.month < thisMonth &&
      +thisYear === monthDisplayed?.year
    ) {
      setDisableRightArrow(false);
      setDisableLeftArrow(false);
    }
    if (monthDisplayed?.month > thisMonth && +thisYear > monthDisplayed?.year) {
      setDisableRightArrow(false);
      setDisableLeftArrow(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthDisplayed?.month]);

  const handleSelectDate = day => {
    const date = day.dateString;
    const marked = {};
    marked[date] = {
      selected: true,
      marked: false,
      customStyles: {
        container: {
          height: 38,
          width: 38,
          borderRadius: 19,
          alignItems: 'center',
        },
      },
    };
    setMarkedDate(marked);
    const formatDate = moment(day.timestamp).toISOString();
    onSelectDay(formatDate);
  };

  return (
    <Calendar
      current={today}
      // maxDate={today}
      monthFormat={'MMMM'}
      markingType={'custom'}
      markedDates={markedDate}
      onDayPress={handleSelectDate}
      onMonthChange={setMonthDisplayed}
      // minDate={`${thisYear - 1}-12-01`}
      disableArrowLeft={disableLeftArrow}
      disableArrowRight={disableRightArrow}
      style={{height: 425}}
      theme={{
        'stylesheet.calendar.header': {
          week: styles.calendarHeaderWeek,
          dayHeader: styles.calendarHeaderDays,
          monthText: styles.calendarHeaderMonthText,
        },
        'stylesheet.day.basic': {
          base: styles.calendarDayBasicBase,
          alignedText: styles.calendarDayBasicAlignText,
        },
        backgroundColor: colors.backgroundTabBar,
        calendarBackground: colors.backgroundTabBar,
        textSectionTitleColor: colors.grey1,
        textSectionTitleDisabledColor: colors.grey2,
        selectedDayBackgroundColor: colors.background,
        selectedDayTextColor: colors.backgroundTabBar,
        todayTextColor: colors.white,
        dayTextColor: colors.white,
        textDisabledColor: colors.grey2,
        selectedDotColor: colors.white,
        arrowColor: colors.white,
        disabledArrowColor: colors.grey2,
        monthTextColor: colors.white,
        indicatorColor: colors.backgroundTabBar,
        textDayFontFamily: 'Montserrat-Bold',
        textDayHeaderFontFamily: 'Montserrat-SemiBold',
        textDayFontWeight: '300',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 14,
        textDayHeaderFontSize: 12,
      }}
    />
  );
};

MyCalendar.proptypes = {
  onSelectDay: PropTypes.func,
};

MyCalendar.defaultProps = {
  onSelectDay: () => {},
};

const styles = StyleSheet.create({
  calendarHeaderWeek: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 12,
  },
  calendarHeaderDays: {
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 12,
    lineHeight: 18,
  },
  calendarHeaderMonthText: {
    color: colors.white,
    textTransform: 'capitalize',
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
  },
  calendarDayBasicBase: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  calendarDayBasicAlignText: {
    marginTop: 4,
  },
});

export default MyCalendar;
