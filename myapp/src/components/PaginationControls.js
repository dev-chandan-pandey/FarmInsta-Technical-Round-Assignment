import { Button, HStack } from '@chakra-ui/react';

const PaginationControls = ({ currentPage, totalPages, paginate }) => (
  <HStack spacing={4} justifyContent="center" mt={4}>
    <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
      Previous
    </Button>
    <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
      Next
    </Button>
  </HStack>
);
