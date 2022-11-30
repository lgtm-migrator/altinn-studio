const { getStoragePath } = require('../utils');
const fs = require('fs');
module.exports = (req, res) => {
  const filepath = getStoragePath('receipt.json');
  if (fs.existsSync(filepath)) {
    const content = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
    res.json(content);
  } else {
    res.json({
      $schema: 'altinn-studio-receipt-schema-url',
      components: [],
    });
  }
};
