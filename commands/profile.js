const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("perfil")
        .setDescription("Perfil do github"),

    async execute(interaction) {
        await interaction.reply("https://github.com/LucasLMartins")
    }
}
