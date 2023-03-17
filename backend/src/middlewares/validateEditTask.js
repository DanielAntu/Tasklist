const validateEditTask = (req, res, next) => {
    const { description, state } = req.body;

    if (!description || description === "") {
        res.status(422).json({ message: "A descrição é obrigatória!" });
        return;
    }

    if (!state || state === "") {
        res.status(422).json({ message: "A Situação é obrigatória!" });
        return;
    }

    next();
};

module.exports = validateEditTask;
