// // // // import React from 'react';
// // // // import { useDispatch, useSelector } from 'react-redux';
// // // // import { Link as RouterLink } from 'react-router-dom';
// // // // import { deleteCreator } from '../store/contentCreatorSlice';
// // // // import { Button, Box, Text, VStack, HStack, IconButton } from '@chakra-ui/react';
// // // // import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

// // // // const ContentCreatorList = () => {
// // // //   const dispatch = useDispatch();
// // // //   const creators = useSelector(state => state.contentCreators.creators);

// // // //   const handleDelete = (id) => {
// // // //     dispatch(deleteCreator(id));
// // // //   };

// // // //   return (
// // // //     <VStack spacing={4} w="full" p={5}>
// // // //       {creators.length === 0 ? (
// // // //         <Text>No Content Creators found</Text>
// // // //       ) : (
// // // //         creators.map(creator => (
// // // //           <Box
// // // //             key={creator.id}
// // // //             p={4}
// // // //             borderWidth={1}
// // // //             borderRadius="md"
// // // //             w="full"
// // // //             bg="gray.50"
// // // //             boxShadow="sm"
// // // //           >
// // // //             <HStack justify="space-between">
// // // //               <Box>
// // // //                 <Text fontWeight="bold">{creator.name}</Text>
// // // //                 <Text>Email: {creator.email}</Text>
// // // //                 <Text>Description: {creator.description}</Text>
// // // //               </Box>
// // // //               <HStack>
// // // //                 <IconButton
// // // //                   as={RouterLink}
// // // //                   to={`/edit/${creator.id}`}
// // // //                   aria-label="Edit"
// // // //                   icon={<EditIcon />}
// // // //                   colorScheme="teal"
// // // //                 />
// // // //                 <IconButton
// // // //                   onClick={() => handleDelete(creator.id)}
// // // //                   aria-label="Delete"
// // // //                   icon={<DeleteIcon />}
// // // //                   colorScheme="red"
// // // //                 />
// // // //               </HStack>
// // // //             </HStack>
// // // //           </Box>
// // // //         ))
// // // //       )}
// // // //     </VStack>
// // // //   );
// // // // };

// // // // export default ContentCreatorList;
// // // import React from 'react';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { Link as RouterLink } from 'react-router-dom';
// // // import { deleteCreator } from '../store/contentCreatorSlice';
// // // import { Button, Box, Text, VStack, HStack, IconButton, Stack } from '@chakra-ui/react';
// // // import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

// // // const ContentCreatorList = () => {
// // //   const dispatch = useDispatch();
// // //   const creators = useSelector(state => state.contentCreators.creators);

// // //   const handleDelete = (id) => {
// // //     if (window.confirm("Are you sure you want to delete this creator?")) {
// // //       dispatch(deleteCreator(id));
// // //     }
// // //   };

// // //   return (
// // //     <VStack spacing={4} w="full" p={5}>
// // //       {creators.length === 0 ? (
// // //         <Text>No Content Creators found</Text>
// // //       ) : (
// // //         creators.map(creator => (
// // //           <Box
// // //             key={creator.id}
// // //             p={4}
// // //             borderWidth={1}
// // //             borderRadius="md"
// // //             w="full"
// // //             bg="gray.50"
// // //             boxShadow="md"
// // //             _hover={{ bg: "gray.100" }}
// // //           >
// // //             <HStack justify="space-between">
// // //               <Stack>
// // //                 <Text fontWeight="bold">{creator.name}</Text>
// // //                 <Text>Email: {creator.email}</Text>
// // //                 <Text>Description: {creator.description}</Text>
// // //               </Stack>
// // //               <HStack>
// // //                 <IconButton
// // //                   as={RouterLink}
// // //                   to={`/edit/${creator.id}`}
// // //                   aria-label="Edit"
// // //                   icon={<EditIcon />}
// // //                   colorScheme="teal"
// // //                 />
// // //                 <IconButton
// // //                   onClick={() => handleDelete(creator.id)}
// // //                   aria-label="Delete"
// // //                   icon={<DeleteIcon />}
// // //                   colorScheme="red"
// // //                 />
// // //               </HStack>
// // //             </HStack>
// // //           </Box>
// // //         ))
// // //       )}
// // //     </VStack>
// // //   );
// // // };

// // // export default ContentCreatorList;
// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { Link as RouterLink } from 'react-router-dom';
// // import { deleteCreator } from '../store/contentCreatorSlice';
// // import { Button, Box, Text, VStack, HStack, IconButton, Stack } from '@chakra-ui/react';
// // import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

// // const ContentCreatorList = () => {
// //   const dispatch = useDispatch();
// //   const creators = useSelector(state => state.contentCreators.creators);

// //   const handleDelete = (id) => {
// //     if (window.confirm("Are you sure you want to delete this creator?")) {
// //       dispatch(deleteCreator(id));
// //     }
// //   };

// //   return (
// //     <VStack spacing={4} w="full" p={5}>
// //       {creators.length === 0 ? (
// //         <Text>No Content Creators found</Text>
// //       ) : (
// //         creators.map(creator => (
// //           <Box
// //             key={creator.id}
// //             p={4}
// //             borderWidth={1}
// //             borderColor="neutral.300"
// //             bg="gray"
// //             _hover={{ bg: 'blue.400' }}
// //             w="full"
// //           >
// //             <HStack justify="space-between">
// //               <Stack>
// //                 <Text fontWeight="bold">{creator.name}</Text>
// //                 <Text>Email: {creator.email}</Text>
// //                 <Text>Description: {creator.description}</Text>
// //               </Stack>
// //               <HStack>
// //                 <IconButton
// //                   as={RouterLink}
// //                   to={`/edit/${creator.id}`}
// //                   aria-label="Edit"
// //                   icon={<EditIcon />}
// //                   colorScheme="primary"
// //                 />
// //                 <IconButton
// //                   onClick={() => handleDelete(creator.id)}
// //                   aria-label="Delete"
// //                   icon={<DeleteIcon />}
// //                   colorScheme="red"
// //                 />
// //               </HStack>
// //             </HStack>
// //           </Box>
// //         ))
// //       )}
// //     </VStack>
// //   );
// // };

// // export default ContentCreatorList;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link as RouterLink } from 'react-router-dom';
// import { deleteCreator } from '../store/contentCreatorSlice';
// import { Button, Box, Text, VStack, HStack, IconButton, Stack, Input } from '@chakra-ui/react';
// import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

