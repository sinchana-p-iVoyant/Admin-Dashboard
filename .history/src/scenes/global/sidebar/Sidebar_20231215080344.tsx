import React, { useState } from 'react'
import { useTheme, lightThemeStyles, darkThemeStyles } from '../../../ThemeContext'
import './Sidebar.css'

// import icons
import { Link } from 'react-router-dom';
import { LiaHomeSolid } from "react-icons/lia";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineBarChart } from "react-icons/md";
import { MdOutlinePieChart } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { CiMap } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";

import image from '../../../../src/assets/jk3.jpg'
// imports from antd
import { Layout, Menu } from 'antd';


const { Sider } = Layout;


const Sidebar = () => {
  // theme
    const darkTheme = useTheme()
  
    const themeStyles = {
      ...(darkTheme ? darkThemeStyles : lightThemeStyles),
      color: darkTheme ? "#DDE6ED" : "#27374D",
      margin: 0,
      padding: 0
    }

  // menu collapse
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  // const [selected, setSelected] = useState<string>("Dashboard")

  const dataItems = [
    {
      key: "1",
      icon: <MdOutlinePeopleAlt />,
      label: "Manage Team",
      link: '/team'
    },
    {
      key: "2",
      icon: <MdOutlineContacts />,
      label: "Contacts Information",
      link: '/contacts'
    },
    {
      key: "3",
      icon: <TbFileInvoice />,
      label: "Invoices Balances",
      link: 'invoices'
    },
  ]

  const pagesItems = [
    {
      key: "1",
      icon: <MdOutlinePerson />,
      label: "Profile Form",
      link: '/form',
    },
    {
      key: "2",
      icon: <MdOutlineCalendarToday />,
      label: "Calendar",
      link: '/calendar',
    },
    {
      key: "3",
      icon: <FaRegQuestionCircle />,
      label: "FAQ Page",
      link: '/faq',
    },
  ]

  const chartsItems = [
    {
      key: "1",
      icon: <MdOutlineBarChart />,
      label: "Bar Chart",
      link: '/bar'
    },
    {
      key: "2",
      icon: <MdOutlinePieChart />,
      label: "Pie Chart",
    },
    {
      key: "3",
      icon: <IoAnalyticsOutline />,
      label: "Line Chart",
    },
    {
      key: "4",
      icon: <CiMap />,
      label: "geography Chart",
    },
  ]

  return (
    <div className='sidebar-container' style={{ backgroundColor: darkTheme ? "#27374D" : "#DDE6ED", color: darkTheme ? "#DDE6ED" : "#27374d", padding: isCollapsed ? "0 14px" : "0" }}>
      
      <Sider trigger={null} collapsible collapsed={isCollapsed} >
        {/* <div className={`admins-container ${darkTheme ? "" : "onHover"}`}  style={{ backgroundColor: darkTheme ? "#27374D" : "#DDE6ED", color: darkTheme ? "#DDE6ED" : "#27374D"  }}> */}
        <div className="admins-container"  style={{ backgroundColor: darkTheme ? "#27374D" : "#DDE6ED", color: darkTheme ? "#DDE6ED" : "#27374D"  }}>
          
          {
            !isCollapsed ? (
              <>
                <h2>ADMINS</h2>
                <div>
                  <FiMenu
                    style={{
                      fontSize: '26px', 
                      marginRight: '20px',
                      cursor: 'pointer',
                      // transform: isCollapsed ? 'rotate(0deg)' : 'rotate(90deg)',
                      transition: 'transform 0.9s ease',
                    }}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  />
              </div>
              </>
            ) : (
                <div className='menu-icon-padding'>
                  <FiMenu
                    style={{
                      fontSize: '26px', 
                      marginRight: '20px',
                      cursor: 'pointer',
                      transition: 'transform 0.9s ease',
                  }}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  />
              </div>
            )
          }

        </div>
  
        <div className="image-name-container" style={{ backgroundColor: darkTheme ? "#27374D" : "#DDE6ED", color: darkTheme ? "#DDE6ED" : "#27374D", padding: isCollapsed ? "40px" : "0px" }} >
          {
            !isCollapsed && (
              <>
              <img
                src={image}
                alt="profile-user"
                width='100px'
                height='100px'
                style={{ cursor: 'pointer', borderRadius: '50%' }}
              />
              <h2>Jeon Jungkook</h2>
              <p>VP Fancy Admin</p>
              </>
            )
          }
          
        </div>

        <Menu 
          className={!darkTheme ? 'light-font' : ""}
          style={{ backgroundColor: 'transparent', color: 'pink' }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          // items={[
          //   {
          //     key: "1",
          //     icon: <LiaHomeSolid />,
          //     label: "Dashboard",

          //   }
           
          // ]}
        >
          <Menu.Item key="1" icon={<LiaHomeSolid />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
      {/* Add more Menu.Items for additional navigation items */}
        </Menu>
        
        <h3>Data</h3>
        {/* <Menu
          className={!darkTheme ? 'light-font' : ""} 
          style={{ backgroundColor: 'transparent' }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={dataItems}         
        /> */}

        <Menu
          className={!darkTheme ? 'light-font' : ''}
          style={{ backgroundColor: 'transparent' }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          {dataItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </Menu.Item>
          ))}
        </Menu>

        <h3>Pages</h3>
        {/* <Menu 
          className={!darkTheme ? 'light-font' : ""}
          style={{ backgroundColor: 'transparent' }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={pagesItems}
        /> */}

        <Menu 
          className={!darkTheme ? 'light-font' : ""}
          style={{ backgroundColor: 'transparent' }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          {pagesItems.map(item => (
            <Menu.Item key={item.key} icon={ item.icon }>
              {item.link ? (
                <Link to={item.link}>{ item.label }</Link>
              ): (
                  <span>{ item.label }</span>
              )}
            </Menu.Item>
          ))}
        </Menu>
        <h3>Charts</h3>
        {/* <Menu 
          className={!darkTheme ? 'light-font' : ""}
          style={{ backgroundColor: 'transparent' }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={chartsItems}
        /> */}
        <Menu 
          className={!darkTheme ? 'light-font' : ""}
          style={{ backgroundColor: 'transparent' }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          {
            chartsItems.map(item => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.link ? (
                  <Link to={item.link}>{ item.label }</Link>
                ): (
                    <span>{ item.label }</span>
                )}
              </Menu.Item>
            ))
          }
        </Menu>
      </Sider>
    </div>
  )
}

export default Sidebar