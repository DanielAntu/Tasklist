const validateCreateTask = (req, res, next) => {
    const { description } = req.body;

    if (!description || description === "") {
        res.status(422).json({ msg: "Você precisa preencher o campo tarefa" });
        return;
    }

    next();
};

module.exports = validateCreateTask;