// const ContentCreatorList = () => {
//   const dispatch = useDispatch();
//   const creators = useSelector(state => state.contentCreators.creators);
  
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredCreators = creators.filter(creator =>
//     creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     creator.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     creator.description.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this creator?")) {
//       dispatch(deleteCreator(id));
//     }
//   };

//   return (
//     <VStack spacing={4} w="full" p={5}>
//       <Input 
//         placeholder="Search creators..." 
//         value={searchQuery} 
//         onChange={(e) => setSearchQuery(e.target.value)} 
//         mb={4} 
//       />
//       {filteredCreators.length === 0 ? (
//         <Text>No Content Creators found</Text>
//       ) : (
//         filteredCreators.map(creator => (
//           <Box
//             key={creator.id}
//             p={4}
//             borderWidth={1}
//             borderColor="neutral.300"
//             bg="gray"
//             _hover={{ bg: 'blue.400' }}
//             w="full"
//           >
//             <HStack justify="space-between">
//               <Stack>
//                 <Text fontWeight="bold">{creator.name}</Text>
//                 <Text>Email: {creator.email}</Text>
//                 <Text>Description: {creator.description}</Text>
//               </Stack>
//               <HStack>
//                 <IconButton
//                   as={RouterLink}
//                   to={`/edit/${creator.id}`}
//                   aria-label="Edit"
//                   icon={<EditIcon />}
//                   colorScheme="primary"
//                 />
//                 <IconButton
//                   onClick={() => handleDelete(creator.id)}
//                   aria-label="Delete"
//                   icon={<DeleteIcon />}
//                   colorScheme="red"
//                 />
//               </HStack>
//             </HStack>
//           </Box>
//         ))
//       )}
//     </VStack>
//   );
// };

// export default ContentCreatorList;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link as RouterLink } from 'react-router-dom';
// import { deleteCreator } from '../store/contentCreatorSlice';
// import { Button, Box, Text, VStack, HStack, IconButton, Stack, Input, Select } from '@chakra-ui/react';
// import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

// const ContentCreatorList = () => {
//   const dispatch = useDispatch();
//   const creators = useSelector(state => state.contentCreators.creators);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filters, setFilters] = useState({
//     language: '',
//     education: '',
//     specialization: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const creatorsPerPage = 5;

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this creator?")) {
//       dispatch(deleteCreator(id));
//     }
//   };

//   // Apply filters and search query
//   const filteredCreators = creators
//     .filter(creator =>
//       (!filters.language || creator.language === filters.language) &&
//       (!filters.education || creator.education === filters.education) &&
//       (!filters.specialization || creator.specialization === filters.specialization) &&
//       (creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         creator.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         creator.description.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//   // Pagination logic
//   const indexOfLastCreator = currentPage * creatorsPerPage;
//   const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
//   const currentCreators = filteredCreators.slice(indexOfFirstCreator, indexOfLastCreator);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <VStack spacing={4} w="full" p={5}>
//       <Input 
//         placeholder="Search creators..." 
//         value={searchQuery} 
//         onChange={(e) => setSearchQuery(e.target.value)} 
//         mb={4} 
//       />

//       <HStack spacing={4} mb={4}>
//         <Select placeholder="Filter by Language" onChange={(e) => setFilters({ ...filters, language: e.target.value })}>
//           <option value="English">English</option>
//           <option value="Spanish">Spanish</option>
//           <option value="French">French</option>
//         </Select>

//         <Select placeholder="Filter by Education" onChange={(e) => setFilters({ ...filters, education: e.target.value })}>
//           <option value="Bachelor">Bachelor's</option>
//           <option value="Master">Master's</option>
//           <option value="PhD">PhD</option>
//         </Select>

//         <Select placeholder="Filter by Specialization" onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}>
//           <option value="Marketing">Marketing</option>
//           <option value="Design">Design</option>
//           <option value="Development">Development</option>
//         </Select>
//       </HStack>

//       {currentCreators.length === 0 ? (
//         <Text>No Content Creators found</Text>
//       ) : (
//         currentCreators.map(creator => (
//           <Box
//             key={creator.id}
//             p={4}
//             borderWidth={1}
//             borderColor="neutral.300"
//             bg="gray"
//             _hover={{ bg: 'blue.400' }}
//             w="full"
//           >
//             <HStack justify="space-between">
//               <Stack>
//                 <Text fontWeight="bold">{creator.name}</Text>
//                 <Text>Email: {creator.email}</Text>
//                 <Text>Description: {creator.description}</Text>
//               </Stack>
//               <HStack>
//                 <IconButton
//                   as={RouterLink}
//                   to={`/edit/${creator.id}`}
//                   aria-label="Edit"
//                   icon={<EditIcon />}
//                   colorScheme="primary"
//                 />
//                 <IconButton
//                   onClick={() => handleDelete(creator.id)}
//                   aria-label="Delete"
//                   icon={<DeleteIcon />}
//                   colorScheme="red"
//                 />
//               </HStack>
//             </HStack>
//           </Box>
//         ))
//       )}

//       {/* Pagination Controls */}
//       <HStack mt={4} justify="center">
//         <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
//           Previous
//         </Button>
//         <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredCreators.length / creatorsPerPage)}>
//           Next
//         </Button>
//       </HStack>
//     </VStack>
//   );
// };

// export default ContentCreatorList;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link as RouterLink } from 'react-router-dom';
// import { deleteCreator } from '../store/contentCreatorSlice';
// import { Button, Box, Text, VStack, HStack, IconButton, Stack, Input, Select } from '@chakra-ui/react';
// import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

// const ContentCreatorList = () => {
//   const dispatch = useDispatch();
//   const creators = useSelector(state => state.contentCreators.creators);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filters, setFilters] = useState({
//     language: '',
//     education: '',
//     specialization: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const creatorsPerPage = 5;

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this creator?")) {
//       dispatch(deleteCreator(id));
//     }
//   };

//   // Apply filters and search query
//   const filteredCreators = creators
//     .filter(creator =>
//       (!filters.language || creator.languages.toLowerCase() === filters.language.toLowerCase()) &&
//       (!filters.education || creator.education.toLowerCase() === filters.education.toLowerCase()) &&
//       (!filters.specialization || creator.specialization.toLowerCase() === filters.specialization.toLowerCase()) &&
//       (creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         creator.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         creator.description.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//   // Pagination logic
//   const indexOfLastCreator = currentPage * creatorsPerPage;
//   const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
//   const currentCreators = filteredCreators.slice(indexOfFirstCreator, indexOfLastCreator);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <VStack spacing={4} w="full" p={5}>
//       <Input 
//         placeholder="Search creators..." 
//         value={searchQuery} 
//         onChange={(e) => setSearchQuery(e.target.value)} 
//         mb={4} 
//       />

//       <HStack spacing={4} mb={4}>
//         <Select placeholder="Filter by Language" onChange={(e) => setFilters({ ...filters, language: e.target.value })}>
//           <option value="English">English</option>
//           <option value="Spanish">Spanish</option>
//           <option value="French">French</option>
//         </Select>

//         <Select placeholder="Filter by Education" onChange={(e) => setFilters({ ...filters, education: e.target.value })}>
//           <option value="Bachelor">Bachelor's</option>
//           <option value="Master">Master's</option>
//           <option value="PhD">PhD</option>
//         </Select>

//         <Select placeholder="Filter by Specialization" onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}>
//           <option value="Marketing">Marketing</option>
//           <option value="Design">Design</option>
//           <option value="Development">Development</option>
//         </Select>
//       </HStack>

//       {currentCreators.length === 0 ? (
//         <Text>No Content Creators found</Text>
//       ) : (
//         currentCreators.map(creator => (
//           <Box
//             key={creator.id}
//             p={4}
//             borderWidth={1}
//             borderColor="neutral.300"
//             bg="gray"
//             _hover={{ bg: 'blue.400' }}
//             w="full"
//           >
//             <HStack justify="space-between">
//               <Stack>
//                 <Text fontWeight="bold">{creator.name}</Text>
//                 <Text>Email: {creator.email}</Text>
//                 <Text>Description: {creator.description}</Text>
//               </Stack>
//               <HStack>
//                 <IconButton
//                   as={RouterLink}
//                   to={`/edit/${creator.id}`}
//                   aria-label="Edit"
//                   icon={<EditIcon />}
//                   colorScheme="primary"
//                 />
//                 <IconButton
//                   onClick={() => handleDelete(creator.id)}
//                   aria-label="Delete"
//                   icon={<DeleteIcon />}
//                   colorScheme="red"
//                 />
//               </HStack>
//             </HStack>
//           </Box>
//         ))
//       )}

//       {/* Pagination Controls */}
//       <HStack mt={4} justify="center">
//         <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
//           Previous
//         </Button>
//         <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredCreators.length / creatorsPerPage)}>
//           Next
//         </Button>
//       </HStack>
//     </VStack>
//   );
// };

// export default ContentCreatorList;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link as RouterLink } from 'react-router-dom';
// import { deleteCreator } from '../store/contentCreatorSlice';
// import { Button, Box, Text, VStack, HStack, IconButton, Stack, Input, Select } from '@chakra-ui/react';
// import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

// const ContentCreatorList = () => {
//   const dispatch = useDispatch();
//   const creators = useSelector(state => state.contentCreators.creators);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filters, setFilters] = useState({
//     language: '',
//     education: '',
//     specialization: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const creatorsPerPage = 5;

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this creator?")) {
//       dispatch(deleteCreator(id));
//     }
//   };

//   // Apply filters and search query
//   const filteredCreators = creators
//     .filter(creator => {
//       // Convert creator data to lowercase for case-insensitive comparison
//       const creatorLanguage = creator.languages ? creator.languages.toLowerCase() : '';
//       const creatorEducation = creator.education ? creator.education.toLowerCase() : '';
//       const creatorSpecialization = creator.specialization ? creator.specialization.toLowerCase() : '';
//       const lowerSearchQuery = searchQuery.toLowerCase();
      
//       return (
//         (!filters.language || creatorLanguage === filters.language.toLowerCase()) &&
//         (!filters.education || creatorEducation === filters.education.toLowerCase()) &&
//         (!filters.specialization || creatorSpecialization === filters.specialization.toLowerCase()) &&
//         (creator.name.toLowerCase().includes(lowerSearchQuery) ||
//           creator.email.toLowerCase().includes(lowerSearchQuery) ||
//           creator.description.toLowerCase().includes(lowerSearchQuery))
//       );
//     });

//   // Pagination logic
//   const indexOfLastCreator = currentPage * creatorsPerPage;
//   const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
//   const currentCreators = filteredCreators.slice(indexOfFirstCreator, indexOfLastCreator);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <VStack spacing={4} w="full" p={5}>
//       <Input 
//         placeholder="Search creators..." 
//         value={searchQuery} 
//         onChange={(e) => setSearchQuery(e.target.value)} 
//         mb={4} 
//       />

//       <HStack spacing={4} mb={4}>
//         <Select 
//           placeholder="Filter by Language" 
//           onChange={(e) => setFilters({ ...filters, language: e.target.value })}
//         >
//           <option value="">All Languages</option>
//           <option value="english">English</option>
//           <option value="spanish">Spanish</option>
//           <option value="french">French</option>
//         </Select>

//         <Select 
//           placeholder="Filter by Education" 
//           onChange={(e) => setFilters({ ...filters, education: e.target.value })}
//         >
//           <option value="">All Education</option>
//           <option value="bachelor">Bachelor's</option>
//           <option value="master">Master's</option>
//           <option value="phd">PhD</option>
//         </Select>

//         <Select 
//           placeholder="Filter by Specialization" 
//           onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
//         >
//           <option value="">All Specializations</option>
//           <option value="marketing">Marketing</option>
//           <option value="design">Design</option>
//           <option value="development">Development</option>
//         </Select>
//       </HStack>

//       {currentCreators.length === 0 ? (
//         <Text>No Content Creators found</Text>
//       ) : (
//         currentCreators.map(creator => (
//           <Box
//             key={creator.id}
//             p={4}
//             borderWidth={1}
//             borderColor="neutral.300"
//             bg="gray"
//             _hover={{ bg: 'blue.400' }}
//             w="full"
//           >
//             <HStack justify="space-between">
//               <Stack>
//                 <Text fontWeight="bold">{creator.name}</Text>
//                 <Text>Email: {creator.email}</Text>
//                 <Text>Description: {creator.description}</Text>
//               </Stack>
//               <HStack>
//                 <IconButton
//                   as={RouterLink}
//                   to={`/edit/${creator.id}`}
//                   aria-label="Edit"
//                   icon={<EditIcon />}
//                   colorScheme="primary"
//                 />
//                 <IconButton
//                   onClick={() => handleDelete(creator.id)}
//                   aria-label="Delete"
//                   icon={<DeleteIcon />}
//                   colorScheme="red"
//                 />
//               </HStack>
//             </HStack>
//           </Box>
//         ))
//       )}

//       {/* Pagination Controls */}
//       <HStack mt={4} justify="center">
//         <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
//           Previous
//         </Button>
//         <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredCreators.length / creatorsPerPage)}>
//           Next
//         </Button>
//       </HStack>
//     </VStack>
//   );
// };

// export default ContentCreatorList;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link as RouterLink } from 'react-router-dom';
// import { deleteCreator } from '../store/contentCreatorSlice';
// import { Button, Box, Text, VStack, HStack, IconButton, Stack, Input, Select } from '@chakra-ui/react';
// import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

// const ContentCreatorList = () => {
//   const dispatch = useDispatch();
//   const creators = useSelector(state => state.contentCreators.creators);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filters, setFilters] = useState({
//     language: '',
//     education: '',
//     specialization: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const creatorsPerPage = 5;

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this creator?")) {
//       dispatch(deleteCreator(id));
//     }
//   };

//   // Debugging: Log the filters and creator data
//   console.log('Filters:', filters);
//   console.log('Creators:', creators);

//   // Apply filters and search query
//   const filteredCreators = creators
//     .filter(creator => {
//       const creatorLanguage = creator.languages ? creator.languages.toLowerCase() : '';
//       const creatorEducation = creator.education ? creator.education.toLowerCase() : '';
//       const creatorSpecialization = creator.specialization ? creator.specialization.toLowerCase() : '';
//       const lowerSearchQuery = searchQuery.toLowerCase();

//       console.log('Filtering creator:', creator); // Debugging

//       return (
//         (!filters.language || creatorLanguage === filters.language.toLowerCase()) &&
//         (!filters.education || creatorEducation === filters.education.toLowerCase()) &&
//         (!filters.specialization || creatorSpecialization === filters.specialization.toLowerCase()) &&
//         (creator.name.toLowerCase().includes(lowerSearchQuery) ||
//           creator.email.toLowerCase().includes(lowerSearchQuery) ||
//           creator.description.toLowerCase().includes(lowerSearchQuery))
//       );
//     });

//   // Pagination logic
//   const indexOfLastCreator = currentPage * creatorsPerPage;
//   const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
//   const currentCreators = filteredCreators.slice(indexOfFirstCreator, indexOfLastCreator);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <VStack spacing={4} w="full" p={5}>
//       <Input 
//         placeholder="Search creators..." 
//         value={searchQuery} 
//         onChange={(e) => setSearchQuery(e.target.value)} 
//         mb={4} 
//       />

//       <HStack spacing={4} mb={4}>
//         <Select 
//           placeholder="Filter by Language" 
//           onChange={(e) => setFilters({ ...filters, language: e.target.value })}
//         >
//           <option value="">All Languages</option>
//           <option value="english">English</option>
//           <option value="spanish">Spanish</option>
//           <option value="french">French</option>
//         </Select>

//         <Select 
//           placeholder="Filter by Education" 
//           onChange={(e) => setFilters({ ...filters, education: e.target.value })}
//         >
//           <option value="">All Education</option>
//           <option value="bachelor">Bachelor's</option>
//           <option value="master">Master's</option>
//           <option value="phd">PhD</option>
//         </Select>

//         <Select 
//           placeholder="Filter by Specialization" 
//           onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
//         >
//           <option value="">All Specializations</option>
//           <option value="marketing">Marketing</option>
//           <option value="design">Design</option>
//           <option value="development">Development</option>
//         </Select>
//       </HStack>

//       {currentCreators.length === 0 ? (
//         <Text>No Content Creators found</Text>
//       ) : (
//         currentCreators.map(creator => (
//           <Box
//             key={creator.id}
//             p={4}
//             borderWidth={1}
//             borderColor="neutral.300"
//             bg="gray"
//             _hover={{ bg: 'blue.400' }}
//             w="full"
//           >
//             <HStack justify="space-between">
//               <Stack>
//                 <Text fontWeight="bold">{creator.name}</Text>
//                 <Text>Email: {creator.email}</Text>
//                 <Text>Description: {creator.description}</Text>
//                 <Text>Languages: {creator.languages}</Text>
//                 <Text>Education: {creator.education}</Text>
//                 <Text>Specialization: {creator.specialization}</Text>
//               </Stack>
//               <HStack>
//                 <IconButton
//                   as={RouterLink}
//                   to={`/edit/${creator.id}`}
//                   aria-label="Edit"
//                   icon={<EditIcon />}
//                   colorScheme="primary"
//                 />
//                 <IconButton
//                   onClick={() => handleDelete(creator.id)}
//                   aria-label="Delete"
//                   icon={<DeleteIcon />}
//                   colorScheme="red"
//                 />
//               </HStack>
//             </HStack>
//           </Box>
//         ))
//       )}

//       {/* Pagination Controls */}
//       <HStack mt={4} justify="center">
//         <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
//           Previous
//         </Button>
//         <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredCreators.length / creatorsPerPage)}>
//           Next
//         </Button>
//       </HStack>
//     </VStack>
//   );
// };

// export default ContentCreatorList;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link as RouterLink } from 'react-router-dom';
// import { deleteCreator } from '../store/contentCreatorSlice';
// import {
//   Box, Button, Flex, Grid, Input, Select, Text, VStack, HStack, IconButton, FormControl, FormLabel,
//   useColorModeValue, Stack
// } from '@chakra-ui/react';
// import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
// import { useToast } from '@chakra-ui/react';

// const ContentCreatorList = () => {
//   const toast = useToast();
//   const dispatch = useDispatch();
//   const creators = useSelector(state => state.contentCreators.creators);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filters, setFilters] = useState({
//     language: '',
//     education: '',
//     specialization: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const creatorsPerPage = 5;

//   // const handleDelete = (id) => {
//   //   if (window.confirm("Are you sure you want to delete this creator?")) {
//   //     dispatch(deleteCreator(id));
//   //   }
//   // };
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this creator?")) {
//       dispatch(deleteCreator(id));
//       toast({
//         title: "Creator deleted.",
//         description: "The content creator has been successfully deleted.",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };
//   // Apply filters and search query
//   const filteredCreators = creators
//     .filter(creator => {
//       const creatorLanguage = creator.languages ? creator.languages.toLowerCase() : '';
//       const creatorEducation = creator.education ? creator.education.toLowerCase() : '';
//       const creatorSpecialization = creator.specialization ? creator.specialization.toLowerCase() : '';
//       const lowerSearchQuery = searchQuery.toLowerCase();

//       return (
//         (!filters.language || creatorLanguage === filters.language.toLowerCase()) &&
//         (!filters.education || creatorEducation === filters.education.toLowerCase()) &&
//         (!filters.specialization || creatorSpecialization === filters.specialization.toLowerCase()) &&
//         (creator.name.toLowerCase().includes(lowerSearchQuery) ||
//           creator.email.toLowerCase().includes(lowerSearchQuery) ||
//           creator.description.toLowerCase().includes(lowerSearchQuery))
//       );
//     });

//   // Pagination logic
//   const indexOfLastCreator = currentPage * creatorsPerPage;
//   const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
//   const currentCreators = filteredCreators.slice(indexOfFirstCreator, indexOfLastCreator);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <VStack spacing={6} w="full" p={5}>
//       <Input 
//         placeholder="Search creators..." 
//         value={searchQuery} 
//         onChange={(e) => setSearchQuery(e.target.value)} 
//         mb={4}
//         variant="filled"
//         size="lg"
//       />

//       <HStack spacing={4} mb={4}>
//         <FormControl>
//           <Select 
//             placeholder="Filter by Language"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, language: e.target.value })}
//           >
//             <option value="">All Languages</option>
//             <option value="english">English</option>
//             <option value="spanish">Spanish</option>
//             <option value="french">French</option>
//           </Select>
//         </FormControl>

//         <FormControl>
//           <Select 
//             placeholder="Filter by Education"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, education: e.target.value })}
//           >
//             <option value="">All Education</option>
//             <option value="bachelor">Bachelor's</option>
//             <option value="master">Master's</option>
//             <option value="phd">PhD</option>
//           </Select>
//         </FormControl>

//         <FormControl>
//           <Select 
//             placeholder="Filter by Specialization"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
//           >
//             <option value="">All Specializations</option>
//             <option value="marketing">Marketing</option>
//             <option value="design">Design</option>
//             <option value="development">Development</option>
//           </Select>
//         </FormControl>
//       </HStack>

//       {currentCreators.length === 0 ? (
//         <Text>No Content Creators found</Text>
//       ) : (
//         <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} w="full">
//           {currentCreators.map(creator => (
//             <Box
//               key={creator.id}
//               p={6}
//               borderWidth={1}
//               borderRadius="lg"
//               boxShadow="lg"
//               bg={useColorModeValue("gray.50", "gray.700")}
//               w="full"
//             >
//               <Flex justify="space-between" align="center">
//                 <Stack spacing={3}>
//                   <Text fontWeight="bold" fontSize="xl">{creator.name}</Text>
//                   <Text>Email: {creator.email}</Text>
//                   <Text>Description: {creator.description}</Text>
//                   <Text>Languages: {creator.languages}</Text>
//                   <Text>Education: {creator.education}</Text>
//                   <Text>Specialization: {creator.specialization}</Text>
//                 </Stack>
//                 <HStack spacing={3}>
//                   <IconButton
//                     as={RouterLink}
//                     to={`/edit/${creator.id}`}
//                     aria-label="Edit"
//                     icon={<EditIcon />}
//                     colorScheme="blue"
//                   />
//                   <IconButton
//                     onClick={() => handleDelete(creator.id)}
//                     aria-label="Delete"
//                     icon={<DeleteIcon />}
//                     colorScheme="red"
//                   />
//                 </HStack>
//               </Flex>
//             </Box>
//           ))}
//         </Grid>
//       )}

//       {/* Pagination Controls */}
//       {/* <HStack mt={8} justify="center" spacing={4}>
//         <Button
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}
//           variant="outline"
//           colorScheme="blue"
//         >
//           Previous
//         </Button>
//         <Button
//           onClick={() => paginate(currentPage + 1)}
//           disabled={currentPage === Math.ceil(filteredCreators.length / creatorsPerPage)}
//           variant="solid"
//           colorScheme="blue"
//         >
//           Next
//         </Button>
//       </HStack> */}
//       <HStack mt={8} justify="center" spacing={4}>
//         <Button
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}
//           variant="outline"
//           colorScheme="blue"
//         >
//           Previous
//         </Button>
//  <Text>Page {currentPage} of {Math.ceil(filteredCreators.length / creatorsPerPage)}</Text>
//         <Button
//           onClick={() => paginate(currentPage + 1)}
//           disabled={currentPage === Math.ceil(filteredCreators.length / creatorsPerPage)}
//           variant="solid"
//           colorScheme="blue"
//         >
//           Next
//         </Button>
//       </HStack>
//     </VStack>
//   );
// };

