const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Selecione um projeto")
            .addOptions({
                label: "Jogo da Velha",
                description: "Projeto de jogo da velha",
                value: "jogodavelha"
                },
                {
                    label: "Cinebrasil",
                    description: "Projeto de cinema",
                    value: "cinebrasil"
                },
                {
                    label: "UniPetShop",
                    description: "Projeto de petshop",
                    value: "unipetshop"
                },
                {
                    label: "UB Academy",
                    description: "Projeto de site de cursos online",
                    value: "ubacademy"
                },
                {
                    label: "LucBot",
                    description: "Projeto de bot do discord",
                    value: "lucbot"
                },
                {
                    label: "Airbnb rent predict",
                    description: "Projeto de web scraping e machine learning",
                    value: "airbnb"
                }
            )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("projetos")
        .setDescription("Acesse meus projetos no GitHub"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione um dos projetos abaixo:", components: [row]})
    }
}