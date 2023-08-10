import React from "react";
import "./Header.css";
import {
  Link,
  Image,
  Text,
  Icon,
} from '@chakra-ui/react'
import logo from '../assets/FCA_logo_pt3.png'
import {
  BellIcon,
  DownloadIcon,
} from '@chakra-ui/icons'
import {
  FaTools
} from 'react-icons/fa'
import {
  BsDatabaseFillAdd
} from 'react-icons/bs'

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav-group">
        <Link href='/'>
            <Image src={logo} alt='FCA logo' 
                style={{transition: '0.5s'}}
                _hover={{filter: 'grayscale(100%)'}}
                height={"4rem"}
                margin={"0.5rem"}>
            </Image>
        </Link>
      </div>
      <div className="nav-group">
        <div className="nav-link-wrapper">
        <Link href='/data' justify={'center'}>
          <div className="nav-item">
          <Icon as={BsDatabaseFillAdd}/>
          <Text fontSize='2xl'> Data</Text>
          </div>
        </Link>
        </div>
        <div className="nav-link-wrapper">
        <Link href='/utilities' justify={'center'}>
          <div className="nav-item">
          <Icon as={FaTools}/>
          <Text fontSize='2xl'> Utilities</Text>
          </div>
        </Link>
        </div>
      </div>
      <div className="nav-group">
      <div className="nav-link-wrapper">
        <Link href='/contact' justify={'center'}>
          <div className="nav-item">
          <BellIcon/>
          <Text fontSize='xl'> Contact Me</Text>
          </div>
        </Link>
        </div>
        <div className="nav-link-wrapper">
        <Link href='https://github.com/rquiogue/FCA-Databse' justify={'center'} isExternal>
          <div className="nav-item">
          <DownloadIcon/>
          <Text fontSize='xl'> Source Code</Text>
          </div>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
