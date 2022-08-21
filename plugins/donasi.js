let handler = async m => m.reply(`
╭─「 Donasi •Telkomsel」
│ •  [085268581456]
╰────
╭─「 Donasi •myim3 」
│ •  [085838225041]
╰────
╭─「 Donasi • Dana 」
│ •  [085838225041]
╰────

Nomor owner utama wa.me/6285838225041

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler