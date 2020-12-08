import http from "http";
import express from 'express';
import { PORT } from 'environment-configuration';
import apiRouter from './api';

const start = async () => {
    const server = express();

    server.use('/api', apiRouter);

    const serverInstance = http.createServer(server);

    serverInstance.listen(PORT, () => console.log(`API running on port:${PORT}`));
};

// Start the express server.
start();
