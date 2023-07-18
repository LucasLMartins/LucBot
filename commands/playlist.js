const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Playlist braba"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/7lBGlh4Fz08L8BpxOOgpSt?si=66e3a21944584ac8")
    }
}
