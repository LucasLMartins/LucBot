// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config()
const { TOKEN } = process.env

//Import commands
const fs = require('node:fs')
const path = require('node:path')
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()

for (const file of commandFiles){
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    if ("data" in command && "execute" in command ){
        client.commands.set(command.data.name, command)
    } else {
        console.log('n existe')
    }
}

// Create a new client instance


// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado como ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(TOKEN);


client.on(Events.InteractionCreate, async interaction => {

    if (interaction.isStringSelectMenu()){
        const selected = interaction.values[0]
        if (selected == "jogodavelha"){
            await interaction.reply("Projeto Jogo da Velha: https://github.com/LucasLMartins/Jogo-da-velha")
        } else if (selected == "cinebrasil"){
            await interaction.reply("Projeto Cinebrasil: https://github.com/LucasLMartins/Cinebrasil")
        } else if (selected == "unipetshop"){
            await interaction.reply("Projeto UniPetShop: https://github.com/LucasLMartins/UniPetShop")
        } else if (selected == "ubacademy"){
            await interaction.reply("Projeto UB Academy: https://github.com/LucasLMartins/UB-Academy")
        } else if (selected == "lucbot"){
            await interaction.reply("Projeto LucBot: https://github.com/LucasLMartins/LucBot")
        }
    }

    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    try {
        await command.execute(interaction)
    } 
    catch (error) {
        console.error(error)
        await interaction.reply("Houve um erro ao executar esse comando!")
    }
})