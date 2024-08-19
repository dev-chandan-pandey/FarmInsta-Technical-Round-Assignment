// // import React, { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { addCreator, updateCreator } from '../store/contentCreatorSlice';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import { Button, Input, Textarea, VStack, FormControl, FormLabel } from '@chakra-ui/react';

// // const ContentCreatorProfileEdit = () => {
// //   const { id } = useParams();
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const existingCreator = useSelector(state =>
// //     state.contentCreators.creators.find(creator => creator.id === id)
// //   );

// //   const [creatorData, setCreatorData] = useState(
// //     existingCreator || {
// //       id: Date.now().toString(),
// //       name: '',
// //       email: '',
// //       description: '',
// //       languages: '',
// //       education: '',
// //       specialization: '',
// //       socialMediaLinks: '',
// //     }
// //   );

// //   const handleChange = (e) => {
// //     setCreatorData({
// //       ...creatorData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = () => {
// //     if (existingCreator) {
// //       dispatch(updateCreator({ id, updatedData: creatorData }));
// //     } else {
// //       dispatch(addCreator(creatorData));
// //     }
// //     navigate('/');
// //   };

// //   return (
// //     <VStack spacing={4} w="full" p={5}>
// //       <FormControl id="name">
// //         <FormLabel>Name</FormLabel>
// //         <Input name="name" value={creatorData.name} onChange={handleChange} />
// //       </FormControl>
// //       <FormControl id="email">
// //         <FormLabel>Email</FormLabel>
// //         <Input name="email" value={creatorData.email} onChange={handleChange} />
// //       </FormControl>
// //       <FormControl id="description">
// //         <FormLabel>Description</FormLabel>
// //         <Textarea name="description" value={creatorData.description} onChange={handleChange} />
// //       </FormControl>
// //       <FormControl id="languages">
// //         <FormLabel>Languages</FormLabel>
// //         <Input name="languages" value={creatorData.languages} onChange={handleChange} />
// //       </FormControl>
// //       <FormControl id="education">
// //         <FormLabel>Education</FormLabel>
// //         <Input name="education" value={creatorData.education} onChange={handleChange} />
// //       </FormControl>
// //       <FormControl id="specialization">
// //         <FormLabel>Specialization</FormLabel>
// //         <Input name="specialization" value={creatorData.specialization} onChange={handleChange} />
// //       </FormControl>
// //       <FormControl id="socialMediaLinks">
// //         <FormLabel>Social Media Links</FormLabel>
// //         <Input name="socialMediaLinks" value={creatorData.socialMediaLinks} onChange={handleChange} />
// //       </FormControl>
// //       <Button colorScheme="teal" onClick={handleSubmit}>
// //         {existingCreator ? 'Update Profile' : 'Create Profile'}
// //       </Button>
// //     </VStack>
// //   );
// // };

// // export default ContentCreatorProfileEdit;
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addCreator, updateCreator } from '../store/contentCreatorSlice';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Button, Input, Textarea, VStack, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

// const ContentCreatorProfileEdit = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const existingCreator = useSelector(state =>
//     state.contentCreators.creators.find(creator => creator.id === id)
//   );

//   const [creatorData, setCreatorData] = useState({
//     id: Date.now().toString(),
//     name: '',
//     email: '',
//     description: '',
//     languages: '',
//     education: '',
//     specialization: '',
//     socialMediaLinks: '',
//   });

//   useEffect(() => {
//     if (existingCreator) {
//       setCreatorData(existingCreator);
//     }
//   }, [existingCreator]);

//   const handleChange = (e) => {
//     setCreatorData({
//       ...creatorData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     if (!creatorData.name || !creatorData.email) {
//       return; // Simple validation
//     }
//     if (existingCreator) {
//       dispatch(updateCreator({ id, updatedData: creatorData }));
//     } else {
//       dispatch(addCreator(creatorData));
//     }
//     navigate('/');
//   };

