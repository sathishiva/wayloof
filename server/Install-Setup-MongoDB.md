# Install, Setup and Run MongoDB in MacOS Big Sur

## Steps to cleanup existing MongoDB if any

### Commands to Uninstall

```
launchctl list | grep mongo

launchctl remove homebrew.mxcl.mongodb

pkill -f mongod

brew uninstall mongodb-community
```

### Commands to remove settings and data

- settings: `rm -r /usr/local/etc/mongod.conf`
- logs: `rm -r /usr/local/var/log/mongodb`
- data: `rm -r /usr/local/var/mongodb`

## References

- [MongoDB Homebrew](https://github.com/mongodb/homebrew-brew)
- [Cleanup](https://gist.github.com/median-man/ea9e307d842c5f32adf20d383f9e6293)
- [Setup](https://blog.codewithdan.com/installing-mongodb-on-mac-catalina-using-homebrew/)
