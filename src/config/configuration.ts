export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
   // DATABASE_URL: "mongodb://localhost:27017/SK-WAREHOUSE"
    DATABASE_URL: process.env.MONGODB_URI,
    test: process.env.MONGODB_URI_DOCKER 
  });
 