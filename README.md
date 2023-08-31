# iNotebook - A Note-Taking Application

iNotebook is a web-based note-taking application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It provides users with a convenient platform to create, edit, and manage their notes seamlessly. Whether you're a student, professional, or just someone who likes to jot down ideas, iNotebook offers an intuitive and user-friendly interface for all your note-taking needs.

![iNotebook Screenshot](/public/toDo.png)

## Features

- **User Authentication**: Securely sign up, log in, and manage your account. Your notes are tied to your account, ensuring data privacy.

- **Create and Edit Notes**: Compose new notes or edit existing ones using a rich text editor. Customize fonts, styles, and layouts to your preference.

- **Organize with Categories**: Categorize your notes by assigning them to different categories or tags. Easily filter and find notes within specific categories.

- **Real-time Updates**: Changes made to your notes are instantly reflected, providing a seamless and responsive note-taking experience.

- **Cross-Device Syncing**: Access your notes from any device with an internet connection. Your notes are synchronized in real-time across all your devices.

- **Responsive Design**: iNotebook is designed to work smoothly on a variety of devices, including desktops, tablets, and smartphones.

## Installation

1. Clone this repository to your local machine.

   ```
   git clone https://github.com/sadanmian/inotebook.git
   ```

2. Navigate to the server directory and install server dependencies.

   ```
   cd inotebook/server
   npm install
   ```

3. Create a `.env` file in the server directory and configure environment variables:

   ```
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   SECRET_KEY=your-secret-key
   ```

4. Navigate to the client directory and install client dependencies.

   ```
   cd ../client
   npm install
   ```

5. In the client directory, update the `config.js` file with the server URL.

   ```javascript
   export const SERVER_URL = "http://localhost:5000"; // Update with your server URL
   ```

6. Run the server and client concurrently from the root directory.

   ```
   npm run dev
   ```

7. Open your web browser and navigate to `http://localhost:3000` to use iNotebook.

## Technologies Used

- **Frontend**: React, Redux, HTML5, CSS3
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Responsive Styling**: Bootstrap

## Contribution

Contributions to iNotebook are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
