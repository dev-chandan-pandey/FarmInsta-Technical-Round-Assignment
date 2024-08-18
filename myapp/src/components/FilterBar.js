import { Select, Stack, Box } from '@chakra-ui/react';

const FilterBar = ({ filters, setFilters }) => (
  <Stack direction="row" spacing={4} mb={4}>
    <Box>
      <Select
        placeholder="Select Language"
        value={filters.language}
        onChange={(e) => setFilters({ ...filters, language: e.target.value })}
      >
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        {/* Add more language options */}
      </Select>
    </Box>
    <Box>
      <Select
        placeholder="Select Education"
        value={filters.education}
        onChange={(e) => setFilters({ ...filters, education: e.target.value })}
      >
        <option value="Bachelor's">Bachelor's</option>
        <option value="Master's">Master's</option>
        {/* Add more education options */}
      </Select>
    </Box>
    <Box>
      <Select
        placeholder="Select Specialization"
        value={filters.specialization}
        onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
      >
        <option value="Web Development">Web Development</option>
        <option value="Graphic Design">Graphic Design</option>
        {/* Add more specialization options */}
      </Select>
    </Box>
  </Stack>
);
