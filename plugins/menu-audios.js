import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paypal.me/MOHAMEDSharkawy642')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*₪ ↵ قــآئــمـــة الاوامـــر [❄]*
*◆━── ⊱∘┃﹝❄﹞┃∘⊰ ──━◆*
*❄ ┃﹝أهلا @user﹞*
*❄ ┃﹝انا بوت إسمي جـاك*
*❄ ┃﹝وقت العمل 00:15:30﹞*
*❄ ┃﹝ بوت خاص لمملكة بلود♦️﹞*
*❄ ┃﹝لا تنسى تصلي على النبي﹞*
*· · • • • • ❄ • • • • · ·*
*₪↲ القـسـم العام┆⥌🖇️⥍*

*❄ ❛╏ ❨ .الجروب ❩*
*❄ ❛╏❨ .مخفي ❩*
*❄ ❛╏ ❨ .منشن ❩*
*❄ ❛╏ ❨ .رستر ❩*
*❄ ❛╏ ❨ .الاشباح ❩*
*· · • • • • ❄ • • • • · ·*
*₪↲ قـسـم الاعضاء┆⥌👥⥍*

*❄ ❛╏ ❨ .هل ❩*
*❄ ❛╏❨ .تصميم ❩*
*❄ ❛╏ ❨ .بروفايل ❩*
*❄ ❛╏ ❨ .انطقي ❩*
*❄ ❛╏ ❨ .انطق ❩*
*❄ ❛╏ ❨ .زخرفة ❩*
*❄ ❛╏❨ .نسبة ❩*
*❄ ❛╏ ❨ .بحث ❩*
*❄ ❛╏ ❨ .المطور ❩*
*❄ ❛╏ ❨ .الدعم ❩*
*❄ ❛╏ ❨ .تخفيض ❩*
*❄ ❛╏ ❨ .المساعدين ❩*
* ❛╏ ❨ .شخصيه ❩*
*· · • • • • ❄ • • • • · ·*
*₪↲ قـسـم الدين┆⥌🕋⥍*

*❄ ❛╏ ❨ .قران ❩*
*❄ ❛╏❨ .اذكاء الصباح ❩*
*❄ ❛╏ ❨ .اذكار المساء ❩*
*❄ ❛╏ ❨ .سوره ❩*
*❄ ❛╏ ❨ .حديث ❩*
*· · • • • • ✦ • • • • · ·*
*₪↲ قـسـم الترفيه┆⥌🎪⥍*

*❄ ❛╏ ❨ .دين ❩*
*❄ ❛╏❨ .الرياضيات ❩*
*❄ ❛╏ ❨ .رياضه ❩*
*❄ ❛╏ ❨ .كت ❩*
*❄ ❛╏ ❨ .فكك ❩*
*❄ ❛╏ ❨ .رتب ❩*
*❄ ❛╏❨ .خمن ❩*
*❄ ❛╏ ❨ .ايموجي ❩*
*❄ ❛╏ ❨ .انمي ❩*
*❄ ❛╏ ❨ .عين ❩*
*❄ ❛╏ ❨ .احزر ❩*
*❄ ❛╏ ❨ .علم ❩*
*❄ ❛╏ ❨ .نرد ❩*
*❄ ❛╏ ❨ .المارد ❩*
*❄ ❛╏❨ .تحدي ❩*
*❄ ❛╏ ❨ .اكس او ❩*
*❄ ❛╏ ❨ .رهان ❩*
*❄ ❛╏ ❨ .شطرنج ❩*
*❄ ❛╏ ❨ .سؤال ❩*
*❄ ❛╏ ❨ .لو ❩*
*❄ ❛╏ ❨ .تاج ❩*
*❄ ❛╏ ❨ .فزوره ❩*
*❄ ❛╏❨ .صراحه ❩*
*❄ ❛╏ ❨ .حروف ❩*
*❄ ❛╏ ❨ .مقولات ❩*
*❄ ❛╏ ❨ .نصيحه ❩*
*❄ ❛╏ ❨ .توب ❩*
*❄ ❛╏ ❨ .صداقه ❩*
*❄ ❛╏ ❨ .زواج ❩*
*❄ ❛╏ ❨ .طلاق ❩*
*❄ ❛╏❨ .رفيق ❩*
*❄  | *(1صوت انمي)*
*· · • • • • ❄ • • • • · ·*
*₪↲ القـسـم الخاص┆⥌🔏⥍*

