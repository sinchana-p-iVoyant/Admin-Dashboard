import React from 'react'
import Header from '../../components/header/Header'
import { useTheme, lightThemeStyles, darkThemeStyles } from '../../ThemeContext'

import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import type { CSSProperties } from 'react';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: 'An Important Question',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'Another Important Question',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'Your Favorite Question',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: 'Some Random Question',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '5',
    label: 'The Final Question',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

export const FAQ: React.FC = () => {
    const darkTheme = useTheme()
  
    const themeStyles = {
      ...(darkTheme ? darkThemeStyles : lightThemeStyles),
        color: darkTheme ? "#DDE6ED" : "#27374D",
        margin: 0,
        padding: 0,
        backgroundColor: darkTheme ? "#27374D" : "#DDE6ED",

    }

    const panelStyle: React.CSSProperties = {
        marginBottom: 24,
        // borderRadius: '0px',
        color: darkTheme ? "white" : "#27374D",
        border: 'none',
    };
    return (
        <div>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    style={{ ...themeStyles }}
                    items={getItems(panelStyle)}
                />
        </div>
    )
}