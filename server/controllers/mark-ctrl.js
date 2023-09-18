const Mark = require("../models/mark-model");

createMark = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      message: "Mark not created!",
    });
  }

  const mark = new Mark(body);

  if (!mark) {
    return res.status(400).json({ success: false, error: err });
  }

  mark
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: mark.id,
        message: "Mark created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Mark not created!",
      });
    });
};

updateMark = async (req, res) => {
  try {
    const mark = await Mark.findOne({ _id: req.params.id });

    if (!mark) {
      return res.status(400).json({ success: false, error: `Mark not found` });
    }

    mark.type = req.body.type;
    mark.title = req.body.title;
    mark.piece = req.body.piece;
    mark.description = req.body.description;
    mark.image = req.body.image;

    const updatedMark = await mark.save();

    return res
      .status(200)
      .json({ success: true, data: updatedMark.id, message: "Mark updated!" });
  } catch (error) {
    return res.status(500).json({ error, message: "Mark not updated!" });
  }
};

deleteMark = async (req, res) => {
  try {
    const mark = await Mark.findOneAndDelete({ _id: req.params.id });

    if (!mark) {
      return res.status(404).json({ success: false, error: `Mark not found` });
    }

    return res.status(200).json({ success: true, data: mark });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, error: err });
  }
};

getMarkById = (req, res) => {
  Mark.findOne({ _id: req.params.id })
    .then((mark) => {
      if (!mark) {
        return res
          .status(404)
          .json({ success: false, error: `Mark not found` });
      }
      return res.status(200).json({ success: true, data: mark });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
};

getMarks = async (req, res) => {
  try {
    const marks = await Mark.find({});

    if (!marks.length) {
      return res.status(404).json({ success: false, error: `Mark not found` });
    }

    return res.status(200).json({ success: true, data: marks });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, error: err });
  }
};

module.exports = {
  createMark,
  updateMark,
  deleteMark,
  getMarks,
  getMarkById,
};
