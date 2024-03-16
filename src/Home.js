import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Input } from 'antd';
const { Search } = Input;

const Home = () => {

    const onChange = (e) => {
    };

    const onSearch = (value, _e, info) => console.log(info?.source, value);


    return (
        <div>
            <AppNavbar />
            <br /><br /><br />
            <div className="center-container">
                <Search placeholder="Faites votre recherche" allowClear enterButton="Search" size="large" onSearch={onSearch}/>
            </div>
        </div>
    );

}
export default Home;