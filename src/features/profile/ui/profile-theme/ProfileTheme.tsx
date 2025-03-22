import { Flex, Radio, RadioProps } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
import { Theme } from '@shared/theme';
import { useAppChangeTheme } from '../../model/useAppChangeTheme';

type OptionValue = Theme | 'system';

const options: CheckboxGroupProps<OptionValue>['options'] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'system' },
];

export const ProfileTheme = () => {
  const { appTheme, setSystemTheme, setLightTheme, setDarkTheme } = useAppChangeTheme();
  const defaultValue = appTheme || 'system';

  const handleChange: RadioProps['onChange'] = event => {
    const value = event.target.value as OptionValue;

    if (value === 'system') {
      setSystemTheme();
    } else if (value === 'dark') {
      setDarkTheme();
    } else if (value === 'light') {
      setLightTheme();
    }
  };

  return (
    <Flex vertical gap="middle">
      <Radio.Group
        block
        options={options}
        defaultValue={defaultValue}
        optionType="button"
        buttonStyle="solid"
        onChange={handleChange}
      />
    </Flex>
  );
};
