// 'use client';

// import generatePDF from '@/utils/pdfGenerator';

// type Props = {
//   files: File[];
// };

// export default function ConvertButton({
//   files,
// }: Props) {
//   return (
//     <button
//       onClick={() =>
//         generatePDF(files)
//       }
//     >
//       Download PDF
//     </button>
//   );
// }
'use client';

import generatePDF from '@/utils/pdfGenerator';
import { Button } from '@mui/material';

type Props = {
  files: File[];
};

export default function ConvertButton({
  files,
}: Props) {
  return (
    <Button
      variant="contained"
      color="error"
      size="large"
      onClick={() =>
        generatePDF(files)
      }
    >
      Convert To PDF
    </Button>
  );
}