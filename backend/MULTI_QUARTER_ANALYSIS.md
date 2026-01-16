# Multi-Quarter Shareholding Analysis Enhancement

## Overview
Enhanced the shareholding pattern analysis to track **4 quarters** instead of 2, enabling detection of **gradual institutional exits** similar to historical cases like **Brightcom Group** and **Yes Bank**.

## Key Changes

### 1. **Extended Quarter Tracking**
- **Before**: Tracked only 2 quarters (latest + previous)
- **After**: Tracks 4 quarters (Q0, Q-1, Q-2, Q-3)
- **Benefit**: Detects slow, multi-quarter institutional exits that single-quarter analysis would miss

### 2. **New Metrics Added**

#### Multi-Quarter Trends (3-Quarter Analysis)
- `fii_trend_3q`: FII change over 3 quarters
- `dii_trend_3q`: DII change over 3 quarters  
- `retail_trend_3q`: Retail change over 3 quarters
- `promoter_trend_3q`: Promoter change over 3 quarters

#### Pattern Detection Flags
- `institutional_exit_pattern`: Boolean flag indicating gradual FII/DII exit (>2% decline over 3 quarters)
- `retail_trap_risk`: Boolean flag for retail trap (institutions exiting while retail accumulating)

### 3. **Enhanced Trap Detection**

#### Critical Retail Trap (Multi-Quarter)
Triggers when:
- FII or DII declining by **>2% over 3 quarters** (gradual exit)
- Retail increasing by **>2% over 3 quarters** (accumulation)
- **Warning**: "🚨 CRITICAL WARNING: RETAIL TRAP DETECTED!"
- **Reference**: Similar to Brightcom Group / Yes Bank pattern

#### Institutional Exit Warning
Triggers when:
- FII or DII declining by **>2% over 3 quarters**
- **Warning**: "⚠️ WARNING: Institutional Exit Pattern Detected"

#### Single Quarter Trap (Legacy)
Still monitors:
- QoQ FII/DII decline >1%
- QoQ Retail increase >1%
- **Warning**: "⚠️ WARNING: POTENTIAL RETAIL TRAP (Single Quarter)"

## Example Output

```
📊 Latest Quarter (Q0):
   Promoter: 0.00%
   FII: 18.65%
   DII: 20.25%
   Retail: 10.92%
   MF: 0.00%
   Pledge: 0.00%

📈 Quarter-over-Quarter Changes (QoQ):
   Promoter: +0.00%
   FII: -0.42%
   DII: +0.89%
   Retail: -0.37%
   MF: +0.00%

📊 3-Quarter Trends (Q0 vs Q-2):
   Promoter: +0.00%
   FII: -3.41%
   DII: +3.27%
   Retail: +0.46%

⚠️  WARNING: Institutional Exit Pattern Detected
   FII/DII reducing holdings over multiple quarters
```

## Why This Matters

### Historical Context
In cases like **Brightcom Group** and **Yes Bank**:
- Institutions don't exit overnight
- They gradually reduce holdings over **3-4 quarters**
- Retail investors often accumulate during this period
- By the time it's obvious, it's too late

### Detection Advantage
- **Early Warning**: Spots trends before they become critical
- **Gradual Patterns**: Catches slow bleeds that QoQ analysis misses
- **Better Context**: Distinguishes between noise and sustained trends
- **Risk Assessment**: Provides both short-term (QoQ) and medium-term (3Q) views

## API Response Structure

The `Shareholding` model now returns:

```json
{
  "promoter": 0.0,
  "fii": 18.65,
  "dii": 20.25,
  "retail": 10.92,
  "mf": 0.0,
  "pledge": 0.0,
  "promoter_change": 0.0,
  "fii_change": -0.42,
  "dii_change": 0.89,
  "retail_change": -0.37,
  "mf_change": 0.0,
  "fii_trend_3q": -3.41,
  "dii_trend_3q": 3.27,
  "retail_trend_3q": 0.46,
  "promoter_trend_3q": 0.0,
  "institutional_exit_pattern": true,
  "retail_trap_risk": false
}
```

## Files Modified

1. **`app/models/models.py`**
   - Added multi-quarter trend fields
   - Added pattern detection flags

2. **`app/scraping/shareholding_scraper.py`**
   - Extended quarter tracking from 2 to 4
   - Added 3-quarter trend calculations
   - Enhanced trap detection logic
   - Improved console output

## Testing

Tested with: TATAPOWER, RELIANCE, TCS, INFY
- ✅ Successfully extracts 4 quarters of data
- ✅ Calculates QoQ changes correctly
- ✅ Calculates 3-quarter trends correctly
- ✅ Detects institutional exit patterns
- ✅ Flags retail trap risk appropriately

## Next Steps

Consider adding:
1. **4-quarter trends** (full year comparison)
2. **Trend direction analysis** (accelerating vs decelerating exits)
3. **Historical pattern matching** (compare to known pump & dump cases)
4. **Severity scoring** (how bad is the exit pattern?)
