import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import axios from 'axios'
import { Data } from './Interface'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function App() {

  const [IP, setIP] = useState<string>("")
  const [data, setData] = useState<Data>()
  const [lat, setLat] = useState<number>(0)
  const [lng, setLng] = useState<number>(0)

  const search = async () => {
    const respons = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Np7ew5wGSQdfdRxr1fCsqnlbWFwh5&ipAddress=${IP}`)
    const Data: Data = await respons.data

    setData(Data)

    setLat(Data.location.lat)
    setLng(Data.location.lng)
  }

  // useEffect(() => {
  //   search()
  // }, [])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIP(e.target.value)
  }

  const LiveLocation = ({ center }: any) => {
    const map: any = useMap()
    map.setView(center)
    return null;
  }

  return (
    <Container>
      <Header>
        <Wrapper>
          <Title>IP Address Tracker</Title>
          <InputDiv>
            <Input
              placeholder='8.8.8.8'
              onChange={handleChange}
            />

            <Search onClick={search}><Img src='assets/icon-arrow.svg' /></Search>
          </InputDiv>
          <Result>
            <Div>
              <ResultTitle>IP ADRESS</ResultTitle>
              <ResultDesc>{data?.ip}</ResultDesc>
            </Div>
            <Div>
              <ResultTitle>LOCATION</ResultTitle>
              <ResultDesc>{`${data?.location.city}, ${data?.location.country} ${data?.location.postalCode}`}</ResultDesc>
            </Div>
            <Div>
              <ResultTitle>TIME ZONE</ResultTitle>
              <ResultDesc>{data?.location.timezone}</ResultDesc>
            </Div>
            <Div>
              <ResultTitle>ISP</ResultTitle>
              <ResultDesc>{data?.isp}</ResultDesc>
            </Div>
          </Result>
        </Wrapper>
      </Header>

      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LiveLocation center={[lat, lng]} />
        <Marker position={[lat, lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  )
}

export default App

const Container = styled.div`
  
`

const Header = styled.div`
  background-image: url('assets/pattern-bg.png');
  background-position: center;
  height: 260px;
  
  @media screen and (min-width: 1300px){
    background-size: 100vw 300px;
    height: 300px;
  }
`

const Wrapper = styled.div`
  width: 327px;
  margin: auto;
  padding-top: 29px;
  position: relative;
  z-index: 100;

  @media screen and (min-width: 1200px){
    width: 1100px;
    padding-top: 31px;
  }
`

const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
  color: white;
  text-align: center;
  margin-bottom: 29px;
  @media screen and (min-width: 1200px){
    font-size: 32px;
    margin-bottom: 31px;
  }
`

const InputDiv = styled.div`
  height: 58px;
  background-color: red;
  border-radius: 15px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 1200px){
    width: 555px;
    margin: auto;
  }
`
const Input = styled.input`
  height: 100%;
  outline: none;
  width: 269px;
  border-radius: 15px 0 0 15px;
  border:none;  
  font-size: 18px;
  padding: 0 10px;
  font-weight: 400;
  color: black;
  @media screen and (min-width: 1200px){
    width: 498px;
  }
`

const Search = styled.button`
  height: 100%;
  width: 58px;
  border: none;
  background-color: black;
  border-radius: 0 15px 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background-color: #3F3F3F;
    transition: all .5s;
  }
`
const Img = styled.img`
  
`

const Result = styled.div`
  height: 294px;
  border: 1px solid red;
  background-color: white;
  margin-top: 24px;
  border-radius: 15px ;
  z-index: 10;
  @media screen and (min-width: 1200px){
    height: 161px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 48px;
  }
`

const Div = styled.div`
  text-align: center;
  margin-top: 24px;
  @media screen and (min-width: 1200px){
    margin-top: 0;
    border-right: 1px solid gray;
    padding-right: 50px;

    :last-child{
      border-right: 0px solid red;
    }
  }

`

const ResultTitle = styled.p`
  font-size: 10px;
  color: gray;
  margin-bottom: 7px;
  font-weight: 700;
  @media screen and (min-width: 1200px){
    font-size: 12px;
  }
`
const ResultDesc = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #2C2C2C;
  @media screen and (min-width: 1200px){
    font-size: 26px;
  }
`