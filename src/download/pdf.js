import PDFDocument from 'utils/pdfkit'
import blobStream from 'blob-stream'

const pdf = (instruction, data = {}) => {
  return new Promise((res, rej) => {
    const doc = new PDFDocument({ autoFirstPage: false })
    const stream = doc.pipe(blobStream())
    instruction(doc, data)

    stream.on('finish', () => {
      try {
        res(stream.toBlob('application/pdf'))
      }
      catch (err) {
        rej(err)
      }
    })
  })
}
export default pdf

export const pdfToURL = (instruction, data = {}) => {
  return new Promise((res, rej) => {
    const doc = new PDFDocument({ autoFirstPage: false })
    const stream = doc.pipe(blobStream())
    instruction(doc, data)

    stream.on('finish', () => {
      try {
        res(stream.toBlobURL('application/pdf'))
      }
      catch (err) {
        rej(err)
      }
    })
  })
}
