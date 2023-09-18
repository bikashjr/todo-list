const commonSchema = {
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
};

module.exports = commonSchema;
