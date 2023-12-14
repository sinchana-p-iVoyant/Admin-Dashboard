import React, { Key, useState } from 'react'
import { useTheme, useThemeUpdate, lightThemeStyles, darkThemeStyles } from '../../ThemeContext'

// antd
import { Checkbox, Divider, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

// import data
import {mockDataContacts} from '../../data/mockData'
import Header from '../../components/header/Header';

// interface DataType {
//   key: React.Key;
//   id: number;
//   name: string;
//   age: number;
//   phone: string;
//   email: string;
//   access: string;
// }

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Registrar ID',
        dataIndex: 'registrarId',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: string) => <a>{ text }</a>    
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phone',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'City',
        dataIndex: 'city',
    },
    {
        title: 'Zip Code',
        dataIndex: 'zipCode',
    },
]

// rowSelection object indicates the need for row selection
// const rowSelection = {
//   onChange: (selectedRowKeys: React.Key[], selectedRows =: DataType[]) => {
//     console.log(selectedRowKeys)
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows =: ', selectedRows =);
//   },
//   getCheckboxProps: (record: DataType) => ({
//     disabled: record.name === 'Disabled User', // Column configuration not to be checked
//     name: record.name,
//   }),
// };


export const Contacts = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
  
    const themeStyles = {
      ...(darkTheme ? darkThemeStyles : lightThemeStyles),
      color: darkTheme ? "#DDE6ED" : "#27374D",
      margin: 0,
      padding: 0
    }

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
      console.log('selectedRowKeys changed: ', newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);

      const selectedRows = () => {
        newSelectedRowKeys.map(eachRow => console.log(mockDataContacts[eachRow]))
      }

      selectedRows()
    };
  

  return (
      <div>
        <Header title='CONTACTS' subtitle='List of Contacts for Future Reference' />

        <Table    
            columns={columns}
            dataSource={mockDataContacts}
        />
    </div>
  )
}

// export default Team