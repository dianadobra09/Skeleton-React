import { useCallback, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CalendarIcon } from '../../../assets/icons/calendar.svg';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Container, Label, StyledDatePicker, styles } from './CustomDatepicker.styles';

interface CustomDatepickerProps {
  label?: string;
  defaultValue?: Date;
  onChange: (date: Date) => void;
  isDisabled?: boolean;
  startDate?: Date;
  endDate?: Date;
  isClearable?: boolean;
  inputStyles?: StyleSystemProps;
}

const CustomInput = ({ value, onClick, styles }: { value?: string; onClick?: any; styles?: StyleSystemProps }) => {
  const handleClick = useCallback(
    (e: any) => {
      e.preventDefault();
      onClick();
    },
    [onClick]
  );
  return (
    <Button onClick={handleClick} variant={'outline'} intent={'neutral'} endIcon={<CalendarIcon />} __css={styles} justifyContent={'space-between'}>
      <Box>{value}</Box>
    </Button>
  );
};

const CustomDatepicker = ({ label, defaultValue, onChange, isDisabled, startDate, endDate, inputStyles, isClearable }: CustomDatepickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const convertUTCToLocalDate = useCallback((date: Date): Date => {
    if (!date) {
      return date;
    }
    const newDate = new Date(date);
    return new Date(newDate.getUTCFullYear(), newDate.getUTCMonth(), newDate.getUTCDate());
  }, []);

  const convertLocalToUTCDate = useCallback((date: Date): Date => {
    if (!date) {
      return date;
    }
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  }, []);

  useEffect(() => {
    if (defaultValue) {
      setSelectedDate(convertUTCToLocalDate(defaultValue));
    }
  }, [defaultValue]);

  const handleChange = useCallback(
    (date: Date) => {
      setSelectedDate(date);
      onChange(convertLocalToUTCDate(date));
    },
    [setSelectedDate, onChange, convertLocalToUTCDate]
  );

  return (
    <Container __css={styles.container}>
      {label && <Label __css={styles.label}>{label}</Label>}
      <StyledDatePicker
        selected={selectedDate}
        onChange={handleChange}
        customInput={<CustomInput styles={inputStyles} />}
        disabled={isDisabled}
        minDate={startDate}
        maxDate={endDate}
        isClearable={isClearable}
        dateFormat="MMM d, yyyy"
      />
    </Container>
  );
};

export { CustomDatepicker };
