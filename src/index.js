const express = require('express');
const sequelize = require('./config/database');
const produtoRoutes = require('./routes/produtoRoutes');
const distribuidoraRoutes = require('./routes/distribuidoraRoutes');
const editoraRoutes = require('./routes/editoraRoutes');

const PORT = process.env.PORT || 3333;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Connected :D');
});

app.use('/produtos', produtoRoutes);
app.use('/distribuidoras', distribuidoraRoutes);
app.use('/editoras', editoraRoutes);

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
