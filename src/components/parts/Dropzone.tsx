import { useCallback } from 'react';

import { useDropzone } from 'react-dropzone';

import { Box, Typography } from '@mui/material';

type Props = {
  onUpload: (jsonData: any) => void;
};

const Dropzone: React.FC<Props> = ({ onUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles: Blob[]) => {
      acceptedFiles.forEach((file) => {
        if (file.type !== 'application/json') {
          console.log(`Invalid file type: ${file.type}`);
          return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
          const jsonData = JSON.parse(event.target.result as string);

          // 受け取ったデータ配列であることを確認する
          if (!Array.isArray(jsonData)) {
            console.log('Invalid data: not an array');
            return;
          }
          onUpload(jsonData);
        };
        reader.readAsText(acceptedFiles[0]);
      });
    },
    [onUpload],
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps()}
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      border='2px dashed'
      borderColor='gray.300'
      borderRadius='lg'
      p={4}
      m={4}
    >
      <input {...getInputProps()} />
      <Typography>Drag and drop JSON file here, or click to select file</Typography>
    </Box>
  );
};

export default Dropzone;