//   return (
//     <VStack spacing={4} w="full" p={5}>
//       <FormControl isRequired id="name">
//         <FormLabel>Name</FormLabel>
//         <Input name="name" value={creatorData.name} onChange={handleChange} />
//       </FormControl>
//       <FormControl isRequired id="email">
//         <FormLabel>Email</FormLabel>
//         <Input name="email" value={creatorData.email} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="description">
//         <FormLabel>Description</FormLabel>
//         <Textarea name="description" value={creatorData.description} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="languages">
//         <FormLabel>Languages</FormLabel>
//         <Input name="languages" value={creatorData.languages} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="education">
//         <FormLabel>Education</FormLabel>
//         <Input name="education" value={creatorData.education} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="specialization">
//         <FormLabel>Specialization</FormLabel>
//         <Input name="specialization" value={creatorData.specialization} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="socialMediaLinks">
//         <FormLabel>Social Media Links</FormLabel>
//         <Input name="socialMediaLinks" value={creatorData.socialMediaLinks} onChange={handleChange} />
//       </FormControl>
//       <Button colorScheme="teal" onClick={handleSubmit}>
//         {existingCreator ? 'Update Profile' : 'Create Profile'}
//       </Button>
//     </VStack>
//   );
// };

// export default ContentCreatorProfileEdit;
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addCreator, updateCreator } from '../store/contentCreatorSlice';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Button, Input, Textarea, VStack, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

// const ContentCreatorProfileEdit = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const existingCreator = useSelector(state =>
//     state.contentCreators.creators.find(creator => creator.id === id)
//   );

//   const [creatorData, setCreatorData] = useState({
//     id: Date.now().toString(),
//     name: '',
//     email: '',
//     description: '',
//     languages: '',
//     education: '',
//     specialization: '',
//     socialMediaLinks: '',
//   });

//   useEffect(() => {
//     if (existingCreator) {
//       setCreatorData(existingCreator);
//     }
//   }, [existingCreator]);

//   const handleChange = (e) => {
//     setCreatorData({
//       ...creatorData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     if (!creatorData.name || !creatorData.email) {
//       return; // Simple validation
//     }
//     if (existingCreator) {
//       dispatch(updateCreator({ id, updatedData: creatorData }));
//     } else {
//       dispatch(addCreator(creatorData));
//     }
//     navigate('/');
//   };

//   return (
//     <VStack spacing={4} w="full" p={5}>
//       <FormControl isRequired id="name">
//         <FormLabel>Name</FormLabel>
//         <Input name="name" value={creatorData.name} onChange={handleChange} />
//       </FormControl>
//       <FormControl isRequired id="email">
//         <FormLabel>Email</FormLabel>
//         <Input name="email" value={creatorData.email} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="description">
//         <FormLabel>Description</FormLabel>
//         <Textarea name="description" value={creatorData.description} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="languages">
//         <FormLabel>Languages</FormLabel>
//         <Input name="languages" value={creatorData.languages} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="education">
//         <FormLabel>Education</FormLabel>
//         <Input name="education" value={creatorData.education} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="specialization">
//         <FormLabel>Specialization</FormLabel>
//         <Input name="specialization" value={creatorData.specialization} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="socialMediaLinks">
//         <FormLabel>Social Media Links</FormLabel>
//         <Input name="socialMediaLinks" value={creatorData.socialMediaLinks} onChange={handleChange} />
//       </FormControl>
//       <Button colorScheme="primary" onClick={handleSubmit}>
//         {existingCreator ? 'Update Profile' : 'Create Profile'}
//       </Button>
//     </VStack>
//   );
// };

// export default ContentCreatorProfileEdit;
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addCreator, updateCreator } from '../store/contentCreatorSlice';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Button, Input, Textarea, VStack, FormControl, FormLabel, Select } from '@chakra-ui/react';

// const ContentCreatorProfileEdit = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const existingCreator = useSelector(state =>
//     state.contentCreators.creators.find(creator => creator.id === id)
//   );

//   const [creatorData, setCreatorData] = useState({
//     id: Date.now().toString(),
//     name: '',
//     email: '',
//     description: '',
//     languages: '',
//     education: '',
//     specialization: '',
//     socialMediaLinks: '',
//   });

//   useEffect(() => {
//     if (existingCreator) {
//       setCreatorData(existingCreator);
//     }
//   }, [existingCreator]);

//   const handleChange = (e) => {
//     setCreatorData({
//       ...creatorData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     if (!creatorData.name || !creatorData.email) {
//       return; // Simple validation
//     }
//     if (existingCreator) {
//       dispatch(updateCreator({ id, updatedData: creatorData }));
//     } else {
//       dispatch(addCreator(creatorData));
//     }
//     navigate('/');
//   };

