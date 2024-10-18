module.exports = {
   apps: [
       {
           name: "CommunityGraphs_Bot",
           script: "node index.js",
           env: {
               NODE_ENV: "production",
               PORT: 3000
           },
           watch: true,
           merge_logs: true,
           time: true,
           autorestart: true,
       }
   ]
}