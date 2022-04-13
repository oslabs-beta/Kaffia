<p align="center">
  <a href="">
    <img src="./src/assets/github-logo.jpg" alt="Logo" width="400" >
  </a>
  <h4 align="center">Intuitive, customizable Kafka cluster metrics</h4>
  <p align="center">
    <a href=""><strong>Product Website »</strong></a>
    <br></br>
    <a href="https://github.com/oslabs-beta/kaffia"><img src="https://img.shields.io/badge/license-MIT-blue"/></a>
    <a href="https://github.com/oslabs-beta/kaffia/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/oslabs-beta/kaffia"></a>
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/oslabs-beta/kaffia">
    <br>
    <a href="https://github.com/oslabs-beta/kaffia/stargazers"><img src="https://img.shields.io/github/stars/oslabs-beta/kaffia?style=social&label=Star&"/></a>
  </p>
</p>

---

## Table of Contents 🗺️

- [About Kaffia](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Contributors](#contributors)
  - [Become a contributor](#contribute)
- [License](#license)

---

## <a name="about"></a> About Kaffia 📙

Apache Kafka is one of the most widely used stream-processing platforms, yet it lacks a free, easy-to-use GUI to monitor key Kafka cluster metrics. Without a comprehensive monitoring tool, the barrier to entry of Apache Kafka remains high, and engineers working with Kafka clusters may miss key issues as they come up.

That's why we created Kaffia. Kaffia is an open-source, intuitive GUI for Kafka clusters that allows you to tailor Kafka cluster monitoring to your needs and experience level. All you have to do is finish some quick setup, launch the app, input your monitoring and Kafka broker preferences, and let Kaffia handle the rest!

Read on to see some of our core features and learn how you can get Kaffia up and running on your machine.

---

## <a name="features"></a> Core Features 😊

### Easy setup ✅

- Easily configure your Kafka cluster broker count, monitor certain metrics, and sign up for email alerts
- One button launches your cluster, metrics scrapers, visualization service, and alert manager—automatically!

### Comprehensive visualization 🔎

- View key Kafka metrics (broker count, throughput, topic size, etc.)
- Live updates as you produce to and consume from your cluster
- Intuitive GUI to make parsing complex data less cumbersome

### Quickly launch and stop your cluster ⚡️

- Containerize your cluster in Docker Desktop with the click of a button
- Easily shut down your cluster from the Kaffia dashboard

---

## <a name="getting-started"></a> Getting Started with Kaffia ⬆️

Kaffia automates cluster configuration and launching by creating a Docker application that containerizes everything from Zookeeper to the metrics scraper. Make sure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) up and running before you launch Kaffia.

To get started, fork our repository and clone it to your local machine. To install all dependencies, run the following:

```sh
npm install
```

After the dependencies install, you're good to go! Just spin up the app by running this command inside of the Kaffia directory:

```sh
npm start
```

Once Kaffia is up and running, configuring and monitoring your cluster is simple! Just choose your broker count and metrics from the launch screen, hit submit, and watch your cluster launch automatically in Docker Desktop!

After the cluster launches, you'll be able to navigate throughout the app and view different key metrics that will help you monitor your cluster's health without having to do any setup on your end. Enjoy!

---

## <a name="contributors"></a> Contributors 👋

- Liz Blackledge <a href="https://github.com/Liz5112"><img style="height:17px;margin:0px 10px" src="https://img.shields.io/github/followers/Liz5112?style=social"></a> <a href="https://www.linkedin.com/in/lizblackledge01/"><img style="height:17px" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></img></a>
- Aiden Blinn <a href="https://github.com/aidenblinn"><img style="height:17px;margin:0px 10px" src="https://img.shields.io/github/followers/aidenblinn?style=social"></a> <a href="https://www.linkedin.com/in/aidenblinn/"><img style="height:17px" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></img></a>
- Ritchie Cervantes <a href="https://github.com/rcervant"><img style="height:17px;margin:0px 10px" src="https://img.shields.io/github/followers/rcervant?style=social"></a> <a href="https://www.linkedin.com/in/ritchie-cervantes/"><img style="height:17px" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></img></a>
- Jonathan Oh <a href="https://github.com/jonoh9257"><img style="height:17px;margin:0px 10px" src="https://img.shields.io/github/followers/jonoh9257?style=social"></a> <a href="https://www.linkedin.com/in/jonathan-oh/"><img style="height:17px" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></img></a>

### <a name="contribute"></a> Contribute to Kaffia 💪

We welcome any and all contributions to Kaffia! You can reach out to one of us on LinkedIn if you have any ideas, or you can fork the repository, make some changes, and submit a pull request.

---

## <a name="license"></a> License 🧐

MIT License
