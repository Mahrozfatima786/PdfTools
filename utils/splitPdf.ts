import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default async function splitPDF(
  file: File
) {
  const pdfBytes = await file.arrayBuffer();

  const pdfDoc = await PDFDocument.load(
    pdfBytes
  );

  const totalPages =
    pdfDoc.getPageCount();

  const zip = new JSZip();

  for (
    let i = 0;
    i < totalPages;
    i++
  ) {
    const newPdf =
      await PDFDocument.create();

    const [copiedPage] =
      await newPdf.copyPages(
        pdfDoc,
        [i]
      );

    newPdf.addPage(copiedPage);

    const bytes =
      await newPdf.save();

    zip.file(
      `page-${i + 1}.pdf`,
      bytes
    );
  }

  const zipBlob =
    await zip.generateAsync({
      type: 'blob',
    });

  saveAs(zipBlob, 'split-pages.zip');
}