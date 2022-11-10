export const errorHandler = (error, req, res, next) => {
  res.status(error.status || 500).send(error.message || "Sorry there is error");
};

export const notFound =(req,res,next)=>{
  // res.status(404).json({message:"NOT FOUND"})

const err =new Error("NOT FOUND")
err.status=404

next(err)
}