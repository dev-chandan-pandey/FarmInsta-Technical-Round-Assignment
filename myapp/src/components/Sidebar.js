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
// import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { Box, VStack, Link, Text, Icon } from '@chakra-ui/react';
// import { FiUsers, FiPlusCircle } from 'react-icons/fi';

// const Sidebar = () => {
//   return (
//     <Box
//       as="nav"
//       w="250px"
//       p={5}
//       bg="teal.500"
//       color="white"
//       height="100vh"
//       position="fixed"
//     >
//       <VStack spacing={6}>
//         <Link as={RouterLink} to="/" color="white" fontWeight="bold">
//           <Icon as={FiUsers} mr={2} />
//           <Text fontSize="lg" display="inline">Content Creators</Text>
//         </Link>
//         <Link as={RouterLink} to="/create" color="white" fontWeight="bold">
//           <Icon as={FiPlusCircle} mr={2} />
//           <Text fontSize="lg" display="inline">Create Creator</Text>
//         </Link>
//       </VStack>
//     </Box>
//   );
// };

// export default Sidebar;
// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { Box, VStack, Link, Text, Icon, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react';
// import { FiUsers, FiPlusCircle, FiMenu } from 'react-icons/fi';

// const Sidebar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const handleToggleDrawer = () => {
//     if (isDrawerOpen) {
//       onClose();
//       setIsDrawerOpen(false);
//     } else {
//       onOpen();
//       setIsDrawerOpen(true);
//     }
//   };

//   return (
//     <>
//       <Box display={{ base: 'block', md: 'none' }} position="fixed" top="10px" left="10px">
//         <IconButton
//           aria-label="Open Menu"
//           icon={<FiMenu />}
//           onClick={handleToggleDrawer}
//           colorScheme="teal"
//         />
//       </Box>

//       <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
//         <DrawerOverlay>
//           <DrawerContent>
//             <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
//             <DrawerBody>
//               <VStack spacing={6}>
//                 <Link as={RouterLink} to="/" onClick={onClose} color="teal.600" fontWeight="bold">
//                   <Icon as={FiUsers} mr={2} />
//                   <Text fontSize="lg" display="inline">Content Creators</Text>
//                 </Link>
//                 <Link as={RouterLink} to="/create" onClick={onClose} color="teal.600" fontWeight="bold">
//                   <Icon as={FiPlusCircle} mr={2} />
//                   <Text fontSize="lg" display="inline">Create Creator</Text>
//                 </Link>
//               </VStack>
//             </DrawerBody>
//           </DrawerContent>
//         </DrawerOverlay>
//       </Drawer>

//       <Box
//         as="nav"
//         w={{ base: '0', md: '250px' }}
//         p={5}
//         bg="teal.500"
//         color="white"
//         height="100vh"
//         position="fixed"
//         display={{ base: 'none', md: 'block' }}
//       >
//         <VStack spacing={6}>
//           <Link as={RouterLink} to="/" color="white" fontWeight="bold">
//             <Icon as={FiUsers} mr={2} />
//             <Text fontSize="lg" display="inline">Content Creators</Text>
//           </Link>
//           <Link as={RouterLink} to="/create" color="white" fontWeight="bold">
//             <Icon as={FiPlusCircle} mr={2} />
//             <Text fontSize="lg" display="inline">Create Creator</Text>
//           </Link>
//         </VStack>
//       </Box>
//     </>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { Box, VStack, Link, Text, Icon, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, IconButton } from '@chakra-ui/react';
// import { FiUsers, FiPlusCircle, FiMenu } from 'react-icons/fi';

// const Sidebar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <IconButton
//         aria-label="Open Menu"
//         icon={<FiMenu />}
//         display={{ base: "inline-flex", md: "none" }}
//         onClick={onOpen}
//         position="fixed"
//         top={4}
//         left={4}
//         zIndex="popover"
//       />

//       <Box
//         as="nav"
//         w={{ base: "full", md: "250px" }}
//         p={5}
//         bg="teal.500"
//         color="white"
//         height={{ base: "auto", md: "100vh" }}
//         position={{ base: "relative", md: "fixed" }}
//         display={{ base: "none", md: "block" }}
//       >
//         <VStack spacing={6}>
//           <Link as={RouterLink} to="/" color="white" fontWeight="bold">
//             <Icon as={FiUsers} mr={2} />
//             <Text fontSize="lg" display="inline">Content Creators</Text>
//           </Link>
//           <Link as={RouterLink} to="/create" color="white" fontWeight="bold">
//             <Icon as={FiPlusCircle} mr={2} />
//             <Text fontSize="lg" display="inline">Create Creator</Text>
//           </Link>
//         </VStack>
//       </Box>

//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Menu</DrawerHeader>

