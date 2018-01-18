# status-leds

A finals project from Nackademin. Stockholm.


## Requirements:
- Docker
- Docker Compose

## Testting:
- Rename 'secrets_template' to 'secrets'
- Edit file contents if needed
- Open a terminal in project directory

Start with:  
  
    docker-compose up
  
Open http://localhost in browser

Management page should run at port 80  
API should run at port 3001


Access individual LED color on localhost:3001/leds/:ID/color