*❄ ❛╏ ❨ .بوت ❩*
*❄ ❛╏❨ .تحدث ❩*
*❄ ❛╏ ❨ .ايتاتشي ❩*
*· · • • • • ❄ • • • • · ·*
*₪↲ قـسـم التحميل┆⥌📂⥍*

*❄ ❛╏ ❨ .صور ❩*
*❄ ❛╏❨ .فيديو ❩*
*❄ ❛╏ ❨ .انستا ❩* 
*❄ ❛╏ ❨ .تيك ❩*
*❄ ❛╏ ❨ .تطبيق ❩*
*· · • • • • ❄ • • • • · ·*
*₪↲ القـسـم التحويل┆⥌🔄⥍*

*❄ ❛╏ ❨ .سرقه ❩*
*❄ ❛╏❨ .لصوره ❩*
*❄ ❛╏ ❨ .ملصق ❩*
*❄ ❛╏ ❨ .لفديو ❩*
*❄ ❛╏ ❨ .تلجراف ❩*
*❄ ❛╏ ❨ .لانمي ❩*
*❄ ❛╏❨ .لكرتون ❩*
*❄ ❛╏ ❨ .انطق ❩*
*· · • • • • ❄ • • • • · ·*
*₪↲ قـسـم الصورة والايدت┆⥌🖼️⥍*

*❄ ❛╏ ❨ .خلفيه ❩*
*❄ ❛╏❨ ايديت ❩*
*❄ ❛╏ ❨ .ميمز ❩*
*❄ ❛╏ ❨ .طقم2 ❩*
*❄ ❛╏ ❨ .طقم ❩*
*❄ ❛╏ ❨ .قط ❩*
*❄ ❛╏❨ .ايدت ❩*
*❄ ❛╏ ❨ .صوت-انمي ❩*
*❄ ❛╏ ❨ .طقمي ❩*
*· · • • • • ❄ • • • • · ·*
*₪↲ قـسـم البنك┆⥌🏦⥍*

*❄ ❛╏ ❨ .رانك ❩*
*❄ ❛╏❨ .البنك ❩*
*❄ ❛╏ ❨ .لفل ❩*
*❄ ❛╏ ❨ .شراء ❩*
*❄ ❛╏ ❨ .يومي ❩*
*❄ ❛╏ ❨ .تحويل ❩*
*❄ ❛╏❨ تصنيف ❩*
*· · • • • • ❄ • • • • · ·*
*₪↲ قـسـم المطور┆|🧊⥍*

*❄ ❛╏ ❨ .بريم ❩*
*❄ ❛╏❨ .حظر ❩*
*❄ ❛╏ ❨ .الغاء-الحظر ❩*
*❄ ❛╏ ❨ .المحظورين ❩*
*❄ ❛╏ ❨ .المميزين ❩*
*❄ ❛╏ ❨ .بلوك ❩*
*❄ ❛╏❨ .رفع-بلوك ❩*
*❄ ❛╏ ❨ .البلوكات ❩*
*❄ ❛╏ ❨ .بان ❩*
*❄ ❛╏ ❨ .رفع-بان ❩*
*❄ ❛╏ ❨ .انظم ❩*
*❄ ❛╏ ❨ .اخرج ❩*
*❄ ❛╏ ❨ .مهم ❩*
*❄ ❛╏ ❨ .اعلان ❩*
━ ── • ⟐ • ── ━
━ ── • ⟐ • ── ━
*˼‏ ⚠️˹ مـلاحــظــة╿↶*
╭ ⋅ ⋅ ── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ── ⋅ ⋅ ╮
*❶ - يمنع منعا بتا سب البوت.*
*❷ - استخدام البوت بشكل متوازن و بدون تسبب ازعاج للاعضاء.*
 ╰⋅ ⋅ ── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ── ⋅ ⋅ ╯
*◆━──*◈ ⊱∘┃﹝♦️﹞┃∘⊰ ──━◆*
*◈تـوقــيـ✒️ـع مملكة بلود↶*
*⟬𝐉𝐀𝐂𝐊⊰♦⊱𝐀𝐋𝐊𝐁𝐄𝐑⟭*
`.trim()
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '『👑┇ITACHI ┇🤖┇𝙱𝙾𝚃┇👑』',
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/https://www.paypal.me/MOHAMEDSharkawy642`
}}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|اوامر|memú|help|info|comandos|allmenu|2help|menu1.2|الاوامر|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}