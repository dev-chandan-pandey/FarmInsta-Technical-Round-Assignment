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
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { deleteCreator } from '../store/contentCreatorSlice';
import {
  Box, Button, Flex, Grid, Input, Select, Text, VStack, HStack, IconButton, FormControl, FormLabel,
  useColorModeValue, Stack, useToast
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

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

  // Calculate pagination variables
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
    <VStack spacing={6} w="full" p={5}>
      <Input 
        placeholder="Search creators..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        mb={4}
        variant="filled"
        size="lg"
      />

      <HStack spacing={4} mb={4}>
        <FormControl>
          <Select 
            placeholder="Filter by Language"
            variant="outline"
            onChange={(e) => setFilters({ ...filters, language: e.target.value })}
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
          >
            <option value="">All Education</option>
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
          >
            <option value="">All Specializations</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
            <option value="development">Development</option>
          </Select>
        </FormControl>
      </HStack>

      {currentCreators.length === 0 ? (
        <Text>No Content Creators found</Text>
      ) : (
        <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} w="full">
          {currentCreators.map(creator => (
            <Box
              key={creator.id}
              p={6}
              borderWidth={1}
              borderRadius="lg"
              boxShadow="lg"
              bg={useColorModeValue("gray.50", "gray.700")}
              w="full"
              _hover={{ transform: "scale(1.02)", transition: "0.3s ease-in-out" }}
            >
              <Flex justify="space-between" align="center">
                <Stack spacing={3}>
                  <Text fontWeight="bold" fontSize="xl">{creator.name}</Text>
                  <Text>Email: {creator.email}</Text>
                  <Text>Description: {creator.description}</Text>
                  <Text>Languages: {creator.languages}</Text>
                  <Text>Education: {creator.education}</Text>
                  <Text>Specialization: {creator.specialization}</Text>
                  <HStack spacing={3}>
                    <IconButton
                      as={RouterLink}
                      to={`/edit/${creator.id}`}
                      aria-label="Edit"
                      icon={<EditIcon />}
                      colorScheme="blue"
                      _hover={{ bg: "blue.600" }}
                    />
                    <IconButton
                      onClick={() => handleDelete(creator.id)}
                      aria-label="Delete"
                      icon={<DeleteIcon />}
                      colorScheme="red"
                      _hover={{ bg: "red.600" }}
                    />
                  </HStack>
                </Stack>
              </Flex>
            </Box>
          ))}
        </Grid>
      )}

      {filteredCreators.length > 0 && (
        <HStack mt={8} justify="center" spacing={4}>
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            variant="outline"
            colorScheme="blue"
          >
            Previous
          </Button>
          <Text>Page {currentPage} of {totalPages}</Text>
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="solid"
            colorScheme="blue"
          >
            Next
          </Button>
        </HStack>
      )}
    </VStack>
  );
};

export default ContentCreatorList;
