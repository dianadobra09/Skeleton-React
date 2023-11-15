import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Wrapper } from './CustomTabs.styles';

export interface CustomTab {
  header: React.ReactNode;
  content: React.ReactNode;
}
export interface CustomTabsProps {
  tabs: CustomTab[];
  onTabSelected?: (index: number) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = props => {
  const { tabs, onTabSelected } = props;

  return (
    <Wrapper width={'100%'} height={'100%'}>
      <Tabs onSelect={idx => (onTabSelected ? onTabSelected(idx) : undefined)}>
        <TabList>
          {tabs.map((tab, index) => (
            <Tab key={index}>{tab.header}</Tab>
          ))}
        </TabList>

        {tabs.map((tab, index) => (
          <TabPanel key={index}>{tab.content}</TabPanel>
        ))}
      </Tabs>
    </Wrapper>
  );
};

export { CustomTabs };
