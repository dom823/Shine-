let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) 
if (command == 'nuke') {
conn.reply(m.chat, `
addio figli di puttana
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'gay') {
conn.reply(m.chat, `
${text.toUpperCase()} è 🏳️‍🌈 ${(100).getRandom()}% ${command.replace('how', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'lesbica') {
conn.reply(m.chat, `
${text.toUpperCase()} è 🏳️‍🌈 ${(100).getRandom()}% ${command.replace('how', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'puttana') {
conn.reply(m.chat, `
${text.toUpperCase()} è 🔞 ${(100).getRandom()}% ${command.replace('how', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'ratto') {
conn.reply(m.chat, `
${text.toUpperCase()} è 🐁 ${(100).getRandom()}% ${command.replace('how', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
}
handler.help = ['gay', 'lesbica', 'pajero', 'pajera', 'puto', 'puttana', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map(v => v + ' @tag | nombre')
handler.tags = ['calculator']
handler.command = /^gay|lesbica|pajero|pajera|puto|puttana|manco|manca|rata|prostituta|prostituto/i
export default handler
