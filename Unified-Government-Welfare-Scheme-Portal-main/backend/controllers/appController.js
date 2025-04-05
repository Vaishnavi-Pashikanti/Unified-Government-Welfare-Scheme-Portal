import Application from '../models/Application.js';
import Scheme from '../models/Scheme.js';
import User from '../models/User.js';

export const applyForScheme = async (req, res) => {
  const { schemeId } = req.body;
  const userId = req.user.id;
  const user = await User.findById(userId);
  const scheme = await Scheme.findById(schemeId);
  
  if (!scheme) return res.status(404).json({ msg: 'Scheme not found' });
  
  const newApp = await Application.create({
    user: userId,
    scheme: schemeId,
    status: 'pending'
  });
  
  await Scheme.findByIdAndUpdate(schemeId, { $push: { applications: newApp._id } });
  res.json(newApp);
};

export const getApplications = async (req, res) => {
  const userId = req.user.id;
  const applications = await Application.find({ user: userId });
  res.json(applications);
};

export const updateApplicationStatus = async (req, res) => {
  const appId = req.params.appId;
  const status = req.body.status;
  await Application.findByIdAndUpdate(appId, { status });
  res.json({ success: true });
};