// export default ContentCreatorList;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link as RouterLink } from 'react-router-dom';
// import { deleteCreator } from '../store/contentCreatorSlice';
// import {
//   Box, Button, Flex, Grid, Input, Select, Text, VStack, HStack, IconButton, FormControl, FormLabel,
//   useColorModeValue, Stack
// } from '@chakra-ui/react';
// import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
// import { useToast } from '@chakra-ui/react';

// const ContentCreatorList = () => {
//   const toast = useToast();
//   const dispatch = useDispatch();
//   const creators = useSelector(state => state.contentCreators.creators);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filters, setFilters] = useState({
//     language: '',
//     education: '',
//     specialization: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const creatorsPerPage = 5;

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this creator?")) {
//       dispatch(deleteCreator(id));
//       toast({
//         title: "Creator deleted.",
//         description: "The content creator has been successfully deleted.",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   // Apply filters and search query
//   const filteredCreators = creators
//     .filter(creator => {
//       const creatorLanguage = creator.languages ? creator.languages.toLowerCase() : '';
//       const creatorEducation = creator.education ? creator.education.toLowerCase() : '';
//       const creatorSpecialization = creator.specialization ? creator.specialization.toLowerCase() : '';
//       const lowerSearchQuery = searchQuery.toLowerCase();

