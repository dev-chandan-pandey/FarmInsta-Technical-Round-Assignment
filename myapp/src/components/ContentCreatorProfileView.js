// // import React from 'react';
// // import { useSelector } from 'react-redux';
// // import { useParams } from 'react-router-dom';
// // import { Box, Heading, Text, VStack, Link } from '@chakra-ui/react';

// // const ContentCreatorProfileView = () => {
// //   const { id } = useParams();
// //   const creator = useSelector(state =>
// //     state.contentCreators.creators.find(creator => creator.id === id)
// //   );

// //   if (!creator) return <Text>Content Creator not found</Text>;

// //   return (
// //     <VStack spacing={4} w="full" p={5}>
// //       <Box w="full" h="200px" bg="gray.200" />
// //       <Heading>{creator.name}</Heading>
// //       <Text>Email: {creator.email}</Text>
// //       <Text>Description: {creator.description}</Text>
// //       <Text>Languages: {creator.languages}</Text>
// //       <Text>Education: {creator.education}</Text>
// //       <Text>Specialization: {creator.specialization}</Text>
// //       <Text>
// //         Social Media: <Link href={creator.socialMediaLinks} isExternal>{creator.socialMediaLinks}</Link>
// //       </Text>
// //     </VStack>
// //   );
// // };

// // export default ContentCreatorProfileView;
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { Box, Heading, Text, VStack, Link } from '@chakra-ui/react';

// const ContentCreatorProfileView = () => {
//   const { id } = useParams();
//   const creator = useSelector(state =>
//     state.contentCreators.creators.find(creator => creator.id === id)
//   );

//   if (!creator) return <Text>Content Creator not found</Text>;

//   return (
//     <VStack spacing={4} w="full" p={5}>
//       <Box w="full" h="200px" bg="gray.200" borderRadius="md" />
//       <Heading size="lg">{creator.name}</Heading>
//       <Text>Email: {creator.email}</Text>
//       <Text>Description: {creator.description}</Text>
//       <Text>Languages: {creator.languages}</Text>
//       <Text>Education: {creator.education}</Text>
//       <Text>Specialization: {creator.specialization}</Text>
//       <Text>
//         Social Media: <Link href={creator.socialMediaLinks} isExternal>{creator.socialMediaLinks}</Link>
//       </Text>
//     </VStack>
//   );
// };

// export default ContentCreatorProfileView;
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { Box, Text, VStack } from '@chakra-ui/react';

// const ContentCreatorProfileView = () => {
//   const { id } = useParams();
//   const creator = useSelector(state =>
//     state.contentCreators.creators.find(creator => creator.id === id)
//   );

//   return (
//     <VStack spacing={4} p={5}>
//       {creator ? (
//         <Box borderWidth={1} borderColor="neutral.300" p={5} w="full">
//           <Text fontWeight="bold" fontSize="xl">{creator.name}</Text>
//           <Text>Email: {creator.email}</Text>
//           <Text>Description: {creator.description}</Text>
//           <Text>Languages: {creator.languages}</Text>
//           <Text>Education: {creator.education}</Text>
//           <Text>Specialization: {creator.specialization}</Text>
//           <Text>Social Media Links: {creator.socialMediaLinks}</Text>
//         </Box>
//       ) : (
//         <Text>No Content Creator found</Text>
//       )}
//     </VStack>
//   );
// };

// export default ContentCreatorProfileView;
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { Box, Text, VStack } from '@chakra-ui/react';

// const ContentCreatorProfileView = () => {
//   const { id } = useParams();
//   const creator = useSelector(state =>
//     state.contentCreators.creators.find(creator => creator.id === id)
//   );

//   return (
//     <VStack spacing={4} p={5}>
//       {creator ? (
//         <Box borderWidth={1} borderColor="neutral.300" p={5} w="full">
//           <Text fontWeight="bold" fontSize="xl">{creator.name}</Text>
//           <Text>Email: {creator.email}</Text>
//           <Text>Description: {creator.description}</Text>
//           <Text>Languages: {creator.languages}</Text>
//           <Text>Education: {creator.education}</Text>
//           <Text>Specialization: {creator.specialization}</Text>
//           <Text>Social Media Links: {creator.socialMediaLinks}</Text>
//         </Box>
//       ) : (
//         <Text>No Content Creator found</Text>
//       )}
//     </VStack>
//   );
// };

