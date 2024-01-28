YelpCamp is a full-stack website project that enables users to explore, create, and review campgrounds. To review or create a campground, users must have an account. This project is part of The Web Developer Bootcamp 2024 by Colt Steele.

The website was developed using Node.js, Express, MongoDB, and Bootstrap. Authentication was handled using Passport.js.

- Users can create, edit, and remove campgrounds
- Users can rate, review campgrounds, and edit or remove their review

## Run it locally

### Prerequisites

- [Node.js](https://nodejs.org/) for running server-side JavaScript
- [MongoDB](https://www.mongodb.com/try/download/community) (Community Edition preferably) to store data
- [Cloudinary account](https://cloudinary.com/users/register/free)

```bash
git clone https://github.com/barorod/YelpCamp.git
cd YelpCamp
npm install
```

### Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - The database for modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [ejs](https://ejs.co/) - Embedded JavaScript templating

Create a .env file in the root of the project and add the following, replacing the value inside the parenthesis and removing the parenthesis:

```bash
CLOUDINARY_CLOUD_NAME='YOUR_CLOUDINARY_CLOUDNAME'
CLOUDINARY_KEY='YOUR_CLOUDINARY_KEY'
CLOUDINARY_SECRET='YOUR_CLOUDINARY_SECRET'
```

Run the server using:

```bash
npm start
```

Optional: If you want to populate campgrounds with test seeds, go to the root directory in the terminal and run `npm seeds` before starting the server.

Then go to [localhost:3000](http://localhost:3000)
