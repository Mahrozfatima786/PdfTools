import { PDFDocument } from 'pdf-lib';

export default async function mergePDF(
  files: File[]
) {
  if (files.length < 2) {
    alert(
      'Please select at least 2 PDF files'
    );
    return;
  }

  const mergedPdf =
    await PDFDocument.create();

  for (const file of files) {
    const pdfBytes =
      await file.arrayBuffer();

    const pdf =
      await PDFDocument.load(
        pdfBytes
      );

    const pages =
      await mergedPdf.copyPages(
        pdf,
        pdf.getPageIndices()
      );

    pages.forEach((page) =>
      mergedPdf.addPage(page)
    );
  }

  const mergedBytes =
    await mergedPdf.save();

  const blob = new Blob(
    [mergedBytes],
    {
      type: 'application/pdf',
    }
  );

  const url =
    URL.createObjectURL(blob);

  const a =
    document.createElement('a');

  a.href = url;
  a.download = 'merged.pdf';
  a.click();

  URL.revokeObjectURL(url);
}