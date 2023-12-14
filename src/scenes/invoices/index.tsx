import React, { Key, useState } from 'react'
import { useTheme, useThemeUpdate, lightThemeStyles, darkThemeStyles } from '../../ThemeContext'

// antd
import { Checkbox, Divider, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

// import data
import {mockDataInvoices} from '../../data/mockData'
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
        title: 'Name',
        dataIndex: 'name',
        render: (text: string) => <a>{ text }</a>    
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
        title: 'Cost',
        dataIndex: 'cost',
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
]

export const Invoices = () => {
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
        newSelectedRowKeys.map(eachRow => console.log(mockDataInvoices[eachRow]))
      }

      selectedRows()
    };
  
  interface RowSelectionType {
    selectedRowKeys: Key[],
     onChange: (selectedRowKeys: Key[]) => void;
  }
  
  const rowSelection:RowSelectionType = {
      // type : 'checkbox',
      selectedRowKeys,
      onChange: onSelectChange,
    };
  
  return (
    <div>
      <Header title='Invoices' subtitle='List of Invoice Balances' />
        <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={mockDataInvoices}
      />
    </div>
  )
}

// export default Invoices