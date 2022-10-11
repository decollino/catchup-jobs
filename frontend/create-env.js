const fs = require('fs');
const path = `./.env`;
const vars = `
REACT_APP_BASE_BACKEND_URL=${process.env.BASE_BACKEND_URL}
`;
fs.writeFileSync(path, vars);
