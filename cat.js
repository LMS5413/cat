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
        'https://i.imgur.com/46CM8SP.jpg',
        'https://i.imgur.com/HjZCw2x.jpg',
        'https://i.imgur.com/fyx0Bax.jpg',
        'https://i.imgur.com/RcmFlx6.jpg',
        'https://i.imgur.com/hDTEpiE.jpg'
    ]
    const random = gatos[Math.floor(Math.random() * gatos.length)];

    const embed = new Discord.MessageEmbed()
        .setColor("#00FF6C")
        .setTitle("CAT COMANDO")
        .addField("Olha que gatinho fofinho!", "Vontade de APERTAR ESSA FOFURA")
        .setFooter("Comando de cat!", message.author.displayAvatarURL({dynamic: true}))
        .setImage(random)

    message.channel.send(embed)
}
exports.help = {
    name: "cat"
}