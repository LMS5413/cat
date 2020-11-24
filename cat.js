const Discord = require('discord.js')
const cooldown = new Set()
const segundosCooldown = 5;
exports.run = (client, message) => {

    if(message.channel.id != '768466399798231070') return message.reply("Esse comando só pode ser executado no chat <#768466399798231070>").then(msg => msg.delete({timeout: 7000}))
    if(cooldown.has(message.author.id)){
        return message.channel.send(`Espere ${segundosCooldown} segundos para usar o comando novamente.`)

    } cooldown.add(message.author.id);

    setTimeout(()=> {
        cooldown.delete(message.author.id)

    },segundosCooldown * 1000)
    let gatos = [
        'https://cdn.discordapp.com/attachments/755149408550781121/768478121405841428/images.jpg',
        'https://cdn.discordapp.com/attachments/755149408550781121/768478123809046548/transferir_1.jpg',
        'https://cdn.discordapp.com/attachments/755149408550781121/768478126295744532/transferir_2.jpg',
        'https://cdn.discordapp.com/attachments/755149408550781121/768478129244078140/transferir.jpg',
        'https://cdn.discordapp.com/attachments/755149408550781121/768478135875403786/images_1.jpg'
    ]
    const random = gatos[Math.floor(Math.random() * gatos.length)];

    const embed = new Discord.MessageEmbed()
        .setColor("#00FF6C")
        .setTitle("LM-BOTS")
        .addField("Olha que gatinho fofinho!", "Vontade de APERTAR ESSA FOFURA")
        .setFooter("LM-BOTS, a loja de bot que cabe no seu investimento!", message.author.displayAvatarURL({dynamic: true}))
        .setImage(random)

    message.channel.send(embed)
}
exports.help = {
    name: "cat"
}