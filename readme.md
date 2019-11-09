# Layer7-DStat
[![Discord](https://discordapp.com/api/guilds/539350226947801089/widget.png?style=shield)](https://discord.gg/e2cYZDv)
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://www.heroku.com/deploy/?template=https://github.com/UnlimitedBytes/Layer7-DStat)

A simple application for creating a Layer 7 DStat Graph.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* NodeJS
* NPM

### Installing
Create a new user:
```sh
$ sudo adduser layersevendstat
```

Navigate to the home directory of the new user:
```sh
$ sudo cd /home/layersevendstat
```

Copy the project to your local system
```sh
$ sudo git clone https://github.com/UnlimitedBytes/Layer7-DStat.git
```

Navigate into the project folder
```sh
$ sudo cd Layer7-DStat
```

Install the required dependencies
```sh
$ sudo npm install
```

Give the new user the ownership of the applications folder and all files in it:
```sh
$ sudo chown -R layersevendstat: .
```

At least switch the user and start the application by running
```sh
$ sudo su layersevendstat
$ npm start
```

Now you can open your webbrowser and go to: ``http://<your_servers_ip>``

Congratulations now you have your own Layer 7 DStat Graph.



## Deployment
Additional notes about how to deploy this on a live system.
> I just wannted to recommend [pm2](http://pm2.keymetrics.io/) for live deployment.



## Built With
- [Node.JS](https://nodejs.org/en/) - The programming language used
- [Express.JS](https://expressjs.com/de/) - The web framework used



## Contributing
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.



## Authors
* **Christian Peterson** - *Initial work* - [UnlimitedBytes](https://github.com/UnlimitedBytes)

See also the list of [contributors](https://github.com/UnlimitedBytes/Layer7-DStat/contributors) who participated in this project.



### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
