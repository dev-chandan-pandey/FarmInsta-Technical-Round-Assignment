# FarmInsta-Technical-Round-Assignment
# CreatoRRR - Content Creator Marketplace

## Overview

**CreatoRRR** is a dynamic marketplace connecting Content Creators with Product Companies. This web application allows Product Companies to browse, filter, and view profiles of various Content Creators. The platform also supports CRUD (Create, Read, Update, Delete) operations for managing Content Creators' profiles.

## Features

- **Content Creator List**: View a list of content creators with the ability to search and filter by language, education, and specialization.
- **Profile View**: View detailed profiles of content creators, including their description, languages spoken, education, specialization, and social media links.
- **Profile Creation & Editing**: Create new profiles or edit existing ones, with forms that validate required fields.
- **Dark Mode Toggle**: Switch between light and dark themes using Chakra UI's color mode.
- **Responsive Sidebar**: Navigate between different sections of the application using a responsive sidebar.
- **Pagination**: Efficiently navigate through large lists of content creators with pagination.

## Technologies Used

- **Frontend**: React.js, Chakra UI
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Icons**: React Icons (FiIcons)
- **CSS**: Chakra UI's built-in theming and responsive design

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14.x or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/CreatoRRR.git
    cd CreatoRRR
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Viewing Creators**: The homepage lists all content creators. Use the search bar and filters to find specific creators.
- **Creating/Editing a Profile**: Navigate to the "Create Creator" page from the sidebar or click on an existing profile to edit it.
- **Deleting a Profile**: Use the delete button in the creator list to remove a profile.

## Folder Structure
```
├── public
│ ├── index.html
│ └── ...
├── src
│ ├── components
│ │ ├── ContentCreatorList.js
│ │ ├── ContentCreatorProfileEdit.js
│ │ ├── ContentCreatorProfileView.js
│ │ └── Sidebar.js
│ ├── store
│ │ └── contentCreatorSlice.js
│ ├── theme.js
│ ├── App.js
│ └── index.js
├── .gitignore
├── package.json
└── README.md

```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- **Chakra UI** for the intuitive and accessible UI components.
- **React Icons** for the beautiful iconography.



