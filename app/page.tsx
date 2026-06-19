'use client';
import generatePDF from '@/utils/pdfGenerator';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Paper,
  Button,
  Grid,
} from '@mui/material';
import splitPDF from '@/utils/splitPdf';
import mergePDF from '@/utils/mergePdf';
import pdfToJpg from '@/utils/pdfToJpg';
import rotatePDF from '@/utils/rotatePdf';
import compressPDF from '@/utils/compressPdf';
const tools = [
  
  {
    name: 'JPG to PDF',
    uploadText: 'Drop JPG Files Here',
    buttonText: 'Convert To PDF',
  },
  {
    name: 'PDF to JPG',
    uploadText: 'Drop PDF Files Here',
    buttonText: 'Convert To JPG',
  },
  {
    name: 'Merge PDF',
    uploadText: 'Upload PDF Files',
    buttonText: 'Merge PDF',
  },
  {
    name: 'Split PDF',
    uploadText: 'Upload PDF Files',
    buttonText: 'Split PDF',
  },
  {
    name: 'Compress PDF',
    uploadText: 'Upload PDF File',
    buttonText: 'Compress PDF',
  },
  {
    name: 'Rotate PDF',
    uploadText: 'Upload PDF File',
    buttonText: 'Rotate PDF',
  },
];

