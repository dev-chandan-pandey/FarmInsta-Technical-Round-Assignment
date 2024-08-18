// // import React from 'react';
// // import { Link as RouterLink } from 'react-router-dom';
// // import { Box, VStack, Link, Heading } from '@chakra-ui/react';

// // const Sidebar = () => {
// //   return (
// //     <Box w="250px" p={5} bg="gray.100" h="100vh" position="fixed">
// //       <Heading size="md">CreatoRRR</Heading>
// //       <VStack spacing={4} mt={5}>
// //         <Link as={RouterLink} to="/" fontSize="lg">
// //           Home
// //         </Link>
// //         <Link as={RouterLink} to="/create" fontSize="lg">
// //           Create Profile
// //         </Link>
// //       </VStack>
// //     </Box>
// //   );
// // };

// // export default Sidebar;
// import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { Box, VStack, Link, Heading } from '@chakra-ui/react';

// const Sidebar = () => {
//   return (
//     <Box w="250px" p={5} bg="gray.100" h="100vh" position="fixed" boxShadow="md">
//       <Heading size="md" mb={5}>CreatoRRR</Heading>
//       <VStack spacing={4}>
//         <Link as={RouterLink} to="/" fontSize="lg" _hover={{ textDecor: 'underline' }}>
//           Home
//         </Link>
//         <Link as={RouterLink} to="/create" fontSize="lg" _hover={{ textDecor: 'underline' }}>
//           Create Profile
//         </Link>
//       </VStack>
//     </Box>
//   );
// };

// export default Sidebar;
// import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { Box, VStack, Link, Text } from '@chakra-ui/react';

// const Sidebar = () => {
//   return (
//     <Box
//       as="nav"
//       w="250px"
//       p={5}
//       bg="primary.500"
//       color="white"
//       height="100vh"
//       position="fixed"
//     >
//       <VStack spacing={4}>
//         <Link as={RouterLink} to="/" color="white" fontWeight="bold">
//           <Text fontSize="lg">Content Creators</Text>
//         </Link>
//         <Link as={RouterLink} to="/create" color="white" fontWeight="bold">
//           <Text fontSize="lg">Create Content Creator</Text>
//         </Link>
//       </VStack>
//     </Box>
//   );
// };

// export default Sidebar;
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, VStack, Link, Text, Icon } from '@chakra-ui/react';
import { FiUsers, FiPlusCircle } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <Box
      as="nav"
      w="250px"
      p={5}
      bg="teal.500"
      color="white"
      height="100vh"
      position="fixed"
    >
      <VStack spacing={6}>
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
          <Icon as={FiUsers} mr={2} />
          <Text fontSize="lg" display="inline">Content Creators</Text>
        </Link>
        <Link as={RouterLink} to="/create" color="white" fontWeight="bold">
          <Icon as={FiPlusCircle} mr={2} />
          <Text fontSize="lg" display="inline">Create Creator</Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
