const ContactModel = require('../models/ContactModel');

module.exports.getContact = async (req, res) => {
  const contact = await ContactModel.find();
  res.send(contact);
};

module.exports.saveContact = async (req, res) => {
  const { name } = req.body;

  ContactModel.create({ name }).then((data) => {
    console.log('Added Contact Info Successfully');
    console.log(data);
    res.send(data);
  });
};

module.exports.updateContact = async (req, res) => {
  const { _id, name } = req.body;
  ContactModel.findByIdAndUpdate(_id, { name })
    .then(() => res.send('Updated the Data in DB'))
    .catch((err) => console.log(err));
};

module.exports.deleteContact = async (req, res) => {
  const { _id } = req.body;
  ContactModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted Contact from DB'))
    .catch((err) => console.log(err));
};