//       return (
//         (!filters.language || creatorLanguage === filters.language.toLowerCase()) &&
//         (!filters.education || creatorEducation === filters.education.toLowerCase()) &&
//         (!filters.specialization || creatorSpecialization === filters.specialization.toLowerCase()) &&
//         (creator.name.toLowerCase().includes(lowerSearchQuery) ||
//           creator.email.toLowerCase().includes(lowerSearchQuery) ||
//           creator.description.toLowerCase().includes(lowerSearchQuery))
//       );
//     });

//   // Pagination logic
//   const indexOfLastCreator = currentPage * creatorsPerPage;
//   const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
//   const currentCreators = filteredCreators.slice(indexOfFirstCreator, indexOfLastCreator);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <VStack spacing={6} w="full" p={5}>
//       <Input 
//         placeholder="Search creators..." 
//         value={searchQuery} 
//         onChange={(e) => setSearchQuery(e.target.value)} 
//         mb={4}
//         variant="filled"
//         size="lg"
//       />

//       <HStack spacing={4} mb={4}>
//         <FormControl>
//           <Select 
//             placeholder="Filter by Language"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, language: e.target.value })}
//           >
//             <option value="">All Languages</option>
//             <option value="english">English</option>
//             <option value="spanish">Spanish</option>
//             <option value="french">French</option>
//           </Select>
//         </FormControl>

