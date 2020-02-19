Next: Style UI components
Next: Cleanup flows, change position of calls as needed
Next: Make sure client, server, db can be separated to deploy

- Running 3 docker images on google cloud is too much.
- Client should build minimized
- Server should run container. Express will host the site, rewrite api server to put paths behind /api
- Mongodb can run in separate cloud instance
- Client is making way too many re-renders. Need to separate fetches from render, or fix re-renders
- Build/run scripts changed to docker-compose. Need to change edit workflow to update docker containers. Maybe volumes and restarts?

Next: write copy, splash page, intro
