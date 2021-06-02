import * as fs from 'fs'
const PDFDocument = require('pdfkit')

const createPdfDocument = (user) => {
  const doc = new PDFDocument({ size: 'A4', margin: 50 })
  doc.pipe(fs.createWriteStream(`${user._id}.pdf`))

  doc
    .text(`${user.firstname} ${user.lastname}`, 100, 80)
    .moveDown()
    .text(`${user.email}`)
    .moveDown()
    .text(`${user.phonenumber}`)
    .moveDown()
    .text(`${user.location.city}, ${user.location.address}`)
    .moveDown()
    .text(`Facebook: ${user.social.facebook}`)
    .moveDown()
    .text(`Twitter: ${user.social.twitter}`)
    .moveDown()
    .text(`Linkedin: ${user.social.linkedin}`)
    .moveDown()
    .text(`Telegram: ${user.social.telegram}`)

  doc.end()
  const file = fs.createReadStream(`${user._id}.pdf`)
  return file
}

export default createPdfDocument