//         <FormControl>
//           <Select 
//             placeholder="Filter by Education"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, education: e.target.value })}
//           >
//             <option value="">All Education</option>
//             <option value="bachelor">Bachelor's</option>
//             <option value="master">Master's</option>
//             <option value="phd">PhD</option>
//           </Select>
//         </FormControl>

//         <FormControl>
//           <Select 
//             placeholder="Filter by Specialization"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
//           >
//             <option value="">All Specializations</option>
//             <option value="marketing">Marketing</option>
//             <option value="design">Design</option>
//             <option value="development">Development</option>
//           </Select>
//         </FormControl>
//       </HStack>

//       {currentCreators.length === 0 ? (
//         <Text>No Content Creators found</Text>
//       ) : (
//         <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} w="full">
//           {currentCreators.map(creator => (
//             <Box
//               key={creator.id}
//               p={6}
//               borderWidth={1}
//               borderRadius="lg"
//               boxShadow="lg"
//               bg={useColorModeValue("gray.50", "gray.700")}
//               w="full"
//               _hover={{ transform: "scale(1.02)", transition: "0.3s ease-in-out" }}
//             >
//               <Flex justify="space-between" align="center">
//                 <Stack spacing={3}>
//                   <Text fontWeight="bold" fontSize="xl">{creator.name}</Text>
//                   <Text>Email: {creator.email}</Text>
//                   <Text>Description: {creator.description}</Text>
//                   <Text>Languages: {creator.languages}</Text>
//                   <Text>Education: {creator.education}</Text>
//                   <Text>Specialization: {creator.specialization}</Text>
//                   <HStack spacing={3}>
//                   <IconButton
//                     as={RouterLink}
//                     to={`/edit/${creator.id}`}
//                     aria-label="Edit"
//                     icon={<EditIcon />}
//                     colorScheme="blue"
//                     _hover={{ bg: "blue.600" }}
//                   />
//                   <IconButton
//                     onClick={() => handleDelete(creator.id)}
//                     aria-label="Delete"
//                     icon={<DeleteIcon />}
//                     colorScheme="red"
//                     _hover={{ bg: "red.600" }}
//                   />
//                 </HStack>
//                 </Stack>
                
