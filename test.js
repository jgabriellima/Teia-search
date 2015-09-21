var teia = require("./teia-search.js");

teia.init({
    base: "C:\\workspace_full_migration",
    restriction: "branch",
    exclude:"target",
    filefilter: "filter_migracao.txt",
    fileResult: "result.txt",
    indexpath: 2
});
teia.debug(true);
teia.run();
