const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://dbAdmin:CF7ZethZEATzfpgA@cluster0.hktpuz8.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));
