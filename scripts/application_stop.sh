if pm2 list | grep -q EthSafari_Bot; then
    echo 'Stopping pm2' >> /home/ec2-user/ethSafari_bot_logs/deploy.log
    pm2 stop EthSafari_Bot >> /home/ec2-user/ethSafari_bot_logs/deploy.log
else
    echo 'EthSafari_Bot is not running.' >> /home/ec2-user/ethSafari_bot_logs/deploy.log
fi

DEPLOY_DIR=/home/ec2-user/ethSafari_bot

if [ -d "$DEPLOY_DIR" ]; then
    echo 'Removing old directory' >> /home/ec2-user/ethSafari_bot_logs/deploy.log
    rm -rf "$DEPLOY_DIR/*"
else
    echo 'Directory does not exist' >> /home/ec2-user/ethSafari_bot_logs/deploy.log
fi
    # echo 'Nothing to stop' >> /home/ec2-user/ethSafari_bot_logs/deploy.log