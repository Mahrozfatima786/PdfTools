import { PDFDocument, degrees } from 'pdf-lib';

export default async function rotatePDF(file: File, angle = 90) {
  const pdfBytes = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(pdfBytes);

  const pages = pdfDoc.getPages();

  pages.forEach((page) => {
    const currentRotation = page.getRotation().angle || 0;
    page.setRotation(degrees(currentRotation + angle));
  });

  const rotatedBytes = await pdfDoc.save();

  const blob = new Blob([rotatedBytes], {
    type: 'application/pdf',
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `rotated-${angle}.pdf`;
  a.click();

  URL.revokeObjectURL(url);
}