Next:

- TotoList should be it's own component
- Uses state from App
- TotoFab should be stand-alone
- changes state input=active
- Toto utils (delete list, handleCheckbox etc) should be in utils/toto
- UseContext for anything that can't be reasonably restructured

Next: Cleanup flows, change position of calls as needed

- Client is making way too many re-renders. Need to separate fetches from render, or fix re-renders
  Next: More efficient workflow
- Env vars should be used in Webpack
- Webpack switch on env to tun prod/dev configs automated
- Docker-compose runs dev, needs production flow and prod.env

Next: write copy, splash page, intro
