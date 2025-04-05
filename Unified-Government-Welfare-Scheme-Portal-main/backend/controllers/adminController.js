import Admin from '../models/Admin.js';

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  
  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }
  
  const token = generateJWT(admin);
  res.json({ token });
};

export const getAllSchemes = async (req, res) => {
  const schemes = await Scheme.find().populate('applications');
  res.json(schemes);
};

export const approveApplication = async (req, res) => {
  const { appId } = req.params;
  await Application.findByIdAndUpdate(appId, { status: 'approved' });
  res.json({ success: true });
};
