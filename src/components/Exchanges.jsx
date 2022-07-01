import React, { useEffect, useState} from 'react'
import '../App.css'
import Bg from '../images/crypto1.png'
import milify from 'millify'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Exchanges = () => {
  const count = 1
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [myAns,setMyAns] = useState(0)
  useEffect(() => {
   const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    setCryptos(filteredData)

  }, [cryptosList, searchTerm])


  return (
    <>
    <div className="card-container price">
      <img className='bg' src={Bg} alt="bg" />
      <div className="card">
          <h1 className='exchange-h1'>Exchange USD to BTC</h1>
          {cryptos?.map((coinId = 'Qwsogvtv82FCd') => (
            <>
                <p className='btc-price'>Bitcoin Price: {milify(coinId.price)} $</p>
                <input maxLength={1} className='input' type="number" id="" placeholder='$' onChange={(evt) => {setMyAns(evt.target.value / coinId.price)}}/>
                <h1 className='btc-h1'>{parseFloat(myAns).toFixed(3)} BTC</h1>
            </>
          ))}
      </div>
    </div>
  </>
  )
}

export default Exchanges