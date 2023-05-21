import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Dropzone } from '@src/components/parts';

describe('Dropzone', () => {
  test('renders the component with correct text', () => {
    render(<Dropzone onUpload={() => {}} />);
    const text = screen.getByText(/drag and drop json file here/i);
    expect(text).toBeInTheDocument();
  });

  test('does not call onUpload prop when invalid JSON file is dropped', () => {
    const onUploadMock = jest.fn();
    const file = new File(['invalid json'], 'data.txt', {
      type: 'text/plain',
    });
    const { container } = render(<Dropzone onUpload={onUploadMock} />);
    const input = container.querySelector('input[type="file"]')!;
    fireEvent.change(input, { target: { files: [file] } });
    expect(onUploadMock).not.toHaveBeenCalled();
  });

  test('does not call onUpload prop when non-JSON file is dropped', () => {
    const onUploadMock = jest.fn();
    const file = new File(['not json'], 'data.csv', {
      type: 'text/csv',
    });
    const { container } = render(<Dropzone onUpload={onUploadMock} />);
    const input = container.querySelector('input[type="file"]')!;
    fireEvent.change(input, { target: { files: [file] } });
    expect(onUploadMock).not.toHaveBeenCalled();
  });
});
