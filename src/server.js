import http from "http";
import express from 'express';
import apiRouter from './api';
import fs from "fs";

const PORT = process.env.PORT || '4000';

const start = async () => {
    const server = express();

    server.use('/api', apiRouter);

    const serverInstance = http.createServer(server);

    serverInstance.listen(PORT, () => console.log(`API running on port:${PORT}`));
};

// Start the express server.
start();
