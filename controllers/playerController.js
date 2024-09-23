const axios = require('axios');

module.exports = class {
  // Lista todos os jogadores

    static searchPlayer(req, res) {
        res.render('players/home')
    }


    static async showPlayers (req, res) {
        const inputValue = req.query.name

        try {
            const response = await axios.get(`https://aoe4world.com/api/v0/players/search?query=${inputValue}`); 
            const players = response.data.players;

            // console.log(players)
            res.render('players/players', { players });

        } catch (error) {
            console.error('Erro ao buscar jogadores:', error.message);
            res.status(500).send('Erro ao buscar jogadores');
        }
    }

    static async showPlayer (req, res){
        const playerId = req.params.id
        const response = await axios.get(`https://aoe4world.com/api/v0/players/${playerId}`);
        const player = response.data;

        // console.log(player)
        res.render('players/player', {player});
    }
};
