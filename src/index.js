const express = require('express');
const sequelize = require('./config/database');
const PORT = process.env.PORT || 3333;

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Connected :D');
});

(async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync({ alter: true });
      console.log('Connection has been established successfully.');
      app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
})();
