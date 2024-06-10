let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^جـاك بحبك|جـاك عاوزه اتجوزك|بحبك|بموت فيك|نتجوز|جـاك هنتجوز امتي|جـاك انت ليا|جـاك بموت فيك$/i.test(m.text)) { 
 responses = [ 
 'شكرا  ',
   'ونا بكرهك',
 'هفكر في الموضوع',  
 'و انا',  
 'استحيت',  
 'خلاص لا اتكسف ',  
 'اسكتتتتت عشان مضربكش عيب الكلام ده   ',  
 'طيب و بعدين '  
 ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
 responses = [ 
 'وعليكم السلام',  
 'وعليكم السلام منور',  
 ' وعليكم السلام كيفك',  
 'وعليكم السلام ورحمة الله وبركاته' 
 ]; 
 }else if (/^ جـاك عامل ايه|عامله ايه|عاملين ايه|الدنيا عامله ايه|عاملين ايه يشبب$/i.test(m.text)) { 
 responses = [ 
 'كل شيء بخير الحمد لله ',  
 ' مش عارف  ',  
 ' الحمد لله ماشي الحال ',  
 'الحمد الله',  
 ' لو انت كويس انا كويس' 
 ]; 
 }else if (/^كل خرا|عرص|خول|متناك|كسمك|علق$/i.test(m.text)) { 
 responses = [ 
 'عيب ',
   'انذار',
 ' اتأدب ',  
 ' يا وسخ ',  
 'الله يهديك ',  
 ' عيب يا طفل' 
 ]; 
 }else if (/^تم تعريب هذا الامر|تم الانتهاء|تمت اضافه|تمت اضافة|تم التعريب|هذا الامر انتهي$/i.test(m.text)) { 
 responses = [ 
 ' عاشت ايدك ✨💚',  
 'تسلم ايدك ✨💚 ',  
 'عاش ✨💚 ',  
 'عاش ايتاشي ✨💚',  
 'اوكي ✨💚' 
 ]; 
 }else if (/^لول|هههه|ههههه|هههههه|ههههههه|هههههههه|😂😂😂$/i.test(m.text)) { 
 responses = [ 
 'دوم دي ضحكة ',  
 'ضحكني معاك',  
 'دوم يا رب  ',  
 'ههه ',  
 '😂😂😂',  
 'ايه ال بيضحك',  
 'اضحك معاك؟',  
 'دوم ' 
 ]; 
 }else if (/^جـاك|جـاك عمكياي/i.test(m.text)) { 
 responses = [ 
 'قلب جاك كدا كدا✨♥',  
 'جاك عمك✨🤺 ',  
 'ي عيون جاك✨♥',  
 'قلب جاك من جوا✨♥ ',  
 'نعم يحب✨💙' 
]; 
 }else if (/^بوت|يا بوت|البوت|بوووت|بووووت|بوووووت|بووووووووت $/i.test(m.text)) { 
 responses = [ 
 '*اسمي جـاك*✨💙',  
 '*مش عارف تقول جـاك؟*✨',  
 '*وربي اسمي جـاك*',  
 '*مافي بوت غيرك يحب*✨ ',  
 '*مش وراك غير كلمت بوت؟!*🐧' 
 ]; 
 }else if (/^صباح النور|صباح النعناع الاخصر|صباح الفل|صباح|صباح الخير $/i.test(m.text)) { 
 responses = [ 
 'صباح الفل ✨💚',  
 'صباحك جـاك ✨💚 ',  
 'صباح الكاريزما ✨💚',  
 'انت صحيت وانا رايح انام 🐦👋🏻 ',  
 'روح نام تاني بقي 🙃' 
 ]; 
 }else if (/^شكرا|تسلم|تسلمي$/i.test(m.text)) { 
 responses = [ 
 'العفو✨♥',  
 ' ولا يهمك مفيش حاجه✨ ',  
 ' الشكر لله ✨💚',  
 'العفو يبشه ✨💚' 
]; 
 }else if (/^🧡|💚|💞|💖|💜|💛|🤍 $/i.test(m.text)) { 
 responses = [ 
 'شكرا✨♥',  
 'تسلم✨♥',  
 '✨♥',  
 'حبيبي✨💚',  
 '✨💚' 
 ]; 
 }else if (/^كل ده نور|الجروب نور كده ليه|ايه النور ده|منورين الجدد|نورت|نورتي|منور $/i.test(m.text)) { 
 responses = [
   'نوري الاصل ونورك انعكاس نوري🤝✨',
 'نوري انا✨',  
 'الجروب نور فعلا✨♥',  
 '✨♥',  
 'الجروب منور✨💚',  
 '✨💚' 
 ]; 
 }else if (/^اسكت|اسكت|هتسكت امتي|اخرس|اخرص|يا ابني اسكت$/i.test(m.text)) { 
 responses = [ 
 'ملكش دعوه ',
              ' لع وانت مالك',  
                 ' مش بمزاجك',  
 'لا مين انت ال هتسكتني ',  
 'اسكت انت' 
 ]; 
 }  
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;