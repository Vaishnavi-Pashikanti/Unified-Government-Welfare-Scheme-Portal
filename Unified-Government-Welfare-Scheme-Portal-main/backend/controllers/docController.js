import Document from '../models/Document.js';
import User from '../models/User.js';
import { extractDocumentData } from '../services/ocr.js';

export const uploadDocument = async (req, res) => {
  const userId = req.user.id;
  const { document } = req.files;
  const newDoc = await Document.create({
    user: userId,
    url: document.path,
    hash: createHash(document.buffer)
  });
  await User.findByIdAndUpdate(userId, { $push: { documents: newDoc._id } });
  
  // Auto-fill profile
  const extractedData = await extractDocumentData(document.buffer);
  await User.findByIdAndUpdate(userId, {
    $set: extractedData
  });
  
  res.json(newDoc);
};

export const getDocuments = async (req, res) => {
  const userId = req.user.id;
  const documents = await Document.find({ user: userId });
  res.json(documents);
};

export const deleteDocument = async (req, res) => {
  const docId = req.params.docId;
  await Document.findByIdAndDelete(docId);
  res.json({ success: true });
};
