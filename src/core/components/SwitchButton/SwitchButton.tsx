import React, { useCallback } from 'react';
import { useTheme } from 'styled-components';
import { Theme } from '../../styling/config/theme.types';
import { StylingProps } from '../../types/Core';
import Switch from 'react-switch';

interface SwitchButtonProps extends StylingProps {
  defaultState?: boolean;
  isDisabled?: boolean;
  onChange: (checked: boolean) => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = props => {
  const { defaultState, isDisabled, onChange } = props;

  const { colors } = useTheme() as Theme;

  const [state, setState] = React.useState(defaultState || false);

  const handleChange = useCallback(
    (checked: boolean) => {
      setState(checked);
      onChange(checked);
    },
    [state, onChange]
  );

  return (
    <Switch
      width={40}
      height={22}
      checked={state}
      disabled={isDisabled}
      onChange={handleChange}
      onColor={colors.blue4}
      offColor={colors.gray6}
      checkedIcon={false}
      uncheckedIcon={false}
      handleDiameter={18}
      activeBoxShadow={'none'}
    />
  );
};

export { SwitchButton };