export default function Home() {
  const [selectedTool, setSelectedTool] =
    useState('JPG to PDF');

  const [files, setFiles] = useState<File[]>(
    []
  );
const [targetSize, setTargetSize] = useState('100');
const [sizeUnit, setSizeUnit] = useState('KB');
  const currentTool =
    tools.find(
      (tool) => tool.name === selectedTool
    ) || tools[0];

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeImage = (index: number) => {
    setFiles(
      files.filter((_, i) => i !== index)
    );
  };
const getAcceptType = () => {
  switch (selectedTool) {
    case 'JPG to PDF':
      return 'image/*';

    case 'PDF to JPG':
    case 'Merge PDF':
    case 'Split PDF':
    case 'Compress PDF':
    case 'Rotate PDF':
      return '.pdf,application/pdf';

    default:
      return '*';
  }
};

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f8fafc',
      }}
    >
      {/* Navbar */}
      <AppBar
        position="static"
        color="inherit"
        elevation={1}
      >
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              color: '#dc2626',
              fontWeight: 700,
              flexGrow: 1,
            }}
          >
            PDF Tools
          </Typography>

          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              gap: 1,
            }}
          >
            {tools.map((tool) => (
              <Button
                key={tool.name}
                onClick={() =>
                  setSelectedTool(tool.name)
                }
                color={
                  selectedTool === tool.name
                    ? 'error'
                    : 'inherit'
                }
              >
                {tool.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
<Container
  maxWidth="md"
  sx={{ pb: 8,pt:10 ,textAlign:"center"}}
>
  <Typography
    variant="h4"
    gutterBottom
    sx={{color:"#dc2626", fontWeight:"bold"}}
  >
    Free PDF Tools Online
  </Typography>

  <Typography
    color="text.secondary"
  >
    Our PDF Tools help you convert,
    merge, split, rotate and compress
    PDF files online for free.
  </Typography>

  <Typography
    color="text.secondary"
  >
    You can convert JPG to PDF,
    convert PDF to JPG, merge
    multiple PDF files into one,
    split PDF pages, rotate PDFs,
    and reduce PDF file size
    directly in your browser.
  </Typography>

  <Typography
    color="text.secondary"
  >
    No registration required. All
    processing is simple, fast and
    secure.
  </Typography>
</Container>
      {/* Hero Section */}
      <Container
        maxWidth="lg"
        sx={{
          py: 8,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        
        <Paper
          elevation={6}
          sx={{
            width: 800,
            minHeight: 500,
            borderRadius: 4,
            p: 5,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{ mt: 4,fontWeight:"bold" }}
            component="p"
          >
            {selectedTool}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 4 }}
          >
            {currentTool.uploadText}
          </Typography>

          {/* Upload Box */}
          <Box
            sx={{
              mt: 6,
              border: '2px dashed #d1d5db',
              borderRadius: 3,
              p: 8,
              bgcolor: '#fafafa',
            }}
          >
            <Typography variant="h6">
              Drag & Drop Files Here
            </Typography>
<input
  id="file-upload"
  type="file"
  accept={getAcceptType()}
  hidden
  multiple={selectedTool === 'Merge PDF'}
  onChange={handleFileChange}
/>
            {/* <input
              id="file-upload"
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleFileChange}
            /> */}

            <Button
              variant="contained"
              color="error"
              sx={{ mt: 3 }}
              onClick={() =>
                document
                  .getElementById(
                    'file-upload'
                  )
                  ?.click()
              }
            >
              Select Files
            </Button>
          </Box>
{selectedTool === 'Compress PDF' && (
  <Box
    sx={{
      mt: 3,
      display: 'flex',
      justifyContent: 'center',
      gap: 2,
    }}
  >
    <input
      type="number"
      value={targetSize}
      onChange={(e) =>
        setTargetSize(e.target.value)
      }
      placeholder="Enter Size"
      style={{
        padding: '10px',
        width: '150px',
      }}
    />

    <select
      value={sizeUnit}
      onChange={(e) =>
        setSizeUnit(e.target.value)
      }
      style={{
        padding: '10px',
      }}
    >
      <option value="KB">KB</option>
      <option value="MB">MB</option>
    </select>
  </Box>
)}
          {/* Image Preview */}
          {files.length > 0 && (
            <>
              <Box
                sx={{
                  mt: 4,
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fill,minmax(180px,1fr))',
                  gap: 2,
                }}
              >
              <Box
  sx={{
    mt: 4,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
    justifyContent: 'center',
  }}
>
  {files.map((file, index) => (
  <Box
    key={index}
    sx={{
      position: 'relative',
      width: 250,
      height: 250,
      bgcolor: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: 2,
    }}
  >
    {file.type.startsWith('image/') ? (
      <img
        src={URL.createObjectURL(file)}
        alt={file.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    ) : (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '80px',
        }}
      >
        📄
      </Box>
    )}

    <Button
      onClick={() => removeImage(index)}
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        minWidth: 30,
        width: 30,
        height: 30,
        borderRadius: '50%',
        bgcolor: 'red',
        color: '#fff',
        p: 0,
      }}
    >
      ✕
    </Button>
  </Box>
))}
  {/* {files.map((file, index) => (
    <Box
      key={index}
      sx={{
        position: 'relative',
        width: 250,
        height: 250,
        bgcolor: '#fff',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 2,
      }}
    >
      <img
        src={URL.createObjectURL(file)}
        alt={file.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />

      <Button
        onClick={() =>
          removeImage(index)
        }
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          minWidth: 30,
          width: 30,
          height: 30,
          borderRadius: '50%',
          bgcolor: 'red',
          color: '#fff',
          p: 0,
        }}
      >
        ✕
      </Button>
    </Box>
  ))} */}
</Box>
              </Box>
<Button
  variant="contained"
  color="error"
  size="large"
  sx={{ mt: 5 }}
onClick={() => {
  if (!files.length) return;

  switch (selectedTool) {
    case 'JPG to PDF':
      generatePDF(files);
      break;

    case 'PDF to JPG':
      pdfToJpg(files[0]);
      break;

    case 'Split PDF':
      splitPDF(files[0]);
      break;

    case 'Merge PDF':
      mergePDF(files);
      break;
case 'Rotate PDF':
  rotatePDF(files[0], 90);
  break;
    case 'Compress PDF':
  compressPDF(
    files[0],
    Number(targetSize),
    sizeUnit
  );
  break;
    default:
      alert(
        `${selectedTool} not implemented yet`
      );
  }
}}
>
  {currentTool.buttonText}
</Button>
              {/* <Button
                variant="contained"
                color="error"
                size="large"
                sx={{ mt: 5 }}
              >
                {
                  currentTool.buttonText
                }
              </Button> */}
            </>
          )}
        </Paper>
      </Container>

      {/* Tools Section */}
      <Container
        maxWidth="lg"
        sx={{ pb: 10 }}
      >
        <Typography
        
          variant="h4"
          sx={{
              align:"center",
          fontWeight:"bold",
          mb:5
          }}
        >
          All PDF Tools
        </Typography>

        <Grid
          container
          spacing={4}
        >
          {tools.map((tool) => (
            <Grid
              key={tool.name}
              size={{
                xs: 6,
                md: 4,
              }}
            >
              <Paper
                elevation={2}
                onClick={() =>
                  setSelectedTool(
                    tool.name
                  )
                }
                sx={{
                  p: 3,
                  cursor:
                    'pointer',
                  borderRadius: 3,
                  textAlign:
                    'center',
                  border:
                    selectedTool ===
                    tool.name
                      ? '2px solid #ef4444'
                      : '2px solid transparent',
                  transition:
                    '0.3s',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                <Typography
                component="p"
                  variant="h3"
                  sx={{mb:1}}
                >
                  📄
                </Typography>

                <Typography
                component="p"
                sx={{fontWeight:600}}
                >
                  {tool.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Box
  sx={{
    borderTop: '1px solid #e5e7eb',
    bgcolor: '#fff',
    py: 3,
  }}
>
  <Typography
    align="center"
    color="text.secondary"
  >
    © 2026 PDF Tools. All Rights Reserved.
  </Typography>

<Box
  sx={{
    mt: 2,
    display: 'flex',
    justifyContent: 'center',
    gap: 3,
    flexWrap: 'wrap',
  }}
>
  <a href="/about">About Us</a>
  <a href="/contact">Contact Us</a>
  <a href="/privacy-policy">Privacy Policy</a>
  <a href="/terms">Terms & Conditions</a>
  <a href="/disclaimer">Disclaimer</a>
</Box>
</Box>
    </Box>
  );
}

// 'use client';

// import { useState } from 'react';
// import FileUpload from '@/components/FileUpload';
// import ImagePreview from '@/components/ImagePreview';
// import ConvertButton from '@/components/ConvertButton';

// const tools = [
//   {
//     name: 'JPG to PDF',
//     uploadText: 'Drop JPG Files Here',
//     buttonText: 'Convert To PDF',
//   },
//   {
//     name: 'PDF to JPG',
//     uploadText: 'Drop PDF Files Here',
//     buttonText: 'Convert To JPG',
//   },
//   {
//     name: 'Merge PDF',
//     uploadText: 'Upload PDF Files',
//     buttonText: 'Merge PDF',
//   },
//   {
//     name: 'Split PDF',
//     uploadText: 'Upload PDF Files',
//     buttonText: 'Split PDF',
//   },
//   {
//     name: 'Compress PDF',
//     uploadText: 'Upload PDF File',
//     buttonText: 'Compress PDF',
//   },
//   {
//     name: 'Rotate PDF',
//     uploadText: 'Upload PDF File',
//     buttonText: 'Rotate PDF',
//   },
// ];

// export default function Home() {
//   const [files, setFiles] = useState<File[]>([]);
//   const [selectedTool, setSelectedTool] =
//     useState('JPG to PDF');

//   const currentTool =
//     tools.find(
//       (tool) =>
//         tool.name === selectedTool
//     ) || tools[0];

//   return (
//     <div className="min-h-screen bg-slate-100">
//       {/* Navbar */}
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
//           <h1 className="text-2xl font-bold text-red-600">
//             PDF Tools
//           </h1>

//           <div className="hidden md:flex gap-8">
//             {tools.map((tool) => (
//               <button
//                 key={tool.name}
//                 onClick={() =>
//                   setSelectedTool(tool.name)
//                 }
//                 className={`font-medium ${
//                   selectedTool === tool.name
//                     ? 'text-red-600'
//                     : 'text-gray-700'
//                 }`}
//               >
//                 {tool.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Hero */}
//       <section className="max-w-6xl mx-auto py-12 px-6" style={{justifyItems:"end",marginTop:"20px"}}>
//         <div className="bg-white rounded-3xl shadow-lg p-10"
//         style={{minHeight: "500px",width:"800px"}}>
//           <div className="text-center mb-10">
//             <h2 className="text-5xl font-bold" style={{paddingTop: "50px"}}>
//               {selectedTool}
//             </h2>

//             <p className="text-gray-500 mt-4" style={{paddingTop:"40px"}}>
//               {currentTool.uploadText}
//             </p>
//           </div>

//           <FileUpload
//             setFiles={setFiles}
//           />

//           {files.length > 0 && (
//             <>
//               <ImagePreview
//                 files={files}
//                 setFiles={setFiles}
//               />

//               <div className="flex justify-center mt-8">
//                 <ConvertButton
//                   files={files}
//                   buttonText={
//                     currentTool.buttonText
//                   }
//                 />
//               </div>
//             </>
//           )}
//         </div>
//       </section>
//       {/* Tools Section */}
//       <section className="max-w-7xl mx-auto px-6 pb-20" >
//         <h2 className="text-center text-4xl font-bold mb-8 " style={{margin:"50px",marginBottom:"50px"}}>
//           All PDF Tools
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
//           {tools.map((tool) => (
//             <div
//               key={tool.name}
//               onClick={() =>
//                 setSelectedTool(tool.name)
//               }
//               className={`
//                 bg-white
//                 rounded-xl
//                 p-6
//                 cursor-pointer
//                 shadow
//                 transition
//                 hover:shadow-lg
//                 ${
//                   selectedTool === tool.name
//                     ? 'border-2 border-red-500'
//                     : ''
//                 }
//               `}
//             >
//               <div className="text-4xl mb-3">
//                 📄
//               </div>

//               <h3 className="font-semibold">
//                 {tool.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       <footer className="bg-white border-t py-6 text-center text-gray-500">
//         © 2026 PDF Tools. All Rights Reserved.
//       </footer>
//     </div>
//   );
// }


// // 'use client';

// // import { useState } from 'react';
// // import FileUpload from '@/components/FileUpload';
// // import ImagePreview from '@/components/ImagePreview';
// // import ConvertButton from '@/components/ConvertButton';

// // const tools = [
// //   'JPG to PDF',
// //   'PDF to JPG',
// //   'Merge PDF',
// //   'Split PDF',
// //   'Compress PDF',
// //   'Rotate PDF',
// //   'Protect PDF',
// //   'Unlock PDF',
// //   'Word to PDF',
// //   'Excel to PDF',
// //   'PowerPoint to PDF',
// //   'PDF to Word',
// // ];

// // export default function Home() {
// //   const [files, setFiles] = useState<File[]>([]);

// //   return (
// //     <div className="min-h-screen bg-slate-50">
// //       {/* Navbar */}
// //       <nav className="bg-white border-b">
// //         <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
// //           <h1 className="text-2xl font-bold text-red-600">
// //             PDF Tools
// //           </h1>

// //           <div className="hidden md:flex gap-8">
// //             <span>Merge PDF</span>
// //             <span>Split PDF</span>
// //             <span>Compress PDF</span>
// //             <span>Convert PDF</span>
// //           </div>

// //           <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
// //             Sign Up
// //           </button>
// //         </div>
// //       </nav>

// //       {/* Hero */}
// //       <section className="max-w-6xl mx-auto px-6 py-16 text-center">
// //         <h2 className="text-5xl font-bold mb-4">
// //           JPG to PDF Converter
// //         </h2>

// //         <p className="text-gray-600 text-lg mb-10">
// //           Convert JPG images to PDF online for free.
// //         </p>

// //         <div className="bg-white rounded-3xl shadow-lg p-8">
// //           <FileUpload setFiles={setFiles} />

// //           {files.length > 0 && (
// //             <>
// //               <ImagePreview
// //                 files={files}
// //                 setFiles={setFiles}
// //               />

// //               <div className="mt-8">
// //                 <ConvertButton files={files} />
// //               </div>
// //             </>
// //           )}
// //         </div>
// //       </section>

// //       {/* Tools Grid */}
// //       <section className="max-w-7xl mx-auto px-6 pb-20">
// //         <h3 className="text-3xl font-bold mb-8 text-center">
// //           All PDF Tools
// //         </h3>

// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //           {tools.map((tool) => (
// //             <div
// //               key={tool}
// //               className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition cursor-pointer"
// //             >
// //               <div className="text-3xl mb-3">📄</div>

// //               <h4 className="font-semibold">
// //                 {tool}
// //               </h4>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-white border-t py-8">
// //         <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
// //           © 2026 PDF Tools. All Rights Reserved.
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }