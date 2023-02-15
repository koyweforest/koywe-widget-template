import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  ChakraProvider,
  Box,
  Text,
  Button,
  Image,
  VStack,
  Code,
  Grid,
  theme,
  Link,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { KoyweRampSDK } from '@koyweforest/koywe-ramp-sdk';

function App() {
  const koywe = new KoyweRampSDK({
    clientId:"63631a561f41f8fd18f8c3e0",
    callbackUrl:"https://widget.koywe.com", // redirects back to this react app
    currencies: [],
    tokens: [],
    address:"",
    email:"", //if invalid, will be empty
    testing:false,
  })
  const pathname = window.location.pathname;
  const search = window.location.search;
  const Main = () => {
    return (
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
              {pathname && search && pathname.includes('tracing') &&
              <Alert status={search.includes('success=true')?'success':'error'}>
                <AlertIcon />
                Order ID {pathname.substring(pathname.lastIndexOf('/')+1)} finished {search.includes('success=true')?'sucessfully':'in error'}.
              </Alert>}
              <Box boxSize='xs'>
                <Image src='/logo512.png' />
              </Box>
              <Text>
                Using our widget is as easy as 1, 2, 3
              </Text>
              <Text>
                <Code fontSize="xl">
                  1. npm i @koyweforest/koywe-ramp-sdk<br/>
                  2. import &#123; KoyweRampSDK &#125; from '@koyweforest/koywe-ramp-sdk';<br/>
                  3. new KoyweRampSDK().show();<br/>
                </Code>
              </Text>
              <Button bg='#0D442E' color='#CFFF3A' _hover={{ bg: '#CFFF3A', color: '#0D442E' }} size='lg' onClick={()=>koywe.show()}>
                Try it out!
              </Button>
              <Text>
                Go to <Code fontSize="xl">/src/App.js</Code> to check under the hood
              </Text>
              <Text>
                Visit{' '}
                <Link href='https://docs.koywe.com' target={'_blank'}>https://docs.koywe.com</Link> for more information.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </ChakraProvider>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
