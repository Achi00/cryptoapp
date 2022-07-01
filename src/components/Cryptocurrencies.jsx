import React, {useState, useEffect} from 'react'
import milify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
   const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    setCryptos(filteredData)

  }, [cryptosList, searchTerm])
  
  const refreshPage = ()=>{
    window.location.reload();
 }

  if (isFetching) {
    return(<Loader />) 
  }

  return (
    <>
    {!simplified && (
      <div className="search-crypto">
        <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
    )}
      <Row onClick={refreshPage} gutter={[32, 32]} className='crypto-card-container'>
          {cryptos?.map((currency) => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.rank}>
                <Link key={currency.uuid} to={`/${currency.uuid}`}>
                  <Card title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-img' src={currency?.iconUrl}/>} hoverable>
                    <p>Price: {milify(currency.price)} $</p>
                    <p>Market Cap: {milify(currency.marketCap)}</p>
                    <p>Daily Change: {milify(currency.change)}%</p>
                  </Card>
                </Link>
            </Col>
          ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies