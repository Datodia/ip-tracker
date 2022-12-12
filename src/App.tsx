import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import axios from 'axios'
import { Data } from './Interface'

function App() {

  const [IP, setIP] = useState<string>("")
  const [data, setData] = useState<Data>()

  const search = () => {
    axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Np7ew5wGSQdfdRxr1fCsqnlbWFwh5&ipAddress=${IP}`)
      .then(res => setData(res.data))
    // console.log(data)
  }

  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Np7ew5wGSQdfdRxr1fCsqnlbWFwh5&ipAddress=${IP}`)
      .then(res => setData(res.data))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIP(e.target.value)
  }

  return (
    <Container>
      <Header>
        <Wrapper>
          <Title>IP Address Tracker</Title>
          <InputDiv>
            <Input

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
    </Container>
  )
}

export default App

const Container = styled.div`
  
`

const Header = styled.div`
  background-image: url('assets/pattern-bg.png');
  height: 300px;
  background-position: center;
`

const Wrapper = styled.div`
  width: 327px;
  margin: auto;
  padding-top: 29px;
`

const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
  color: white;
  text-align: center;
  margin-bottom: 29px;
`

const InputDiv = styled.div`
  height: 58px;
  background-color: red;
  border-radius: 15px;
  display: flex;
  align-items: center;
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
`
const Img = styled.img`
  
`

const Result = styled.div`
  height: 294px;
  border: 1px solid red;
  background-color: white;
  margin-top: 24px;
  border-radius: 15px ;
`

const Div = styled.div`
  text-align: center;
  margin-top: 24px;
`

const ResultTitle = styled.p`
  font-size: 10px;
  color: gray;
  margin-bottom: 7px;
  font-weight: 700;
`
const ResultDesc = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #2C2C2C;
`