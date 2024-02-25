const adminAuth = (req, res, next) => {
    const user = req.user;
  
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ status: false, message: 'Admin access required' });
    }
  
    next();
  };
  
  export default adminAuth;
  