let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}
*✦━━─━━━⌠🐦⌡━━━─━━✦*
*⤹⚜ المنشن ⊰⚡⊱ الجماعي ⚜⤸*
\n` + users.map(v => '│◦❈↲ تفاعل يا حب 🫶🏻 ❤️@' + v.replace(/@.+/, '')).join`\n` + '\n*✦━━━━━━[ جاك بوت ]━━━━━━✦*', null, {
        mentions: users
    })
}

handler.help = ['منشن']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
