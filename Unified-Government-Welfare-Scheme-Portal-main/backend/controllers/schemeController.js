import Scheme from '../models/Scheme.js';
import User from '../models/User.js';

export const getAllSchemes = async (req, res) => {
  const schemes = await Scheme.find().populate('applications');
  res.json(schemes);
};

export const getSchemeById = async (req, res) => {
  const schemeId = req.params.schemeId;
  const scheme = await Scheme.findById(schemeId).populate('applications');
  if (!scheme) return res.status(404).json({ msg: 'Scheme not found' });
  res.json(scheme);
};

export const createScheme = async (req, res) => {
  const { name, description, eligibility, requiredDocs, benefits } = req.body;
  const newScheme = await Scheme.create({
    name,
    description,
    eligibility,
    requiredDocs,
    benefits
  });
  res.json(newScheme);
};

export const updateScheme = async (req, res) => {
  const schemeId = req.params.schemeId;
  const updatedScheme = await Scheme.findByIdAndUpdate(schemeId, req.body, { new: true });
  if (!updatedScheme) return res.status(404).json({ msg: 'Scheme not found' });
  res.json(updatedScheme);
};

export const deleteScheme = async (req, res) => {
  const schemeId = req.params.schemeId;
  await Scheme.findByIdAndDelete(schemeId);
  res.json({ success: true });
};

export const getEligibleSchemes = async (req, res) => {
  const userId = req.user.id;
  const user = await User.findById(userId);
  const eligibleSchemes = await Scheme.find({
    'eligibility.age.min': { $lte: user.eligibility.age },
    'eligibility.age.max': { $gte: user.eligibility.age },
    'eligibility.income.max': { $gte: user.eligibility.income },
    'eligibility.occupation': { $in: user.eligibility.occupation }
  });
  res.json(eligibleSchemes);
};
