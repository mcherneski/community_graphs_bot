#!/bin/bash
echo 'Cleaning up old files' >> /home/ec2-user/ethSafari_bot_logs/deploy.log

sudo npm install pm2 -g
if [ -d "/home/ec2-user/ethSafari_bot/dist" ]; then
    rm -rf "/home/ec2-user/ethSafari_bot/dist/*"
fi 

if [ -d "/home/ec2-user/ethSafari_bot/dist/scenes" ]; then
    rm -rf "/home/ec2-user/ethSafari_bot/dist/scenes"
fi 