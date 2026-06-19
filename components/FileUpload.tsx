'use client';

type Props = {
  setFiles: React.Dispatch<
    React.SetStateAction<File[]>
  >;
};

export default function FileUpload({
  setFiles,
}: Props) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <div style={{textAlign: "center"}}>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleChange}
      />
    </div>
  );
}