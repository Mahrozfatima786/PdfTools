// import { jsPDF } from 'jspdf';

// export default async function generatePDF(
//   files: File[]
// ) {
//   if (!files.length) {
//     alert('Please select images');
//     return;
//   }

//   const pdf = new jsPDF();

//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];

//     const imageData =
//       await new Promise<string>(
//         (resolve) => {
//           const reader =
//             new FileReader();

//           reader.onload = (e) => {
//             resolve(
//               e.target?.result as string
//             );
//           };

//           reader.readAsDataURL(file);
//         }
//       );

//     const img = new Image();

//     await new Promise<void>(
//       (resolve) => {
//         img.onload = () =>
//           resolve();

//         img.src = imageData;
//       }
//     );

//     const pdfWidth =
//       pdf.internal.pageSize.getWidth();

//     const pdfHeight =
//       (img.height * pdfWidth) /
//       img.width;

//     if (i > 0) {
//       pdf.addPage();
//     }

//     pdf.addImage(
//       imageData,
//       'JPEG',
//       0,
//       0,
//       pdfWidth,
//       pdfHeight
//     );
//   }

//   pdf.save('images.pdf');
// }
import jsPDF from 'jspdf';

export default async function generatePDF(
  files: File[]
) {
  if (!files.length) {
    alert('Please select images first');
    return;
  }

  const pdf = new jsPDF();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    const imageData = await new Promise<string>(
      (resolve) => {
        const reader = new FileReader();

        reader.onload = (e) =>
          resolve(e.target?.result as string);

        reader.readAsDataURL(file);
      }
    );

    if (i > 0) {
      pdf.addPage();
    }

    pdf.addImage(
      imageData,
      'JPEG',
      10,
      10,
      190,
      270
    );
  }

  pdf.save('converted.pdf');
}