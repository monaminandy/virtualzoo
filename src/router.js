const express = require("express");
const path = require('path');

const ROOT_DIR = path.resolve();

const serveHome = (_, res) => {
  const filePath = `${ROOT_DIR}/virtual_zoo/animals.html`;
  res.sendFile(filePath);
};

const serveEducation = (req, res) => {
  const filePath = `${ROOT_DIR}/virtual_zoo/education.html`;
  res.sendFile(filePath);
}

const serveAbout = (req, res) => {
  const filePath = `${ROOT_DIR}/virtual_zoo/about.html`;
  res.sendFile(filePath);
}

const serveAnimals = (req, res) => {
  const filePath = `${ROOT_DIR}/virtual_zoo/animals.html`;
  res.sendFile(filePath);
}

const serveContact = (req, res) => {
  const filePath = `${ROOT_DIR}/virtual_zoo/contact.html`;
  res.sendFile(filePath);
}

const serveMuseum = (req, res) => {
  const filePath = `${ROOT_DIR}/virtual_zoo/museum.html`;
  res.sendFile(filePath);
}
const serveAnalytics = (req, res) => {
  const filePath = `${ROOT_DIR}/virtual_zoo/analytics.html`;
  res.sendFile(filePath);
}
const serveVr = (req, res) => {
  const filePath = `${ROOT_DIR}/virtual_zoo/vr.html`;
  res.sendFile(filePath);
}
const serveHologram = (req, res) => {
  const filePath = `${ROOT_DIR}/virtual_zoo/hologram.html`;
  res.sendFile(filePath);
}
const serve360vr = (req, res) => {
  const filePath = `${ROOT_DIR}/virtual_zoo/360vr.html`;
  res.sendFile(filePath);
}
const serveGames = (req, res) => {
  const filePath = `${ROOT_DIR}/index.html`;
  res.sendFile(filePath);
}

const logger = (req, res, next) => {
    console.log(req.path);
    next();
}

const createApp = () => {
    // Create a new Express application.
    const app = express();

    app.use(logger);
    
    app.get("/", serveHome);
    app.get("/education", serveEducation);
    app.get("/about", serveAbout);
    app.get("/animals", serveAnimals);
    app.get("/contact", serveContact);
    app.get("/museum", serveMuseum);
    app.get("/analytics", serveAnalytics);
    app.get("/vr", serveVr);
    app.get("/hologram", serveHologram);
    app.get("/360vr", serve360vr);
    app.get("/games", serveGames);
    app.use(express.static("virtual_zoo"));
    return app;
}

module.exports = {createApp};