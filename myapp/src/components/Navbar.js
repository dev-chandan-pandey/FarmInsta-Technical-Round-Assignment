// src/components/Navbar.js
import React from 'react';
import { Box, Flex, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="white" fontWeight="bold">
          CreatoRRR
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" colorScheme="teal" mr={4}>
              Search Creators
            </Button>
          </Link>
          <Link as={RouterLink} to="/edit" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" colorScheme="teal">
              Edit Profile
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
