import Application from '../models/Application.js';

export const getApplicationStats = async (req, res) => {
  const stats = await Application.aggregate([
    { $group: { _id: '$status', count: { $sum: 1 } } }
  ]);
  res.json(stats);
};

export const getSchemePopularity = async (req, res) => {
  const popularity = await Scheme.aggregate([
    { $lookup: { from: 'applications', localField: '_id', foreignField: 'scheme', as: 'applications' } },
    { $project: { name: 1, applicationsCount: { $size: '$applications' } } }
  ]);
  res.json(popularity);
};