//   return (
//     <VStack spacing={4} w="full" p={5}>
//       <FormControl isRequired id="name">
//         <FormLabel>Name</FormLabel>
//         <Input name="name" value={creatorData.name} onChange={handleChange} />
//       </FormControl>
//       <FormControl isRequired id="email">
//         <FormLabel>Email</FormLabel>
//         <Input name="email" value={creatorData.email} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="description">
//         <FormLabel>Description</FormLabel>
//         <Textarea name="description" value={creatorData.description} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="languages">
//         <FormLabel>Languages</FormLabel>
//         <Select name="languages" value={creatorData.languages} onChange={handleChange}>
//           <option value="English">English</option>
//           <option value="Spanish">Spanish</option>
//           <option value="French">French</option>
//           {/* Add more languages as needed */}
//         </Select>
//       </FormControl>
//       <FormControl id="education">
//         <FormLabel>Education</FormLabel>
//         <Select name="education" value={creatorData.education} onChange={handleChange}>
//           <option value="Bachelor">Bachelor's</option>
//           <option value="Master">Master's</option>
//           <option value="PhD">PhD</option>
//           {/* Add more education options as needed */}
//         </Select>
//       </FormControl>
//       <FormControl id="specialization">
//         <FormLabel>Specialization</FormLabel>
//         <Select name="specialization" value={creatorData.specialization} onChange={handleChange}>
//           <option value="Marketing">Marketing</option>
//           <option value="Design">Design</option>
//           <option value="Development">Development</option>
//           {/* Add more specializations as needed */}
//         </Select>
//       </FormControl>
//       <FormControl id="socialMediaLinks">
//         <FormLabel>Social Media Links</FormLabel>
//         <Input name="socialMediaLinks" value={creatorData.socialMediaLinks} onChange={handleChange} />
//       </FormControl>
//       <Button colorScheme="primary" onClick={handleSubmit}>
//         {existingCreator ? 'Update Profile' : 'Create Profile'}
//       </Button>
//     </VStack>
//   );
// };

// export default ContentCreatorProfileEdit;



// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addCreator, updateCreator } from '../store/contentCreatorSlice';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Button, Input, Textarea, VStack, FormControl, FormLabel, Select } from '@chakra-ui/react';

// const ContentCreatorProfileEdit = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const existingCreator = useSelector(state =>
//     state.contentCreators.creators.find(creator => creator.id === id)
//   );

//   const [creatorData, setCreatorData] = useState({
//     id: id || Date.now().toString(),  // Ensure a new ID is generated if creating a new profile
//     name: '',
//     email: '',
//     description: '',
//     languages: '',
//     education: '',
//     specialization: '',
//     socialMediaLinks: '',
//   });

//   useEffect(() => {
//     if (existingCreator) {
//       setCreatorData(existingCreator);
//     }
//   }, [existingCreator]);

//   const handleChange = (e) => {
//     setCreatorData({
//       ...creatorData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     if (!creatorData.name || !creatorData.email) {
//       alert("Name and Email are required fields.");  // Basic validation
//       return;
//     }
//     if (existingCreator) {
//       dispatch(updateCreator({ id, updatedData: creatorData }));
//     } else {
//       dispatch(addCreator(creatorData));
//     }
//     navigate('/');
//   };

//   return (
//     <VStack spacing={4} w="full" p={5}>
//       <FormControl isRequired id="name">
//         <FormLabel>Name</FormLabel>
//         <Input name="name" value={creatorData.name} onChange={handleChange} />
//       </FormControl>
//       <FormControl isRequired id="email">
//         <FormLabel>Email</FormLabel>
//         <Input name="email" value={creatorData.email} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="description">
//         <FormLabel>Description</FormLabel>
//         <Textarea name="description" value={creatorData.description} onChange={handleChange} />
//       </FormControl>
//       <FormControl id="languages">
//         <FormLabel>Languages</FormLabel>
//         <Select name="languages" value={creatorData.languages} onChange={handleChange}>
//           <option value="">Select Language</option>
//           <option value="English">English</option>
//           <option value="Spanish">Spanish</option>
//           <option value="French">French</option>
//           {/* Add more languages as needed */}
//         </Select>
//       </FormControl>
//       <FormControl id="education">
//         <FormLabel>Education</FormLabel>
//         <Select name="education" value={creatorData.education} onChange={handleChange}>
//           <option value="">Select Education</option>
//           <option value="Bachelor">Bachelor's</option>
//           <option value="Master">Master's</option>
//           <option value="PhD">PhD</option>
//           {/* Add more education options as needed */}
//         </Select>
//       </FormControl>
//       <FormControl id="specialization">
//         <FormLabel>Specialization</FormLabel>
//         <Select name="specialization" value={creatorData.specialization} onChange={handleChange}>
//           <option value="">Select Specialization</option>
//           <option value="Marketing">Marketing</option>
//           <option value="Design">Design</option>
//           <option value="Development">Development</option>
//           {/* Add more specializations as needed */}
//         </Select>
//       </FormControl>
//       <FormControl id="socialMediaLinks">
//         <FormLabel>Social Media Links</FormLabel>
//         <Input name="socialMediaLinks" value={creatorData.socialMediaLinks} onChange={handleChange} />
//       </FormControl>
//       <Button colorScheme="primary" onClick={handleSubmit}>
//         {existingCreator ? 'Update Profile' : 'Create Profile'}
//       </Button>
//     </VStack>
//   );
// };

