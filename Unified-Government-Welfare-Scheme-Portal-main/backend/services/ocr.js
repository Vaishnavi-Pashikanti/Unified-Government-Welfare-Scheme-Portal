import { createWorker } from 'tesseract.js';

export const extractDocumentData = async (imageBuffer) => {
  const worker = await createWorker('eng');
  const { data: { text } } = await worker.recognize(imageBuffer);
  await worker.terminate();

  return {
    aadhaar: text.match(/\d{4}\s\d{4}\s\d{4}/)?.[0],
    pan: text.match(/[A-Z]{5}\d{4}[A-Z]/)?.[0],
    income: parseFloat(text.match(/Annual Income:\s?₹?(\d+,?\d+)/i)?.[1])
  };
};