// export default ContentCreatorProfileView;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { deleteCreator } from '../store/contentCreatorSlice';
import {
  Box, Button, Flex, Grid, Input, Select, Text, VStack, HStack, IconButton, FormControl, Badge,
  Stack, useToast, useColorMode, useColorModeValue
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

const ContentCreatorList = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const creators = useSelector(state => state.contentCreators.creators);

  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    language: '',
    education: '',
    specialization: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const creatorsPerPage = 5;

  const { colorMode, toggleColorMode } = useColorMode();
  
  // New color variables for better theme support
  const bgColor = useColorModeValue("gray.500", "teal.500");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const hoverBgColor = useColorModeValue("#e2e8f0", "#2D3748");
  const selectBgColor = useColorModeValue("white", "#2D3748");
  const selectTextColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const cardBgColor = useColorModeValue("white", "#2D3748");
  const cardTextColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const cardShadow = useColorModeValue("md", "dark-lg");

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this creator?")) {
      dispatch(deleteCreator(id));
      toast({
        title: "Creator deleted.",
        description: "The content creator has been successfully deleted.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const filteredCreators = creators.filter(creator => {
    const creatorLanguage = creator.languages ? creator.languages.toLowerCase() : '';
    const creatorEducation = creator.education ? creator.education.toLowerCase() : '';
    const creatorSpecialization = creator.specialization ? creator.specialization.toLowerCase() : '';
    const lowerSearchQuery = searchQuery.toLowerCase();

    return (
      (!filters.language || creatorLanguage === filters.language.toLowerCase()) &&
      (!filters.education || creatorEducation === filters.education.toLowerCase()) &&
      (!filters.specialization || creatorSpecialization === filters.specialization.toLowerCase()) &&
      (creator.name.toLowerCase().includes(lowerSearchQuery) ||
        creator.email.toLowerCase().includes(lowerSearchQuery) ||
        creator.description.toLowerCase().includes(lowerSearchQuery))
    );
  });

  const totalPages = Math.ceil(filteredCreators.length / creatorsPerPage);
  const indexOfLastCreator = currentPage * creatorsPerPage;
  const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
  const currentCreators = filteredCreators.slice(indexOfFirstCreator, indexOfLastCreator);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <VStack
      spacing={6}
      w="full"
      p={5}
      pt={{ base: "80px", md: "20px" }}
      pl={{ base: "0", md: "250px" }}
      bg={bgColor}
      color={textColor}
      borderRadius="md"
      shadow={cardShadow}
    >
      <Flex w="full" justify="space-between" align="center" mb={4}>
        <Input 
          placeholder="Search creators..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          variant="filled"
          size="lg"
          borderColor={borderColor}
          bg={selectBgColor}
          color={textColor}
        />

        <IconButton
          aria-label="Toggle Theme"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          size="lg"
          colorScheme={colorMode === 'light' ? "teal" : "purple"}
        />
      </Flex>

      <HStack spacing={4} mb={4} wrap="wrap">
        {filters.language && (
          <Badge colorScheme="blue" variant="solid" onClick={() => setFilters({ ...filters, language: '' })}>
            {`Language: ${filters.language}`}
          </Badge>
        )}
        {filters.education && (
          <Badge colorScheme="green" variant="solid" onClick={() => setFilters({ ...filters, education: '' })}>
            {`Education: ${filters.education}`}
          </Badge>
        )}
        {filters.specialization && (
          <Badge colorScheme="purple" variant="solid" onClick={() => setFilters({ ...filters, specialization: '' })}>
            {`Specialization: ${filters.specialization}`}
          </Badge>
        )}
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl>
          <Select 
            placeholder="Filter by Language"
            variant="outline"
            onChange={(e) => setFilters({ ...filters, language: e.target.value })}
            borderColor={borderColor}
            bg={selectBgColor}
            color={selectTextColor}
          >
            <option value="">All Languages</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </Select>
        </FormControl>
        <FormControl>
          <Select 
            placeholder="Filter by Education"
            variant="outline"
            onChange={(e) => setFilters({ ...filters, education: e.target.value })}
            borderColor={borderColor}
            bg={selectBgColor}
            color={selectTextColor}
          >
            <option value="">All Education Levels</option>
            <option value="bachelor">Bachelor's</option>
            <option value="master">Master's</option>
            <option value="phd">PhD</option>
          </Select>
        </FormControl>
        <FormControl>
          <Select 
            placeholder="Filter by Specialization"
            variant="outline"
            onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
            borderColor={borderColor}
            bg={selectBgColor}
            color={selectTextColor}
          >
            <option value="">All Specializations</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
            <option value="writing">Writing</option>
          </Select>
        </FormControl>
      </HStack>

      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6} w="full">
        {currentCreators.map((creator) => (
          <Box
            key={creator.id}
            p={5}
            shadow={cardShadow}
            borderWidth="1px"
            borderRadius="md"
            bg={cardBgColor}
            color={cardTextColor}
            _hover={{ bg: hoverBgColor }}
          >
            <Flex justify="space-between" align="center" mb={4}>
              <Text fontWeight="bold" fontSize="xl">{creator.name}</Text>
              <HStack spacing={2}>
                <RouterLink to={`/edit/${creator.id}`}>
                  <IconButton 
                    aria-label="Edit Creator" 
                    icon={<EditIcon />} 
                    variant="outline"
                    colorScheme="blue"
                    size="sm"
                  />
                </RouterLink>
                <IconButton 
                  aria-label="Delete Creator" 
                  icon={<DeleteIcon />} 
                  variant="outline"
                  colorScheme="red"
                  size="sm"
                  onClick={() => handleDelete(creator.id)}
                />
              </HStack>
            </Flex>
            <Text mb={4}>{creator.description}</Text>
            <Text fontSize="sm" color="gray.500">{creator.email}</Text>
          </Box>
        ))}
      </Grid>

      <Flex justify="space-between" w="full" mt={4}>
        <Button 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1}
          size="sm"
          colorScheme="teal"
        >
          Previous
        </Button>
        <Text>Page {currentPage} of {totalPages}</Text>
        <Button 
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === totalPages}
          size="sm"
          colorScheme="teal"
        >
          Next
        </Button>
      </Flex>
    </VStack>
  );
};

export default ContentCreatorList;