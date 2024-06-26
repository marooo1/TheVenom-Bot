import translate from '@vitalets/google-translate-api'
  import fetch from "node-fetch"
  let handler = async (m, { text, command, args, usedPrefix }) => {
    if (!text) throw `اكتب نصا للتحدث معي\nمثال: ${usedPrefix + command} مرحبا*`
    try {
    await conn.sendPresenceUpdate('composing', m.chat)
    let api = await fetch("https://api.simsimi.net/v2/?text=" + text + "&lc=es")
    let resSimi = await api.json()
    m.reply(resSimi.success)      
    } catch {
    try {
    if (text.includes('مرحبا')) text = text.replace('مرحبا', 'مرحبا')
    if (text.includes('مرحبا')) text = text.replace('مرحبا', 'اهلا')
    if (text.includes('مرحبا')) text = text.replace('مرحبا', 'اهلا')    
    let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" + text)
    let resu = await reis.json()  
    let nama = m.pushName || '1'
    let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + nama + "&msg=" + resu[0][0][0])
    let res = await api.json()
    let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=" + res.cnt)
    let resu2 = await reis2.json()
    m.reply(resu2[0][0][0])      
    } catch {  
    let reisss = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=id&dt=t&q=" + text)
    let resuuu = await reisss.json()      
    let res222 = await fetch(`https://violetics.pw/api/utility/simsimi?apikey=beta&text=${resuuu[0][0][0]}`)  
    let json222 = await res222.json()
    let resulttt = json222.result
    let lolll = await translate(`${resulttt}`, { to: 'es', autoCorrect: true })
    m.reply(lolll.text)      
    }}
  }
  handler.help = ['sim simi']
  handler.tags = ['General']
  handler.command = ['bot', 'simi', 'simsimi'] 
  export default handler
