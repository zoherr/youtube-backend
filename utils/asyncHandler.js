const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
     res.staus(500).json({
        success:false,
        message:  error.message
     })
    }
  };
};
//  fn = () => {return async (req,res,next) => {req,res,next}}
export default asyncHandler;
