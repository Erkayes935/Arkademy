var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = "SELECT * FROM work";
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`ID \t NAME \t\t ADDRESS`);
        console.log(`----------------------------------------------------------`);
        result.forEach(word => {
            console.log(`${word.id} \t ${work.name} \t ${work.address}`);
        });
    });
});