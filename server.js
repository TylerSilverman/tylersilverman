require('dotenv').config();

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/${process.env.MONGODB_DATABASE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

const requiresAuth = passport.authenticate('jwt', { session: false });

app.use('/api/auth', authRoutes);

app.use('/api/users', requiresAuth, usersRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
