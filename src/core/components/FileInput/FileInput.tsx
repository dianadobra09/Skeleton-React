import React, { useCallback, useRef, useState } from 'react';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { StyledInput, StyledInputContainer, StyledLabel, styles } from './FileInput.styles';
import { Button } from '../Button/Button';
import { Flex } from '../Flex/Flex';
import { Box } from '../Box/Box';

export interface FileInputProps {
  label?: string;
  isDisabled?: boolean;
  inputStyles?: StyleSystemProps;
  onChange: (files: File[]) => void;
}

const FileInput: React.FC<FileInputProps> = props => {
  const { label, onChange, isDisabled, inputStyles } = props;

  const [files, setFiles] = useState<File[]>([]);

  const inputStyling = { ...styles.input, ...inputStyles };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files;
    if (!f) {
      return;
    }
    const allFiles: File[] = [];
    for (let i = 0; i < f.length; i++) {
      const aux = f.item(i);
      if (aux !== null) {
        allFiles.push(aux);
      }
    }
    setFiles(allFiles);
    onChange(allFiles);
  }, []);

  return (
    <StyledInputContainer>
      {label && <StyledLabel __css={styles.label}>{label}</StyledLabel>}

      <StyledInput as="input" ref={inputRef} type={'file'} __css={inputStyling} onChange={handleFileChange} disabled={isDisabled} />
      <Flex alignItems={'center'}>
        <Button
          variant={'outline'}
          intent={'neutral'}
          onClick={e => {
            e.preventDefault();
            inputRef.current?.click();
          }}
          isDisabled={isDisabled}
          marginTop={2}
        >
          Choose file
        </Button>
        <Box typographyVariant={'body3'} marginLeft={2} color={'gray8'}>
          {files.length ? files.map((f: File) => f.name) : 'No file selected'}
        </Box>
      </Flex>
    </StyledInputContainer>
  );
};

export { FileInput };
