import React from 'react'
import "./Search.css"
import {
    SearchOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'

function handleSearch(){

}

function Search({search, setSearch, input, setInput, todos, setTodos}) {
    return (
        <div className='search'>
            <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={handleSearch}
            />
        </div>
    )
}

export default Search