//           <DrawerBody>
//             <VStack spacing={6}>
//               <Link as={RouterLink} to="/" color="teal.500" fontWeight="bold" onClick={onClose}>
//                 <Icon as={FiUsers} mr={2} />
//                 <Text fontSize="lg" display="inline">Content Creators</Text>
//               </Link>
//               <Link as={RouterLink} to="/create" color="teal.500" fontWeight="bold" onClick={onClose}>
//                 <Icon as={FiPlusCircle} mr={2} />
//                 <Text fontSize="lg" display="inline">Create Creator</Text>
//               </Link>
//             </VStack>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { Box, VStack, Link, Text, Icon, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, IconButton, useBreakpointValue } from '@chakra-ui/react';
// import { FiUsers, FiPlusCircle } from 'react-icons/fi';
// import { HamburgerIcon } from '@chakra-ui/icons';

// const Sidebar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   return (
//     <>
//       {/* Drawer for mobile screens */}
//       <Drawer isOpen={isOpen} onClose={onClose} placement="left">
//         <DrawerOverlay>
//           <DrawerContent>
//             <DrawerCloseButton />
//             <DrawerHeader>Menu</DrawerHeader>
//             <DrawerBody>
//               <VStack spacing={6} align="start" >
//                 <Link as={RouterLink} to="/" color="teal.500" fontWeight="bold" onClick={onClose}>
//                   <Icon as={FiUsers} mr={2} />
//                   <Text fontSize="lg" display="inline">Content Creators</Text>
//                 </Link>
//                 <Link as={RouterLink} to="/create" color="teal.500" fontWeight="bold" onClick={onClose}>
//                   <Icon as={FiPlusCircle} mr={2} />
//                   <Text fontSize="lg" display="inline">Create Creator</Text>
//                 </Link>
//               </VStack>
//             </DrawerBody>
//           </DrawerContent>
//         </DrawerOverlay>
//       </Drawer>

//       {/* Navbar for mobile screens */}
//       {isMobile && (
//         <Box display={{ base: "flex", md: "none" }} bg="teal.500" color="white" p={4} position="fixed"  top={0} left={0} w="full" mb={"20px"} zIndex={1}>
//           <IconButton
//             aria-label="Open Menu"
//             icon={<HamburgerIcon />}
//             onClick={onOpen}
//             colorScheme="teal"
//             variant="outline"
//           />
//           <Text ml={4} fontWeight="bold">CreatoRRR</Text>
//         </Box>
//       )}

//       {/* Sidebar for larger screens */}
//       {!isMobile && (
//         <Box
//           as="nav"
//           w="250px"
//           p={5}
//           bg="teal.500"
//           color="white"
//           height="100vh"
//           position="fixed"
          
//         >
//           <VStack spacing={6} align="start" >
//             <Link as={RouterLink} to="/" color="white" fontWeight="bold">
//               <Icon as={FiUsers} mr={2} />
//               <Text fontSize="lg" display="inline">Content Creators</Text>
//             </Link>
//             <Link as={RouterLink} to="/create" color="white" fontWeight="bold">
//               <Icon as={FiPlusCircle} mr={2} />
//               <Text fontSize="lg" display="inline">Create Creator</Text>
//             </Link>
//           </VStack>
//         </Box>
//       )}
//     </>
//   );
// };

// export default Sidebar;
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, VStack, Link, Text, Icon, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { FiUsers, FiPlusCircle } from 'react-icons/fi';
import { HamburgerIcon } from '@chakra-ui/icons';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {/* Drawer for mobile screens */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay>
          <DrawerContent mt="60px">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={6} align="start">
                <Link as={RouterLink} to="/" color="teal.500" fontWeight="bold" onClick={onClose}>
                  <Icon as={FiUsers} mr={2} />
                  <Text fontSize="lg" display="inline">Content Creators</Text>
                </Link>
                <Link as={RouterLink} to="/create" color="teal.500" fontWeight="bold" onClick={onClose}>
                  <Icon as={FiPlusCircle} mr={2} />
                  <Text fontSize="lg" display="inline">Create Creator</Text>
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Navbar for mobile screens */}
      {isMobile && (
        <Box display={{ base: "flex", md: "none" }} bg="teal.500" color="white" p={4} position="fixed" top={0} left={0} w="full" zIndex={1}>
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            colorScheme="teal"
            variant="outline"
          />
          <Text ml={4} fontWeight="bold">CreatoRRR</Text>
        </Box>
      )}

      {/* Sidebar for larger screens */}
      {!isMobile && (
        <Box
          as="nav"
          w="250px"
          p={5}
          bg="teal.500"
          color="white"
          height="100vh"
          position="fixed"
          top="0" // Align to the top of the screen
        >
          <VStack spacing={6} align="start">
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
      )}
    </>
  );
};

export default Sidebar;
