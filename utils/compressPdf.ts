import { PDFDocument } from 'pdf-lib';

export default async function compressFile(
  file: File,
  targetSize: number,
  unit: string
) {
  try {
    const targetSizeKB =
      unit === 'MB'
        ? targetSize * 1024
        : targetSize;

    // PDF
    if (file.type === 'application/pdf') {
      const bytes =
        await file.arrayBuffer();

      const pdfDoc =
        await PDFDocument.load(bytes);

      const compressedBytes =
        await pdfDoc.save({
          useObjectStreams: true,
          addDefaultPage: false,
        });

      downloadFile(
        compressedBytes,
        `compressed-${file.name}`,
        'application/pdf'
      );

      alert(
        `Original: ${(file.size / 1024).toFixed(
          2
        )} KB\nCompressed: ${(
          compressedBytes.length / 1024
        ).toFixed(2)} KB`
      );

      return;
    }

    // Image
    if (file.type.startsWith('image/')) {
      const compressedBlob =
        await compressImage(
          file,
          targetSizeKB
        );

      downloadFile(
        compressedBlob,
        `compressed-${file.name.replace(
          /\.[^/.]+$/,
          ''
        )}.jpg`,
        'image/jpeg'
      );

      alert(
        `Original: ${(file.size / 1024).toFixed(
          2
        )} KB\nCompressed: ${(
          compressedBlob.size / 1024
        ).toFixed(2)} KB`
      );

      return;
    }

    alert(
      'Only PDF and Image files supported'
    );
  } catch (error) {
    console.error(error);
    alert('Compression failed');
  }
}

async function compressImage(
  file: File,
  targetSizeKB: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = async () => {
      const canvas =
        document.createElement('canvas');

      const ctx =
        canvas.getContext('2d');

      if (!ctx) {
        reject('Canvas error');
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      let quality = 0.9;
      let compressedBlob: Blob | null =
        null;

      while (quality > 0.05) {
        compressedBlob =
          await new Promise<Blob | null>(
            (resolveBlob) => {
              canvas.toBlob(
                resolveBlob,
                'image/jpeg',
                quality
              );
            }
          );

        if (
          compressedBlob &&
          compressedBlob.size / 1024 <=
            targetSizeKB
        ) {
          break;
        }

        quality -= 0.05;
      }

      if (compressedBlob) {
        resolve(compressedBlob);
      } else {
        reject(
          'Unable to compress image'
        );
      }
    };

    img.onerror = () =>
      reject('Image load failed');

    img.src =
      URL.createObjectURL(file);
  });
}

function downloadFile(
  data: Blob | Uint8Array,
  fileName: string,
  mimeType: string
) {
const blob =
  data instanceof Blob
    ? data
    : new Blob(
        [
          new Uint8Array(
            data.buffer as ArrayBuffer,
            data.byteOffset,
            data.byteLength
          ),
        ],
        {
          type: mimeType,
        }
      );
  const url =
    URL.createObjectURL(blob);

  const a =
    document.createElement('a');

  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}