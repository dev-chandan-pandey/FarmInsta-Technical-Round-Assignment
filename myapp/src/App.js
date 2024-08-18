// // import React from 'react';
// // import { ChakraProvider, Box } from '@chakra-ui/react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import ContentCreatorList from './components/ContentCreatorList';
// // import ContentCreatorProfileEdit from './components/ContentCreatorProfileEdit';
// // import ContentCreatorProfileView from './components/ContentCreatorProfileView';
// // import Sidebar from './components/Sidebar';

// // function App() {
// //   return (
// //     <ChakraProvider>
// //       <Router>
// //         <Box display="flex">
// //           <Sidebar />
// //           <Box ml="250px" w="full" p={5}>
// //             <Routes>
// //               <Route path="/" element={<ContentCreatorList />} />
// //               <Route path="/create" element={<ContentCreatorProfileEdit />} />
// //               <Route path="/edit/:id" element={<ContentCreatorProfileEdit />} />
// //               <Route path="/view/:id" element={<ContentCreatorProfileView />} />
// //             </Routes>
// //           </Box>
// //         </Box>
// //       </Router>
// //     </ChakraProvider>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { ChakraProvider, Box } from '@chakra-ui/react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ContentCreatorList from './components/ContentCreatorList';
// import ContentCreatorProfileEdit from './components/ContentCreatorProfileEdit';
// import ContentCreatorProfileView from './components/ContentCreatorProfileView';
// import Sidebar from './components/Sidebar';

// function App() {
//   return (
//     <ChakraProvider>
//       <Router>
//         <Box display="flex">
//           <Sidebar />
//           <Box ml="250px" w="full" p={5}>
//             <Routes>
//               <Route path="/" element={<ContentCreatorList />} />
//               <Route path="/create" element={<ContentCreatorProfileEdit />} />
//               <Route path="/edit/:id" element={<ContentCreatorProfileEdit />} />
//               <Route path="/view/:id" element={<ContentCreatorProfileView />} />
//             </Routes>
//           </Box>
//         </Box>
//       </Router>
//     </ChakraProvider>
//   );
// }

// export default App;
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentCreatorList from './components/ContentCreatorList';
import ContentCreatorProfileEdit from './components/ContentCreatorProfileEdit';
import ContentCreatorProfileView from './components/ContentCreatorProfileView';
import Sidebar from './components/Sidebar';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box display="flex">
          <Sidebar />
          <Box ml="250px" w="full" p={5}>
            <Routes>
              <Route path="/" element={<ContentCreatorList />} />
              <Route path="/create" element={<ContentCreatorProfileEdit />} />
              <Route path="/edit/:id" element={<ContentCreatorProfileEdit />} />
              <Route path="/view/:id" element={<ContentCreatorProfileView />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
