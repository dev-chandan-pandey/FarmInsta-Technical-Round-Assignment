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
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Text, VStack } from '@chakra-ui/react';

const ContentCreatorProfileView = () => {
  const { id } = useParams();
  const creator = useSelector(state =>
    state.contentCreators.creators.find(creator => creator.id === id)
  );

  return (
    <VStack spacing={4} p={5}>
      {creator ? (
        <Box borderWidth={1} borderColor="neutral.300" p={5} w="full">
          <Text fontWeight="bold" fontSize="xl">{creator.name}</Text>
          <Text>Email: {creator.email}</Text>
          <Text>Description: {creator.description}</Text>
          <Text>Languages: {creator.languages}</Text>
          <Text>Education: {creator.education}</Text>
          <Text>Specialization: {creator.specialization}</Text>
          <Text>Social Media Links: {creator.socialMediaLinks}</Text>
        </Box>
      ) : (
        <Text>No Content Creator found</Text>
      )}
    </VStack>
  );
};

export default ContentCreatorProfileView;
