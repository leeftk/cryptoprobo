import React from 'react'
import { EthAddress, Flex, Box } from "rimble-ui";

const Header = () =>{
    return(

       <div >
                         
                    <Flex className='address'>
                        <Box width={2/ 3}>
                    <h1>CR</h1>
                    </Box>
                        <Box p={3} width={1 / 3} >
                        <EthAddress  address="0x9505C8Fc1aD98b0aC651b91245d02D055fEc8E49" />
                        </Box>   
                    </Flex>
             </div>    
    )
}

export default Header;