const Spec = require("../models/spec-model");

createSpec = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      message: "Spec not created!",
    });
  }

  const spec = new Spec(body);

  if (!spec) {
    return res.status(400).json({ success: false, error: err });
  }

  spec
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: spec.id,
        message: "Spec created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Spec not created!",
      });
    });
};

updateSpec = async (req, res) => {
  try {
    const spec = await Spec.findOne({ _id: req.params.id });

    if (!spec) {
      return res.status(400).json({ success: false, error: `Spec not found` });
    }

    spec.spec_title = req.body.spec_title;
    spec.spec_text = req.body.spec_text;
    spec.spec_image = req.body.spec_image;

    const updatedSpec = await spec.save();

    return res
      .status(200)
      .json({ success: true, data: updatedSpec.id, message: "Spec updated!" });
  } catch (error) {
    return res.status(500).json({ error, message: "Spec not updated!" });
  }
};

deleteSpec = async (req, res) => {
  try {
    const spec = await Spec.findOneAndDelete({ _id: req.params.id });

    if (!spec) {
      return res.status(400).json({ success: false, error: `Spec not found` });
    }

    return res.status(200).json({ success: true, data: spec });
  } catch (error) {
    return res.status(500).json({ error, message: "Spec not deleted!" });
  }
};

getSpecById = async (req, res) => {
  Spec.findOne({ _id: req.params.id })
    .then((spec) => {
      if (!spec) {
        return res
          .status(400)
          .json({ success: false, error: `Spec not found` });
      }
      return res.status(200).json({ success: true, data: spec });
    })
    .catch((error) => {
      return res.status(500).json({ error, message: "Spec not found!" });
    });
};

getSpecs = async (req, res) => {
  try {
    const specs = await Spec.find();
    if (!specs.length) {
      return res.status(400).json({ success: false, error: `Spec not found` });
    }
    return res.status(200).json({ success: true, data: specs });
  } catch (error) {
    return res.status(500).json({ error, message: "Spec not found!" });
  }
};

module.exports = {
  createSpec,
  updateSpec,
  deleteSpec,
  getSpecs,
  getSpecById,
};