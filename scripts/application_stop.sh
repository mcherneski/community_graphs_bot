if pm2 list | grep -q cg_bot; then
    echo 'Stopping pm2' >> /home/ec2-user/cg_bot_logs/deploy.log
    pm2 stop cg_bot >> /home/ec2-user/cg_bot_logs/deploy.log
else
    echo 'cg_bot is not running.' >> /home/ec2-user/cg_bot_logs/deploy.log
fi

DEPLOY_DIR=/home/ec2-user/cg_bot

if [ -d "$DEPLOY_DIR" ]; then
    echo 'Removing old directory' >> /home/ec2-user/cg_bot_logs/deploy.log
    rm -rf "$DEPLOY_DIR/*"
else
    echo 'Directory does not exist' >> /home/ec2-user/cg_bot_logs/deploy.log
fi
    # echo 'Nothing to stop' >> /home/ec2-user/cg_bot_logs/deploy.log