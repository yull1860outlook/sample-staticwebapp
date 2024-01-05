import azure.functions as func

import fastapi

app = fastapi.FastAPI()

@app.get("/api/data")
async def index():
    return {
        "info": "Try /hello/Shivani for parameterized route.",
    }