//               </Flex>
//             </Box>
//           ))}
//         </Grid>
//       )}

//       <HStack mt={8} justify="center" spacing={4}>
//         <Button
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}
//           variant="outline"
//           colorScheme="blue"
//         >
//           Previous
//         </Button>
//         <Text>Page {currentPage} of {Math.ceil(filteredCreators.length / creatorsPerPage)}</Text>
//         <Button
//           onClick={() => paginate(currentPage + 1)}
//           disabled={currentPage === Math.ceil(filteredCreators.length / creatorsPerPage)}
//           variant="solid"
//           colorScheme="blue"
//         >
//           Next
//         </Button>
//       </HStack>
//     </VStack>
//   );
// };

// export default ContentCreatorList;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link as RouterLink } from 'react-router-dom';
// import { deleteCreator } from '../store/contentCreatorSlice';
// import {
//   Box, Button, Flex, Grid, Input, Select, Text, VStack, HStack, IconButton, FormControl, FormLabel,
//   useColorModeValue, Stack, useToast
// } from '@chakra-ui/react';
// import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

// const ContentCreatorList = () => {
//   const toast = useToast();
//   const dispatch = useDispatch();
//   const creators = useSelector(state => state.contentCreators.creators);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filters, setFilters] = useState({
//     language: '',
//     education: '',
//     specialization: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const creatorsPerPage = 5;

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this creator?")) {
//       dispatch(deleteCreator(id));
//       toast({
//         title: "Creator deleted.",
//         description: "The content creator has been successfully deleted.",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const filteredCreators = creators.filter(creator => {
//     const creatorLanguage = creator.languages ? creator.languages.toLowerCase() : '';
//     const creatorEducation = creator.education ? creator.education.toLowerCase() : '';
//     const creatorSpecialization = creator.specialization ? creator.specialization.toLowerCase() : '';
//     const lowerSearchQuery = searchQuery.toLowerCase();

//     return (
//       (!filters.language || creatorLanguage === filters.language.toLowerCase()) &&
//       (!filters.education || creatorEducation === filters.education.toLowerCase()) &&
//       (!filters.specialization || creatorSpecialization === filters.specialization.toLowerCase()) &&
//       (creator.name.toLowerCase().includes(lowerSearchQuery) ||
//         creator.email.toLowerCase().includes(lowerSearchQuery) ||
//         creator.description.toLowerCase().includes(lowerSearchQuery))
//     );
//   });

//   // Calculate pagination variables
//   const totalPages = Math.ceil(filteredCreators.length / creatorsPerPage);
//   const indexOfLastCreator = currentPage * creatorsPerPage;
//   const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
//   const currentCreators = filteredCreators.slice(indexOfFirstCreator, indexOfLastCreator);

//   const paginate = (pageNumber) => {
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <VStack spacing={6} w="full" p={5}>
//       <Input 
//         placeholder="Search creators..." 
//         value={searchQuery} 
//         onChange={(e) => setSearchQuery(e.target.value)} 
//         mb={4}
//         variant="filled"
//         size="lg"
//       />

//       <HStack spacing={4} mb={4}>
//         <FormControl>
//           <Select 
//             placeholder="Filter by Language"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, language: e.target.value })}
//           >
//             <option value="">All Languages</option>
//             <option value="english">English</option>
//             <option value="spanish">Spanish</option>
//             <option value="french">French</option>
//           </Select>
//         </FormControl>

//         <FormControl>
//           <Select 
//             placeholder="Filter by Education"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, education: e.target.value })}
//           >
//             <option value="">All Education</option>
//             <option value="bachelor">Bachelor's</option>
//             <option value="master">Master's</option>
//             <option value="phd">PhD</option>
//           </Select>
//         </FormControl>

//         <FormControl>
//           <Select 
//             placeholder="Filter by Specialization"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
//           >
//             <option value="">All Specializations</option>
//             <option value="marketing">Marketing</option>
//             <option value="design">Design</option>
//             <option value="development">Development</option>
//           </Select>
//         </FormControl>
//       </HStack>

//       {currentCreators.length === 0 ? (
//         <Text>No Content Creators found</Text>
//       ) : (
//         <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} w="full">
//           {currentCreators.map(creator => (
//             <Box
//               key={creator.id}
//               p={6}
//               borderWidth={1}
//               borderRadius="lg"
//               boxShadow="lg"
//               bg={useColorModeValue("gray.50", "gray.700")}
//               w="full"
//               _hover={{ transform: "scale(1.02)", transition: "0.3s ease-in-out" }}
//             >
//               <Flex justify="space-between" align="center">
//                 <Stack spacing={3}>
//                   <Text fontWeight="bold" fontSize="xl">{creator.name}</Text>
//                   <Text>Email: {creator.email}</Text>
//                   <Text>Description: {creator.description}</Text>
//                   <Text>Languages: {creator.languages}</Text>
//                   <Text>Education: {creator.education}</Text>
//                   <Text>Specialization: {creator.specialization}</Text>
//                   <HStack spacing={3}>
//                     <IconButton
//                       as={RouterLink}
//                       to={`/edit/${creator.id}`}
//                       aria-label="Edit"
//                       icon={<EditIcon />}
//                       colorScheme="blue"
//                       _hover={{ bg: "blue.600" }}
//                     />
//                     <IconButton
//                       onClick={() => handleDelete(creator.id)}
//                       aria-label="Delete"
//                       icon={<DeleteIcon />}
//                       colorScheme="red"
//                       _hover={{ bg: "red.600" }}
//                     />
//                   </HStack>
//                 </Stack>
//               </Flex>
//             </Box>
//           ))}
//         </Grid>
//       )}

