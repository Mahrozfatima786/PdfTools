// import JSZip from 'jszip';
// import { saveAs } from 'file-saver';
// import * as pdfjsLib from 'pdfjs-dist';

// pdfjsLib.GlobalWorkerOptions.workerSrc =
//   `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// export default async function pdfToJpg(
//   file: File
// ) {
//   const pdfBytes = await file.arrayBuffer();

//   const pdf =
//     await pdfjsLib.getDocument({
//       data: pdfBytes,
//     }).promise;

//   const zip = new JSZip();

//   for (
//     let pageNum = 1;
//     pageNum <= pdf.numPages;
//     pageNum++
//   ) {
//     const page =
//       await pdf.getPage(pageNum);

//     const viewport =
//       page.getViewport({
//         scale: 2,
//       });

//     const canvas =
//       document.createElement('canvas');

//     const context =
//       canvas.getContext('2d');

//     if (!context) continue;

//     canvas.width = viewport.width;
//     canvas.height = viewport.height;

//     await page.render({
//       canvasContext: context,
//       viewport,
//     }).promise;

//     const blob =
//       await new Promise<Blob | null>(
//         (resolve) =>
//           canvas.toBlob(
//             resolve,
//             'image/jpeg',
//             1
//           )
//       );

//     if (blob) {
//       zip.file(
//         `page-${pageNum}.jpg`,
//         blob
//       );
//     }
//   }

//   const zipBlob =
//     await zip.generateAsync({
//       type: 'blob',
//     });

//   saveAs(zipBlob, 'pdf-images.zip');
// }
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default async function pdfToJpg(
  file: File
) {
  if (typeof window === 'undefined') return;

  const pdfjsLib = await import(
    'pdfjs-dist'
  );

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

  const pdfBytes = await file.arrayBuffer();

  const pdf =
    await pdfjsLib.getDocument({
      data: pdfBytes,
    }).promise;

  const zip = new JSZip();

  for (
    let pageNum = 1;
    pageNum <= pdf.numPages;
    pageNum++
  ) {
    const page =
      await pdf.getPage(pageNum);

    const viewport =
      page.getViewport({
        scale: 2,
      });

    const canvas =
      document.createElement('canvas');

    const context =
      canvas.getContext('2d');

    if (!context) continue;

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
      canvasContext: context,
      viewport,
    }).promise;

    const blob =
      await new Promise<Blob | null>(
        (resolve) =>
          canvas.toBlob(
            resolve,
            'image/jpeg',
            1
          )
      );

    if (blob) {
      zip.file(
        `page-${pageNum}.jpg`,
        blob
      );
    }
  }

  const zipBlob =
    await zip.generateAsync({
      type: 'blob',
    });

  saveAs(
    zipBlob,
    `${file.name.replace('.pdf', '')}.zip`
  );
}