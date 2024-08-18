// // src/components/ProductCompanySearchPage.js
// import React from 'react';
// import { Box, Input, Select, SimpleGrid } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';
// import ContentCreatorProfileView from './ContentCreatorProfileView';

// const ProductCompanySearchPage = () => {
//   const creators = useSelector(state => state.contentCreators.creators);
//   const [searchTerm, setSearchTerm] = React.useState('');
//   const [filters, setFilters] = React.useState({
//     language: '',
//     education: '',
//     specialization: '',
//   });

//   const filteredCreators = creators.filter(creator =>
//     creator.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//     (filters.language ? creator.languages.includes(filters.language) : true) &&
//     (filters.education ? creator.education === filters.education : true) &&
//     (filters.specialization ? creator.specialization === filters.specialization : true)
//   );

//   return (
//     <Box p={5}>
//       <Input
//         placeholder="Search by name"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         mb={4}
//       />
//       <Select
//         placeholder="Filter by language"
//         value={filters.language}
//         onChange={(e) => setFilters({ ...filters, language: e.target.value })}
//         mb={4}
//       >
//         <option value="English">English</option>
//         <option value="Hindi">Hindi</option>
//         {/* Add more options as needed */}
//       </Select>
//       <Select
//         placeholder="Filter by education"
//         value={filters.education}
//         onChange={(e) => setFilters({ ...filters, education: e.target.value })}
//         mb={4}
//       >
//         <option value="Bachelor's">Bachelor's</option>
//         <option value="Master's">Master's</option>
//         {/* Add more options as needed */}
//       </Select>
//       <Select
//         placeholder="Filter by specialization"
//         value={filters.specialization}
//         onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
//         mb={4}
//       >
//         <option value="Video Production">Video Production</option>
//         <option value="Graphic Design">Graphic Design</option>
//         {/* Add more options as needed */}
//       </Select>

//       <SimpleGrid columns={[1, 2, 3]} spacing={5}>
//         {filteredCreators.map(creator => (
//           <ContentCreatorProfileView key={creator.id} creator={creator} />
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default ProductCompanySearchPage;
// src/components/ProductCompanySearchPage.js
import React from 'react';
import ContentCreatorList from './ContentCreatorList';
import { Box } from '@chakra-ui/react';

const ProductCompanySearchPage = () => {
  return (
    <Box p={5}>
      <ContentCreatorList />
    </Box>
  );
};

export default ProductCompanySearchPage;
