import JSZip from 'jszip'
import pdf from 'download/pdf'
import i130 from 'download/i130'
import { saveAs } from 'file-saver'

const fileNames = ['i130']
const files = { i130 }

const downloadFiles = () => {
  Promise.all(fileNames.map(fileName => pdf(files[fileName])))
    .then(fileBlobs => {
      const aZip = new JSZip()
      fileBlobs.forEach((blob, index) => {
        aZip.file(`${fileNames[index]}.pdf`, blob)
      })
      aZip.generateAsync({ type: 'blob', mimeType: 'application/octet-stream' })
        .then(blob => saveAs(blob, 'Name.zip'))
    })
}

export default downloadFiles