//       {filteredCreators.length > 0 && (
//         <HStack mt={8} justify="center" spacing={4}>
//           <Button
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//             variant="outline"
//             colorScheme="blue"
//           >
//             Previous
//           </Button>
//           <Text>Page {currentPage} of {totalPages}</Text>
//           <Button
//             onClick={() => paginate(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             variant="solid"
//             colorScheme="blue"
//           >
//             Next
//           </Button>
//         </HStack>
//       )}
//     </VStack>
//   );
// };

// export default ContentCreatorList;

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link as RouterLink } from 'react-router-dom';
// import { deleteCreator } from '../store/contentCreatorSlice';
// import {
//   Box, Button, Flex, Grid, Input, Select, Text, VStack, HStack, IconButton, FormControl, FormLabel,
//   Stack, useToast
// } from '@chakra-ui/react';
// import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

// const ContentCreatorList = () => {
//   const toast = useToast();
//   const dispatch = useDispatch();
//   const creators = useSelector(state => state.contentCreators.creators);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filters, setFilters] = useState({
//     language: '',
//     education: '',
//     specialization: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const creatorsPerPage = 5;

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this creator?")) {
//       dispatch(deleteCreator(id));
//       toast({
//         title: "Creator deleted.",
//         description: "The content creator has been successfully deleted.",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const filteredCreators = creators.filter(creator => {
//     const creatorLanguage = creator.languages ? creator.languages.toLowerCase() : '';
//     const creatorEducation = creator.education ? creator.education.toLowerCase() : '';
//     const creatorSpecialization = creator.specialization ? creator.specialization.toLowerCase() : '';
//     const lowerSearchQuery = searchQuery.toLowerCase();

//     return (
//       (!filters.language || creatorLanguage === filters.language.toLowerCase()) &&
//       (!filters.education || creatorEducation === filters.education.toLowerCase()) &&
//       (!filters.specialization || creatorSpecialization === filters.specialization.toLowerCase()) &&
//       (creator.name.toLowerCase().includes(lowerSearchQuery) ||
//         creator.email.toLowerCase().includes(lowerSearchQuery) ||
//         creator.description.toLowerCase().includes(lowerSearchQuery))
//     );
//   });

//   // Calculate pagination variables
//   const totalPages = Math.ceil(filteredCreators.length / creatorsPerPage);
//   const indexOfLastCreator = currentPage * creatorsPerPage;
//   const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
//   const currentCreators = filteredCreators.slice(indexOfFirstCreator, indexOfLastCreator);

//   const paginate = (pageNumber) => {
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   // Define colors directly or use a theme approach
//   const bgColor = "#f5f5f5"; // Light background color
//   const hoverBgColor = "#e0e0e0"; // Background color on hover

//   return (
//     <VStack spacing={6} w="full" p={5}>
//       <Input 
//         placeholder="Search creators..." 
//         value={searchQuery} 
//         onChange={(e) => setSearchQuery(e.target.value)} 
//         mb={4}
//         variant="filled"
//         size="lg"
//       />

//       <HStack spacing={4} mb={4}>
//         <FormControl>
//           <Select 
//             placeholder="Filter by Language"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, language: e.target.value })}
//           >
//             <option value="">All Languages</option>
//             <option value="english">English</option>
//             <option value="spanish">Spanish</option>
//             <option value="french">French</option>
//           </Select>
//         </FormControl>

//         <FormControl>
//           <Select 
//             placeholder="Filter by Education"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, education: e.target.value })}
//           >
//             <option value="">All Education</option>
//             <option value="bachelor">Bachelor's</option>
//             <option value="master">Master's</option>
//             <option value="phd">PhD</option>
//           </Select>
//         </FormControl>

//         <FormControl>
//           <Select 
//             placeholder="Filter by Specialization"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
//           >
//             <option value="">All Specializations</option>
//             <option value="marketing">Marketing</option>
//             <option value="design">Design</option>
//             <option value="development">Development</option>
//           </Select>
//         </FormControl>
//       </HStack>

//       {currentCreators.length === 0 ? (
//         <Text>No Content Creators found</Text>
//       ) : (
//         <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} w="full">
//           {currentCreators.map(creator => (
//             <Box
//               key={creator.id}
//               p={6}
//               borderWidth={1}
//               borderRadius="lg"
//               boxShadow="lg"
//               bg={bgColor}
//               w="full"
//               _hover={{ bg: hoverBgColor, transform: "scale(1.02)", transition: "0.3s ease-in-out" }}
//             >
//               <Flex justify="space-between" align="center">
//                 <Stack spacing={3}>
//                   <Text fontWeight="bold" fontSize="xl">{creator.name}</Text>
//                   <Text>Email: {creator.email}</Text>
//                   <Text>Description: {creator.description}</Text>
//                   <Text>Languages: {creator.languages}</Text>
//                   <Text>Education: {creator.education}</Text>
//                   <Text>Specialization: {creator.specialization}</Text>
//                   <HStack spacing={3}>
//                     <IconButton
//                       as={RouterLink}
//                       to={`/edit/${creator.id}`}
//                       aria-label="Edit"
//                       icon={<EditIcon />}
//                       colorScheme="blue"
//                       _hover={{ bg: "blue.600" }}
//                     />
//                     <IconButton
//                       onClick={() => handleDelete(creator.id)}
//                       aria-label="Delete"
//                       icon={<DeleteIcon />}
//                       colorScheme="red"
//                       _hover={{ bg: "red.600" }}
//                     />
//                   </HStack>
//                 </Stack>
//               </Flex>
//             </Box>
//           ))}
//         </Grid>
//       )}

//       {filteredCreators.length > 0 && (
//         <HStack mt={8} justify="center" spacing={4}>
//           <Button
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//             variant="outline"
//             colorScheme="blue"
//           >
//             Previous
//           </Button>
//           <Text>Page {currentPage} of {totalPages}</Text>
//           <Button
//             onClick={() => paginate(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             variant="solid"
//             colorScheme="blue"
//           >
//             Next
//           </Button>
//         </HStack>
//       )}
//     </VStack>
//   );
// };

// export default ContentCreatorList;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link as RouterLink } from 'react-router-dom';
// import { deleteCreator } from '../store/contentCreatorSlice';
// import {
//   Box, Button, Flex, Grid, Input, Select, Text, VStack, HStack, IconButton, FormControl, Badge,
//   Stack, useToast, useColorMode, useColorModeValue
// } from '@chakra-ui/react';
// import { EditIcon, DeleteIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

// const ContentCreatorList = () => {
//   const toast = useToast();
//   const dispatch = useDispatch();
//   const creators = useSelector(state => state.contentCreators.creators);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filters, setFilters] = useState({
//     language: '',
//     education: '',
//     specialization: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const creatorsPerPage = 5;

