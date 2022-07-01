import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';
import { useParams } from 'react-router-dom';



const App = () => {

  return (
      <div className='app'>
        <Navbar />
        <div className="main">
            <Layout>
                <div className="routes">
                    <Switch>
                        <Route exact path='/'>
                            <Homepage />
                        </Route>
                        <Route exact path='/exchanges'>
                            <Exchanges />
                        </Route>
                        <Route exact path='/cryptocurrencies'>
                            <Cryptocurrencies />
                        </Route>
                        <Route exact path={'/:coinId'}>
                            <CryptoDetails />
                        </Route>
                        <Route exact path='/news'>
                        <News simplified/>
                        </Route>
                    </Switch>
                </div>
            </Layout>
        <div className="footer">
            <Typography.Title  level={5} style={{color: 'white', textAlign:'center'}}>
                Crypto <br />
                All rights reserved
            </Typography.Title>
            <Space>
                <Link to='/'>Home</Link>
                <Link to='/exchanges'>Exchanges</Link>
                <Link to='/news'>News</Link>
            </Space>
        </div>
        </div>
    </div>
  )
}

export default App