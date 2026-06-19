'use client';

type Props = {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

export default function ImagePreview({
  files,
  setFiles,
}: Props) {
  const removeImage = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-8"  >
      {files.map((file, index) => (
        <div
          key={index}
          className="relative bg-white rounded-xl shadow"
        >
          <img
          style={{height:"100%"}}
            src={URL.createObjectURL(file)}
            alt={file.name}
            className="w-full h-48 object-cover rounded-xl"
          />

          <button
          style={{padding:"0px"}}
            onClick={() => removeImage(index)}
            className="absolute top-2 right-2 bg-red-600 text-white w-8 h-8 rounded-full "
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}