//   const { colorMode, toggleColorMode } = useColorMode();
//   const bgColor = useColorModeValue("#f5f5f5", "#2D3748"); // Light or dark background
//   const hoverBgColor = useColorModeValue("#e0e0e0", "#4A5568"); // Light or dark hover

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this creator?")) {
//       dispatch(deleteCreator(id));
//       toast({
//         title: "Creator deleted.",
//         description: "The content creator has been successfully deleted.",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const filteredCreators = creators.filter(creator => {
//     const creatorLanguage = creator.languages ? creator.languages.toLowerCase() : '';
//     const creatorEducation = creator.education ? creator.education.toLowerCase() : '';
//     const creatorSpecialization = creator.specialization ? creator.specialization.toLowerCase() : '';
//     const lowerSearchQuery = searchQuery.toLowerCase();

//     return (
//       (!filters.language || creatorLanguage === filters.language.toLowerCase()) &&
//       (!filters.education || creatorEducation === filters.education.toLowerCase()) &&
//       (!filters.specialization || creatorSpecialization === filters.specialization.toLowerCase()) &&
//       (creator.name.toLowerCase().includes(lowerSearchQuery) ||
//         creator.email.toLowerCase().includes(lowerSearchQuery) ||
//         creator.description.toLowerCase().includes(lowerSearchQuery))
//     );
//   });

//   const totalPages = Math.ceil(filteredCreators.length / creatorsPerPage);
//   const indexOfLastCreator = currentPage * creatorsPerPage;
//   const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
//   const currentCreators = filteredCreators.slice(indexOfFirstCreator, indexOfLastCreator);

//   const paginate = (pageNumber) => {
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <VStack spacing={6} w="full" p={5}>
//       <Flex w="full" justify="space-between" align="center" mb={4}>
//         <Input 
//           placeholder="Search creators..." 
//           value={searchQuery} 
//           onChange={(e) => setSearchQuery(e.target.value)} 
//           variant="filled"
//           size="lg"
//           borderColor="gray.300"
//         />

//         <IconButton
//           aria-label="Toggle Theme"
//           icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//           onClick={toggleColorMode}
//           size="lg"
//           colorScheme={colorMode === 'light' ? "teal" : "purple"}
//         />
//       </Flex>

//       <HStack spacing={4} mb={4} wrap="wrap">
//         {filters.language && (
//           <Badge colorScheme="blue" variant="solid" onClick={() => setFilters({ ...filters, language: '' })}>
//             {`Language: ${filters.language}`}
//           </Badge>
//         )}
//         {filters.education && (
//           <Badge colorScheme="green" variant="solid" onClick={() => setFilters({ ...filters, education: '' })}>
//             {`Education: ${filters.education}`}
//           </Badge>
//         )}
//         {filters.specialization && (
//           <Badge colorScheme="purple" variant="solid" onClick={() => setFilters({ ...filters, specialization: '' })}>
//             {`Specialization: ${filters.specialization}`}
//           </Badge>
//         )}
//       </HStack>

//       <HStack spacing={4} mb={4}>
//         <FormControl>
//           <Select 
//             placeholder="Filter by Language"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, language: e.target.value })}
//             borderColor="gray.300"
//           >
//             <option value="">All Languages</option>
//             <option value="english">English</option>
//             <option value="spanish">Spanish</option>
//             <option value="french">French</option>
//           </Select>
//         </FormControl>

//         <FormControl>
//           <Select 
//             placeholder="Filter by Education"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, education: e.target.value })}
//             borderColor="gray.300"
//           >
//             <option value="">All Education</option>
//             <option value="bachelor">Bachelor's</option>
//             <option value="master">Master's</option>
//             <option value="phd">PhD</option>
//           </Select>
//         </FormControl>

//         <FormControl>
//           <Select 
//             placeholder="Filter by Specialization"
//             variant="outline"
//             onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
//             borderColor="gray.300"
//           >
//             <option value="">All Specializations</option>
//             <option value="marketing">Marketing</option>
//             <option value="design">Design</option>
//             <option value="development">Development</option>
//           </Select>
//         </FormControl>
//       </HStack>

//       {currentCreators.length === 0 ? (
//         <Text>No Content Creators found</Text>
//       ) : (
//         <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} w="full">
//           {currentCreators.map(creator => (
//             <Box
//               key={creator.id}
//               p={6}
//               borderWidth={1}
//               borderRadius="lg"
//               boxShadow="lg"
//               bg={bgColor}
//               w="full"
//               _hover={{ bg: hoverBgColor, transform: "scale(1.02)", transition: "0.3s ease-in-out" }}
//             >
//               <Flex justify="space-between" align="center">
//                 <Stack spacing={3}>
//                   <Text fontWeight="bold" fontSize="xl">{creator.name}</Text>
//                   <Text>Email: {creator.email}</Text>
//                   <Text>Description: {creator.description}</Text>
//                   <Text>Languages: {creator.languages}</Text>
//                   <Text>Education: {creator.education}</Text>
//                   <Text>Specialization: {creator.specialization}</Text>
//                   <HStack spacing={3}>
//                     <IconButton
//                       as={RouterLink}
//                       to={`/edit/${creator.id}`}
//                       aria-label="Edit"
//                       icon={<EditIcon />}
//                       colorScheme="blue"
//                       _hover={{ bg: "blue.600" }}
//                     />
//                     <IconButton
//                       onClick={() => handleDelete(creator.id)}
//                       aria-label="Delete"
//                       icon={<DeleteIcon />}
//                       colorScheme="red"
//                       _hover={{ bg: "red.600" }}
//                     />
//                   </HStack>
//                 </Stack>
//               </Flex>
//             </Box>
//           ))}
//         </Grid>
//       )}

//       {filteredCreators.length > 0 && (
//         <HStack mt={8} justify="center" spacing={4}>
//           <Button
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//             variant="outline"
//             colorScheme="blue"
//           >
//             Previous
//           </Button>
//           <Text>Page {currentPage} of {totalPages}</Text>
//           <Button
//             onClick={() => paginate(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             variant="solid"
//             colorScheme="blue"
//           >
//             Next
//           </Button>
//         </HStack>
//       )}
//     </VStack>
//   );
// };

// export default ContentCreatorList;
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
            // _hover={{ bg: hoverBgColor }}
            _hover={{ transform: "scale(1.02)", transition: "0.3s ease-in-out" }}
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
                      _hover={{ bg: "blue.600" }}
                    size="sm"
                  />
                </RouterLink>
                <IconButton 
                  aria-label="Delete Creator" 
                  icon={<DeleteIcon />} 
                  variant="outline"
                  colorScheme="red"
                      _hover={{ bg: "red.600" }}
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
