import { useState } from 'react';

import type { SelectChangeEvent } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { Container } from '@src/components/layouts';
import { Dropzone } from '@src/components/parts';
import { usePostFirestore } from '@src/lib/hooks';

const Insert = () => {
  const [collectionName, setCollectionName] = useState('');
  const { postFirestore, loading, error } = usePostFirestore();

  const handleUpload = (data: any[]) => {
    if (collectionName !== '') {
      postFirestore(data, collectionName);
    }
    console.log(`loading:${loading}`);
    console.log(`error:${error}`);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCollectionName(event.target.value);
  };
  return (
    <>
      <Container>
        <h1>Upload JSON file and save data to Firestore</h1>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='label'>コレクション名</InputLabel>
          <Select
            labelId='label'
            value={collectionName}
            onChange={handleChange}
            label='コレクション名'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'recipes'}>レシピ</MenuItem>
            <MenuItem value={'foods'}>食材</MenuItem>
          </Select>
        </FormControl>
        <Dropzone onUpload={handleUpload} />
      </Container>
    </>
  );
};

export default Insert;
