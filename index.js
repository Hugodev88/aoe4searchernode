const express = require('express');
const { create } = require('express-handlebars'); // Use create para instanciar Handlebars
const app = express();
const playerRoutes = require('./routes/playerRoutes');
const PORT = process.env.PORT || 3000;

// Criar uma instância de handlebars com o método `create`
const hbs = create({
  helpers: {
    uppercase: function (str) {
      return str ? str.toUpperCase() : ''; // Retorna uma string vazia se str for null
    }
  }
  
});

app.engine('handlebars', hbs.engine); // Usar a engine da instância criada
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', playerRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
