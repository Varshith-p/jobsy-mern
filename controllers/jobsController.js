const createJob = async (req, res) => {
  return res.send("createJob");
};
const deleteJob = async (req, res) => {
  return res.send("deleteJob");
};
const getAllJobs = async (req, res) => {
  return res.send("getAllJobs");
};
const updateJob = async (req, res) => {
  return res.send("updateJob");
};
module.exports = {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
};