// export default ContentCreatorProfileEdit;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCreator, updateCreator } from '../store/contentCreatorSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Input, Textarea, VStack, FormControl, FormLabel, Select, useBreakpointValue } from '@chakra-ui/react';

const ContentCreatorProfileEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existingCreator = useSelector(state =>
    state.contentCreators.creators.find(creator => creator.id === id)
  );

  const [creatorData, setCreatorData] = useState({
    id: id || Date.now().toString(),
    name: '',
    email: '',
    description: '',
    languages: '',
    education: '',
    specialization: '',
    socialMediaLinks: '',
  });

  useEffect(() => {
    if (existingCreator) {
      setCreatorData(existingCreator);
    }
  }, [existingCreator]);

  const handleChange = (e) => {
    setCreatorData({
      ...creatorData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!creatorData.name || !creatorData.email) {
      alert("Name and Email are required fields."); // Basic validation
      return;
    }
    if (existingCreator) {
      dispatch(updateCreator({ id, updatedData: creatorData }));
    } else {
      dispatch(addCreator(creatorData));
    }
    navigate('/');
  };

  return (
    <VStack
      mt={{ base: "60px", md:-5 }}
      spacing={2}
      w={{ base: 'full', md: '80%', lg: '60%' }}
      p={3}
      mx="auto"
    >
      <FormControl isRequired id="name">
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          value={creatorData.name}
          onChange={handleChange}
          w="full"
        />
      </FormControl>
      <FormControl isRequired id="email">
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          value={creatorData.email}
          onChange={handleChange}
          w="full"
        />
      </FormControl>
      <FormControl id="description">
        <FormLabel>Description</FormLabel>
        <Textarea
          name="description"
          value={creatorData.description}
          onChange={handleChange}
          w="full"
        />
      </FormControl>
      <FormControl id="languages">
        <FormLabel>Languages</FormLabel>
        <Select
          name="languages"
          value={creatorData.languages}
          onChange={handleChange}
          w="full"
        >
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          {/* Add more languages as needed */}
        </Select>
      </FormControl>
      <FormControl id="education">
        <FormLabel>Education</FormLabel>
        <Select
          name="education"
          value={creatorData.education}
          onChange={handleChange}
          w="full"
        >
          <option value="">Select Education</option>
          <option value="Bachelor">Bachelor's</option>
          <option value="Master">Master's</option>
          <option value="PhD">PhD</option>
          {/* Add more education options as needed */}
        </Select>
      </FormControl>
      <FormControl id="specialization">
        <FormLabel>Specialization</FormLabel>
        <Select
          name="specialization"
          value={creatorData.specialization}
          onChange={handleChange}
          w="full"
        >
          <option value="">Select Specialization</option>
          <option value="Marketing">Marketing</option>
          <option value="Design">Design</option>
          <option value="Development">Development</option>
          {/* Add more specializations as needed */}
        </Select>
      </FormControl>
      <FormControl id="socialMediaLinks">
        <FormLabel>Social Media Links</FormLabel>
        <Input
          name="socialMediaLinks"
          value={creatorData.socialMediaLinks}
          onChange={handleChange}
          w="full"
        />
      </FormControl>
      <Button
        colorScheme="teal"
        onClick={handleSubmit}
        w="full"
      >
        {existingCreator ? 'Update Profile' : 'Create Profile'}
      </Button>
    </VStack>
  );
};

export default ContentCreatorProfileEdit;
