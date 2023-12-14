import React from 'react'
import Header from '../../components/header/Header'
import { useTheme, lightThemeStyles, darkThemeStyles } from '../../../ThemeContext'

export const FAQ: React.FC = () => {
    const darkTheme = useTheme()
  
    const themeStyles = {
      ...(darkTheme ? darkThemeStyles : lightThemeStyles),
      color: darkTheme ? "#DDE6ED" : "#27374D",
      margin: 0,
      padding: 0
    }
    return (
        <div>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    style={{ background: token.colorBgContainer }}
                    items={getItems(panelStyle)}
                />
        </div>
    )
}