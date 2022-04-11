/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactChild, ReactChildren } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { TabListContainer } from './styles';

interface ITabSetProps {
    titles: ReactChild[] | ReactChildren[];
    panels: ReactChild[] | ReactChildren[];
    color?: string;
    tabIndex: number;
    onSelect?: (index: number) => void;
    action?: ReactChild | ReactChildren;
}

const TabSet = ({
    titles,
    panels,
    color,
    tabIndex,
    onSelect,
    action,
}: ITabSetProps) => {
    return (
        <Tabs selectedIndex={tabIndex} onSelect={onSelect}>
            <TabList>
                <TabListContainer>
                    <div>
                        {titles.map((title, index) => {
                            const selectedStyle =
                                tabIndex === index ? { color: color } : {};
                            return (
                                <Tab
                                    key={`tab-title-${index}`}
                                    style={selectedStyle}
                                >
                                    {title}
                                </Tab>
                            );
                        })}
                    </div>
                    {action}
                </TabListContainer>
            </TabList>
            {panels.map((panel, index) => (
                <TabPanel key={`tab-panel-${index}`}>{panel}</TabPanel>
            ))}
        </Tabs>
    );
};

export default TabSet;
