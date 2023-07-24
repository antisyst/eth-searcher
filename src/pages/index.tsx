import Head from 'next/head';
import { useState } from 'react';
import { getBalance } from '@/lib/ethereum';
import styled from 'styled-components';
import MainLogo from '@/utils/creator';
import { BiSearchAlt } from 'react-icons/bi';
import { PiWalletFill } from 'react-icons/pi';
import { SiEthereum } from 'react-icons/si';
import { FiInfo } from 'react-icons/fi';
const PageLayout = styled.main `
  text-align: center;
  padding: 10px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: flex-start;
  height: 100vh;

  @media only screen and (max-width: 800px) {
    padding: 10px 2%;
  }
`
const MainContent = styled.h1 `
font-family: 'Poppins', sans-serif;
font-weight: bold;
margin-top: 4vh;
margin-bottom: 1vh;
font-size: calc(10px + 3.4vmin);
text-align: center;
color: var(--var-color-white);
background: var(--var-color-back);
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;

      @media only screen and (max-width: 800px) {
        font-size: calc(10px + 4vmin);  
      }
`
const CreatorInt = styled.div `
  position: absolute;
  bottom: 30px;
  right: 30px;

  svg {
   width: 80px;

   @media only screen and (max-width: 800px)  {
     width: 70px;
   }
  }

  @media only screen and (max-width: 800px) {
    bottom: 20px;
    right: 20px;
  }
`
const ActionForm = styled.form `
border: 10px solid;
border-image-slice: 1;
border-width: 3px;
border-image-source: var(--var-color-back);
  width: 600px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: var(--var-color-int);

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`
const ActionButton = styled.button `
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  background: var(--var-color-back);
  height: 100%;
  cursor: pointer;
  border: none;
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  svg {
    color: var(--var-color-white);
    font-size: 30px;
  }

  @media only screen and (max-width: 800px) {
    width: 22%;
  }
`
const ActionInput = styled.input `
outline: none;
user-select: none;
height: 56px;
width: 100%;
border: none;
margin: 6px;
background: var(--var-color-int);
font-size: 20px;
border-radius: 9px;
color: var(--var-color-white);
padding: 13px;

@media only screen and (max-width: 800px) {
  font-size: 18px;
}
`
const ActionResult = styled.div `
  background: var(--var-color-int);
  color: var(--var-color-white);
  margin: 1.5vh;
  width: 540px;
  border-radius: 9px;
  padding: 20px;
  display: flex;
  min-height: 170px;
  max-height: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-weight: bold;

  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 10px;
  }
`
const ResultTop = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  

  svg {
    background: var(--var-color-back);
    font-size: 46px;
    border-radius: 50%;
    padding: 10px;
    margin: 7px 0;


    @media only screen and (max-width: 800px) {
      width: 40px;
      height: 40px;
    }
  }
  p {
    font-size: 17px;
    margin-left: 15px;
    text-align: left;
    word-break: break-word;
  }
`
const InfoTag = styled.div `
  display: flex;
  flex-direction: row;
  margin-top: 1vh;
  align-items: center;
  color: var(--var-color-white);


  svg {
    color: var(--var-color-back);
    vertical-align: middle;
    font-size: 25px;
  }

  p {
    margin-left: 7px;
    text-align: left;
  }
`
const Home = () => {

  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const balance = await getBalance(address);
    setBalance(balance);
  };

  return (
    <>
      <Head>
        <title>ETH address searcher | Ramazan Azimli</title>
        <meta name="description" content="ETH address searcher" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@700&display=swap" rel="stylesheet"/>
        <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      </Head>
      <PageLayout>
        <MainContent>
            ETH address searcher
        </MainContent>
        <CreatorInt>
         <a href="https://rmzn.netlify.app" target='_blank'>
          <MainLogo/>
         </a>
        </CreatorInt>
      <ActionForm onSubmit={handleSubmit}>
        <ActionInput type="text" value={address} onChange={handleAddressChange} placeholder="Search address..." />
        <ActionButton type="submit">
           <BiSearchAlt/>
        </ActionButton>
      </ActionForm>
        <InfoTag>
          <FiInfo/>  <p>You enter the new address, click the button again</p>
        </InfoTag>
      <ActionResult>
        <ResultTop>
          <SiEthereum/>
           <p>{address}</p>
        </ResultTop>
        <ResultTop>
          <PiWalletFill/>
          {balance && <p> {balance} ETH</p>}
         </ResultTop>
      </ActionResult>
    </PageLayout>
    </>
  )
}
export default Home;