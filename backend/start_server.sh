#!/bin/bash

# Activate virtual environment
source venv/bin/activate

# Start the server
uvicorn main:app --reload --host 127.0.0.1 --port 8000
