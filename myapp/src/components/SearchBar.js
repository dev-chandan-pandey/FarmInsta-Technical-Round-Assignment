import { Input } from '@chakra-ui/react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <Input
    placeholder="Search Content Creators"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    mb={4}
  />
);
