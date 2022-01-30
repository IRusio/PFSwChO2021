FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9

RUN pip install starlette pytz requests pydantic sqlalchemy loguru aiofiles
COPY ./app /app
COPY ./static/ static