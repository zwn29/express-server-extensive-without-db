//@desc  Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public

exports.getBootCamps = (req, res, next) => {
  res.status(200).json({ success: true, message: 'show all bootcamps' })
}
//@desc  Get single bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public

exports.getBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Get bootcamp ${req.params.id}` })
}

//@desc  Create new bootcamp
//@route POST /api/v1/bootcamps
//@access Private

exports.createBootCamp = (req, res, next) => {
  res.status(201).json({ success: true, message: 'create a new bootcamp' })
}

//@desc  UPDATE new bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Private

exports.updateBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamp ${req.params.id}` })
}

//@desc  Delete new bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Private

exports.deleteBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete bootcamp ${req.params.id}` })
}
