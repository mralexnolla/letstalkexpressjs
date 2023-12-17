const { people } = require("../data");

const getPerson = (req, res) => {
  res.status(200).json({
    success: true,
    data: people,
  });
};

const createPerson = (req, res) => {
  const { id, name } = req.body;

  const personId = people.find((person) => person.id === id);
  if (personId) {
    return res.status(409).json({
      success: false,
      msg: `duplicate id ${id}`,
    });
  }

  people.push({ id, name });
  return res.status(200).json({
    success: true,
    msg: "Data updated successfully",
    data: [...people],
  });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res.status(400).json({
      success: false,
      msg: `No person with this id ${id}`,
    });
  }

  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({
    success: true,
    data: newPerson,
  });
};

const removePerson = (req, res) => {
  const personId = people.find((people) => people.id === Number(req.params.id));
  if (!personId) {
    return res.status(409).json({
      success: false,
      msg: "Id does not match",
    });
  }

  const delId = people.filter((person) => person.id !== Number(req.params.id));
  return res.status(200).json({
    success: true,
    msg: "data deleted successfully",
    data: delId,
  });
};

module.exports = {
  getPerson,
  createPerson,
  updatePerson,
  removePerson,
};
