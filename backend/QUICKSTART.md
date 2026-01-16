cd /Users/himanshupragyan/Desktop/code/brewcode-brainwave-/backend
uvicorn main:app --reload
```

You should see:
```
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process
INFO:     Started server process
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

---

## Step 2: Test the API

### Option A: Using Browser

Open your browser and go to:
```
http://localhost:8000/docs
```

This opens the **interactive API documentation** where you can:
1. Click on `/api/multi-agent/analyze/{symbol}`
2. Click "Try it out"
3. Enter a symbol like `RELIANCE`
4. Click "Execute"

### Option B: Using cURL

```bash
# Full analysis
curl http://localhost:8000/api/multi-agent/analyze/RELIANCE

# Get agent info
curl http://localhost:8000/api/multi-agent/agent-info

# Get current weights
curl http://localhost:8000/api/multi-agent/weights
```

### Option C: Using Python

```python
import requests

# Full analysis
response = requests.get("http://localhost:8000/api/multi-agent/analyze/RELIANCE")
data = response.json()

print(f"Risk Score: {data['overall_risk_score']}/100")
print(f"Risk Level: {data['risk_level']}")
print(f"\nExplanation:\n{data['explanation']}")
```

---

## Step 3: Run the Examples

```bash
# Make sure server is running first!
python examples/multi_agent_examples.py
```

This will run 6 examples showing:
- Full analysis
- Selective agent usage
- Feedback mechanism
- Weight inspection
- Agent information
- Programmatic usage

---

## Quick Test Commands

### 1. Health Check
```bash
curl http://localhost:8000/health
```
Expected: `{"status":"healthy"}`

### 2. Root Endpoint
```bash
curl http://localhost:8000/
```
Expected: `{"message":"API is running","status":"ok"}`

### 3. Multi-Agent Analysis
```bash
curl http://localhost:8000/api/multi-agent/analyze/RELIANCE
```
Expected: JSON with risk analysis

### 4. Agent Info
```bash
curl http://localhost:8000/api/multi-agent/agent-info
```
Expected: JSON with agent descriptions

---

## Troubleshooting

### Error: "ModuleNotFoundError"
```bash
# Make sure you're in the backend directory
cd /Users/himanshupragyan/Desktop/code/brewcode-brainwave-/backend

# Activate virtual environment if you have one
source venv/bin/activate  # or your venv path
```

### Error: "Address already in use"
```bash
# Kill the process using port 8000
lsof -ti:8000 | xargs kill -9

# Or use a different port
uvicorn main:app --reload --port 8001
```

### Error: "No module named 'app'"
```bash
# Make sure you're running from the backend directory
pwd  # Should show: /Users/himanshupragyan/Desktop/code/brewcode-brainwave-/backend
```

---

## API Endpoints Reference

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/multi-agent/analyze/{symbol}` | GET | Full multi-agent analysis |
| `/api/multi-agent/feedback` | POST | Provide learning feedback |
| `/api/multi-agent/weights` | GET | View current agent weights |
| `/api/multi-agent/agent-info` | GET | Agent documentation |

---

## Example: Full Workflow

```bash
# 1. Start server
uvicorn main:app --reload

# 2. In another terminal, test the endpoint
curl http://localhost:8000/api/multi-agent/analyze/RELIANCE | jq

# 3. Or use Python
python -c "
import requests
r = requests.get('http://localhost:8000/api/multi-agent/analyze/RELIANCE')
print(f'Risk Score: {r.json()[\"overall_risk_score\"]}/100')
print(f'Risk Level: {r.json()[\"risk_level\"]}')
"

# 4. View in browser
open http://localhost:8000/docs
```

---

## Testing Different Stocks

```bash
# Test multiple stocks
for stock in RELIANCE TCS INFY WIPRO HDFCBANK; do
  echo "Analyzing $stock..."
  curl -s "http://localhost:8000/api/multi-agent/analyze/$stock" | jq '.overall_risk_score, .risk_level'
  echo "---"
done
```

---

## Next Steps

1. ✅ Start the server
2. ✅ Test with `/docs` in browser
3. ✅ Try analyzing a stock
4. ✅ Run the examples
5. ✅ Integrate into your frontend

---

## Need Help?

- **API Documentation**: http://localhost:8000/docs
- **System Documentation**: `MULTI_AGENT_SYSTEM.md`
- **Implementation Details**: `IMPLEMENTATION_SUMMARY.md`
- **Code Examples**: `examples/multi_agent_examples.py`
